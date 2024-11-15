// @ts-nocheck
import {
    TextInput,
    Checkbox,
    Radio,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
    Group,
    Notification,
  } from '@mantine/core';
  import { useState } from 'react';

  export default function Soal5Page() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        gender: 'male',
        status: true,
      });
      const [errors, setErrors] = useState({});
      const [success, setSuccess] = useState('');
      const [loading, setLoading] = useState(false);

      const handleChange = (field, value) => {
        setForm({ ...form, [field]: value });
        setErrors({ ...errors, [field]: '' }); // Clear field-specific error on change
      };

      const handleSubmit = async () => {
        setLoading(true);
        setErrors({});
        setSuccess('');
        try {
          const response = await fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer bd5bc875d46a8fcde2bf6fdbb55374c2963645a68ba2458794d0001112c5884b',
            },
            body: JSON.stringify({
                ...form,
                status: form.status ? 'active' : 'inactive',
              }),
          });

          const data = await response.json();

          if (!response.ok) {
            const errorMessages = {};
            data.forEach((error) => {
              errorMessages[error.field] = error.message;
            });
            setErrors(errorMessages);
          } else {
            setSuccess('User registered successfully!');
            setForm({ email: '', name: '', gender: 'male', status: true });
          }
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      };

      return (
        <Container size={420} my={40}>
          <Title ta="center">Register User</Title>
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Have an account?{' '}
            <Anchor size="sm" component="button">
              Login
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            {success && (
              <Notification color="teal" title="Success" mb="md">
                {success}
              </Notification>
            )}
            <TextInput
              label="Email"
              placeholder="you@mai.com"
              required
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              error={errors.email}
            />
            <TextInput
              label="Name"
              placeholder="Your name"
              required
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              error={errors.name}
              mt="md"
            />
            <Radio.Group
              label="Gender"
              required
              value={form.gender}
              onChange={(value) => handleChange('gender', value)}
              error={errors.gender}
              mt="md"
            >
            <Group spacing="xl" mt="xs">
                <Radio value="male" label="Male" />
                <Radio value="female" label="Female" />
            </Group>
            </Radio.Group>
            <Checkbox
              label={`Status: ${form.status ? 'Active' : 'Inactive'}`}
              checked={form.status}
              onChange={(e) => handleChange('status', e.currentTarget.checked)}
              mt="md"
            />
            <Button
              fullWidth
              mt="xl"
              onClick={handleSubmit}
              loading={loading}
            >
              Register
            </Button>
          </Paper>
        </Container>
      );
  }
