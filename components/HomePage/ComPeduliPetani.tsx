import { Container, Flex, Image, Title, Card, Text } from '@mantine/core';

const cardData = [
    {
      imageUrl: '/assets/images/fund.png',
      title: 'Pembiayaan',
      description: 'Eratani menyalurkan dukungan dan edukasi finansial berbasis teknologi bagi para petani yang mengalami kesulitan permodalan untuk meningkatkan produktivitas pertanian.',
    },
    {
      imageUrl: '/assets/images/group.png',
      title: 'Manajemen Rantai Pason',
      description: 'Eratani memfasilitasi akses kebutuhan petani melalui mitra penyedia sarana kebutuhan di bidang pertanian secara transparan dan terstandarisasi.',
    },
    {
      imageUrl: '/assets/images/share.png',
      title: 'Distribusi Penjualan',
      description: 'Eratani memfasilitasi petani untuk menjual dan mendistribusikan hasil panen secara langsung dan mudah dengan harga yang terstandarisasi.',
    },
    // Add more objects as needed
  ];

export function ComPeduliPetani() {
  return (
    <Container my="xl">
        <Flex justify="center" direction="row" align="center" my="xl">
        <Title order={1} c="secondary.9">
          Peduli Petani Bersama Eratani
        </Title>
        </Flex>

        <Flex direction="column" align="center" justify="center" gap="xl" wrap="wrap">
        {cardData.map((card, index) => (
          <Card key={index} shadow="sm" padding="lg" bg="gray.1" style={{ width: '80%' }}>
            <Flex direction="row" align="center" justify="flex-start" gap="xl">
              {/* Left - Image Section */}
              {/* <Box style={{ flex: 1 }}>
              </Box> */}
                <Image src={card.imageUrl} alt="Image" h={100} w="auto" />
                <Flex direction="column" justify="flex-start">
                <Text size="24px" fw={500} c="secondary.9">
                  {card.title}
                </Text>
                <Text size="14px" mt="xs" lh="sm">
                  {card.description}
                </Text>
                </Flex>

              {/* Right - Title and Description */}
              {/* <Box style={{ flex: 2 }}>
              </Box> */}
            </Flex>
          </Card>
        ))}
        </Flex>
    </Container>
  );
}
