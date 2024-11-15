/* eslint-disable max-len */
import { Carousel } from '@mantine/carousel';
import { Box, Center, Image, Text } from '@mantine/core';
import classes from './ComSlideshowImage.module.css';

const images = [
//   'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
//   'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
//   'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
//   'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
//   'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
    'https://eratani.co.id/hero/1.jpg',
    'https://eratani.co.id/hero/2.jpg',
    'https://eratani.co.id/hero/3.jpg',
    'https://eratani.co.id/hero/4.jpg',
    'https://eratani.co.id/hero/5.jpg',
];

export function ComSlideshowImage() {
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Box pos="relative" h="100%">
        <Image src={url} h="100%" w="100%" fit="cover" alt={`Slide ${index + 1}`} />
        <Center
          pos="absolute"
          inset={0}
          bg="rgba(0, 0, 0, 0.5)" // Overlay effect
        >
          <Box>
            <Text c="white" fz="30px" ta="center" fw={500}>
              #SelaluAdaUntukPetani
            </Text>
            <Text c="white" fz="22px" ta="center" w="60vw">
              Eratani adalah perusahaan startup Agri-tech yang fokus membangun sebuah ekosistem
              pertanian yang kuat dengan mendigitalisasi proses pertanian dari hulu hingga ke hilir.
              Eratani berupaya memberikan kemudahan akses kepada petani melalui teknologi yang kami
              miliki untuk meningkatkan produktivitas dan kesejahteraan ekosistem pertanian.
            </Text>
          </Box>
        </Center>
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Carousel
      withIndicators
      withControls
      loop
      height={400}
      classNames={classes}
      styles={{
        control: {
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
          },
      }}
    >
      {slides}
    </Carousel>
  );
}
