import { Container, Flex, Image, Title } from '@mantine/core';

export function ComMitraKami() {
  return (
    <Container my="xl">
        <Flex justify="center" direction="row" align="center" my="xl">
        <Title order={1} c="secondary.9">
          Mitra Kami
        </Title>
        </Flex>
        <Flex direction="row" align="center" justify="center" gap="xl">
      <Image src="/assets/images/bulog.png" alt="Image" w="auto" h={100} />
      <Image src="/assets/images/PIPangan.png" alt="Image" w="auto" h={100} />
      <Image src="/assets/images/MDBT.png" alt="Image" w="auto" h={100} />

        </Flex>
    </Container>
  );
}
