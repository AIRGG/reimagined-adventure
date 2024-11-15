import {
  Container,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core';

const items = [
  { title: '500+', description: 'Petani Binaan', imgUrl: '/assets/images/binaan.png' },
  { title: '> Rp 5 Miliar', description: 'Pendanaan Tersalurkan', imgUrl: '/assets/images/tersalurkan.png' },
];
const items2 = [
  { title: '> 15%', description: 'Peningkatan Pendapatan', imgUrl: '/assets/images/pendapatan.png' },
  { title: '750 Ha +', description: 'Luas Wilayah', imgUrl: '/assets/images/wilayah.png' },
  { title: '> 20%', description: 'Peningkatan Produktivitas', imgUrl: '/assets/images/produktivitas.png' },
];
export function ComEkosistem() {
  return (
    <Container my="xl">
      <Flex justify="center" direction="row" align="center">
        <Title order={1} c="secondary.9">
          Menuju Ekosistem yang Lebih Kuat Bersama Eratani
        </Title>
      </Flex>
      <Flex direction="row" align="center" justify="center" mt="xl">
        {/* Loop through the items array */}
        {items.map((item) => (
          <Flex direction="column" align="center" justify="flex-end">
            {/* Image */}
            <Image src={item.imgUrl} alt="Image" w="auto" h={250} />

            {/* Text Content */}
            <Flex direction="column" align="center" justify="center">
              <Text size="xl" c="secondary.9" fw={700} mt="sm">
                {item.title}
              </Text>

              <Text size="md" c="main">
                {item.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex direction="row" align="center" justify="center" mt="xl">
        {/* Loop through the items array */}
        {items2.map((item) => (
          <Flex direction="column" align="center" justify="flex-end">
            {/* Image */}
            <Image src={item.imgUrl} alt="Image" w="auto" h={250} />

            {/* Text Content */}
            <Flex direction="column" align="center" justify="center">
              <Text size="xl" c="secondary.9" fw={700} mt="sm">
                {item.title}
              </Text>

              <Text size="md" c="main">
                {item.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}
