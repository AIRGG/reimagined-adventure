import { Button, Group, Container, Title } from '@mantine/core';
import { useRouter } from 'next/router';

const FancyButtons = () => {
  const router = useRouter();

  const handleNavigation = (path:string) => {
    router.push(path);
  };

  return (
    <Container size="sm" my={40}>
      <Title order={2} ta="center" mb="xl">
        Navigasi Soal
      </Title>
      <Group justify="center" gap="md">
        {[1, 2, 3, 4, 5].map((number) => (
          <Button
            key={number}
            variant="gradient"
            gradient={{ from: 'cyan', to: 'teal', deg: 90 }}
            onClick={() => handleNavigation(`/soal${number}`)}
          >
            Soal {number}
          </Button>
        ))}
      </Group>
    </Container>
  );
};

export default FancyButtons;
