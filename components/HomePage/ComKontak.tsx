import { IconBrandWhatsapp } from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Textarea,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core';

export function ComKontak() {
  const theme = useMantineTheme();

  return (
    <Container my="xl">
      <Flex justify="center" direction="row" align="center" my="xl">
        <Title order={1} c="secondary.9">
          Ingin Menjadi Bagian dari Kami?
        </Title>
      </Flex>
      <Flex justify="center" direction="row" align="center" my="xl">
        <Text ta="center" size="24px" fw={400} lh="sm">
          Bersama kami membangun pertanian Indonesia karena Eratani{' '}
          <span
            style={{
              backgroundColor: theme.colors.main[5],
              fontWeight: 600,
            }}
          >
            #SelaluAdaUntukPetani
          </span>
        </Text>
      </Flex>
      <Flex justify="center" direction="row" align="center" my="xl">
        <Button leftSection={<IconBrandWhatsapp size={30} />} color="secondary.9" size="lg">
          Hubungi Kami
        </Button>
      </Flex>
      <Flex direction="row" align="start" justify="center" gap="xl">
        {/* Left - Map Section with Button */}
        <Box style={{ flex: 1, position: 'relative' }}>
          <Text ta="center" size="xl" fw={500}>
            Lokasi Kami
          </Text>
          {/* Map iframe */}
          <iframe
            title="Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.470877202127!2d106.8082907142835!3d-6.149127995537948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4181ff3426b419%3A0xb2498fa68e40198!2sUniversitas%20Gadjah%20Mada%20-%20Kampus%20Sleman!5e0!3m2!1sen!2sid!4v1621453707609!5m2!1sen!2sid"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          >
          </iframe>

          {/* Button inside the Map */}
          <Button
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
            }}
            variant="filled"
            color="main"
            radius={0}
          >
            <Text c="black">Lihat Lokasi</Text>
          </Button>
        </Box>

        {/* Right - Contact Form Section */}
        <Box style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '20px' }}>
          <Text ta="center" size="xl" fw={500}>
            Kontak Kami
          </Text>

          <form>
            {/* Name */}
            <TextInput
              label="Nama"
              placeholder="Masukkan Nama Anda"
              required
              style={{ marginBottom: '15px' }}
            />

            {/* Email */}
            <TextInput
              label="Email"
              placeholder="Masukkan Email Anda"
              required
              style={{ marginBottom: '15px' }}
            />

            {/* Phone Number */}
            <TextInput
              label="Nomor Handphone"
              placeholder="Masukkan Nomor Handphone Anda"
              required
              style={{ marginBottom: '15px' }}
            />

            {/* Message */}
            <Textarea
              label="Pesan Anda"
              placeholder="Tuliskan Pesan Anda"
              required
              style={{ marginBottom: '15px' }}
            />

            {/* Submit Button */}
            <Button
              color="main"
              type="submit"
              radius={0}
              style={{
                marginTop: '15px',
                marginLeft: 'auto',
                marginRight: 'auto',
                display: 'block',
              }}
            >
              <Text c="black">Kirim Pesan</Text>
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
}
