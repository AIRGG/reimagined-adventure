// @ts-nocheck
import { useEffect, useState } from 'react';
import { Button, Container, Table } from '@mantine/core';

export default function Soal4Page() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setData([]);
    const res = await fetch('https://gorest.co.in/public/v2/users');
    const resdata = await res.json();
    setData(resdata);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
        <Button onClick={() => fetchData()} style={{ marginBottom: '1rem' }}>
        Refresh
        </Button>
      <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Gender</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
      {data.map((row) => (
            <Table.Tr key={row.id}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.email}</Table.Td>
            <Table.Td>{row.gender}</Table.Td>
            </Table.Tr>
          ))}
      </Table.Tbody>
      </Table>
    </Container>
  );
}
