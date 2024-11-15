import React, { useState } from 'react';
import { List, Text, TextInput, Container } from '@mantine/core';

export default function Soal2Page() {
  const arr = [
    'Danawi Liam',
    'Tarjaya',
    'Daruna',
    'Warsoni',
    'John Wick',
    'Hadi PS',
    'Derian Lekso',
  ];

  // State to store the search input
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the array based on the search term (case insensitive)
  const filteredArr = searchTerm
    ? arr.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()))
    : arr;
  return (
    <>
      <Container>
        <TextInput
          label="Search"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          style={{ marginBottom: '1rem', width: 300 }}
        />

        <List>
          {filteredArr.map((item, index) => (
            <List.Item key={index}>
              <Text>{item}</Text>
            </List.Item>
          ))}
        </List>
      </Container>
    </>
  );
}
