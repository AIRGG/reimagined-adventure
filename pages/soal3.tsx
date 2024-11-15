// @ts-nocheck
import { useState, useEffect } from 'react';
import { Table, TextInput, Button, Group, Modal, Container } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Soal3Page() {
  const [data, setData] = useState([
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingRow, setEditingRow] = useState(null);
  const [opened, setOpened] = useState(false);

  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      gender: '',
    },
  });
  const fetchData = async () => {
    const res = await fetch('/api/users');
    const resdata = await res.json();
    setData(resdata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Search filter logic
  const filteredData = data.filter(
    (row) =>
      row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add row
  const addRow = () => {
    const newRow = {
      id: data.length + 1,
      first_name: form.values.first_name,
      last_name: form.values.last_name,
      email: form.values.email,
      gender: form.values.gender,
    };
    setData([...data, newRow]);
    form.reset();
    setOpened(false);
  };

  // Edit row
  const editRow = (id) => {
    const rowToEdit = data.find((row) => row.id === id);
    setEditingRow(rowToEdit);
    form.setValues({
      first_name: rowToEdit.first_name,
      last_name: rowToEdit.last_name,
      email: rowToEdit.email,
      gender: rowToEdit.gender,
    });
    setOpened(true);
  };

  const saveEdit = () => {
    setData((prevData) =>
      prevData.map((row) =>
        row.id === editingRow?.id ? { ...row, ...form.values } : row
      )
    );
    setOpened(false);
    setEditingRow(null);
    form.reset();
  };

  // Remove row
  const removeRow = (id: number) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <Container>
      <Button onClick={() => fetchData()} style={{ marginBottom: '1rem' }}>
        Refresh
      </Button>

      <TextInput
        placeholder="Search by first name, last name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', width: 300 }}
      />

      <Button onClick={() => setOpened(true)} style={{ marginBottom: '1rem' }}>
        Add Row
      </Button>

      <Table striped withColumnBorders>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.email}</td>
              <td>
                <Group gap="xs">
                  <Button variant="outline" onClick={() => editRow(row.id)}>
                    Edit
                  </Button>
                  <Button variant="outline" color="red" onClick={() => removeRow(row.id)}>
                    Remove
                  </Button>
                </Group>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editingRow ? 'Edit Row' : 'Add Row'}
      >
        <form>
          <TextInput
            label="First Name"
            value={form.values.first_name}
            onChange={(event) => form.setFieldValue('first_name', event.currentTarget.value)}
          />
          <TextInput
            label="Last Name"
            value={form.values.last_name}
            onChange={(event) => form.setFieldValue('last_name', event.currentTarget.value)}
          />
          <TextInput
            label="Email"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          />
          <Group justify="flex-end" style={{ marginTop: '1rem' }}>
            <Button onClick={editingRow ? saveEdit : addRow}>{editingRow ? 'Save' : 'Add'}</Button>
          </Group>
        </form>
      </Modal>
    </Container>
  );
}
