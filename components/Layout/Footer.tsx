/* eslint-disable max-len */
import { useState } from 'react';
import {
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandTiktokFilled,
  IconBrandWhatsapp,
  IconBrandYoutubeFilled,
  IconWorld,
} from '@tabler/icons-react';
import {
  ActionIcon,
  Box,
  Container,
  Flex,
  Group,
  Image,
  rem,
  Text,
  useMantineTheme,
} from '@mantine/core';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Menu',
    links: [
      { label: 'Tim Kami', link: '#' },
      { label: 'Mitra Kami', link: '#' },
      { label: 'Tips & Berita Terkini', link: '#' },
      { label: 'Karir', link: '#' },
    ],
  },
];

export function Footer() {
  const [activeLanguage, setActiveLanguage] = useState<'EN' | 'IN'>('IN');
  const theme = useMantineTheme();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/assets/images/logo-white.png" h="30px" w="auto" fit="cover" alt="Logo" />
          <Text size="xs" className={classes.description}>
            Jl. Casablanca Raya Kav 88, Kel. Menteng Dalam, Kec. Tebet, Gedung Pakuwon Tower Lt 26
            Unit J, Jakarta Selatan, DKI Jakarta 12870, Indonesia
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
        <Flex justify="center" direction="row" align="center">
          <ActionIcon ml="md" size="lg" color="white" variant="subtle">
            <IconWorld style={{ width: 18, height: 18 }} />
          </ActionIcon>

          <Text
            size="xl"
            ml="lg"
            style={{
              textDecoration: activeLanguage === 'IN' ? 'underline' : 'none',
              textDecorationColor: activeLanguage === 'IN' ? theme.colors.main[6] : 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => setActiveLanguage('IN')}
          >
            IN
          </Text>
          <div style={{ marginLeft: '1rem' }}></div>
          <Text
            size="xl"
            style={{
              textDecoration: activeLanguage === 'EN' ? 'underline' : 'none',
              textDecorationColor: activeLanguage === 'EN' ? theme.colors.main[6] : 'transparent',
              cursor: 'pointer',
            }}
            onClick={() => setActiveLanguage('EN')}
          >
            EN
          </Text>
        </Flex>
      </Container>
      <Container className={classes.afterFooter}>
        <Box>
          <Text size="sm">Email : info.eratani@eratani.co.id</Text>
          <Text size="sm">Telepon : +62 811 952 2577</Text>
        </Box>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandTiktokFilled style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandLinkedinFilled style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandYoutubeFilled style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          <ActionIcon size="lg" color="white" variant="subtle">
            <IconBrandWhatsapp style={{ width: rem(18), height: rem(18) }} />
          </ActionIcon>
          {/* <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon> */}
        </Group>
      </Container>

      <Flex mih={50} gap="xs" justify="center" direction="row" align="center" wrap="nowrap">
        <Text size="sm">Copyright © 2021 by PT Eratani Teknologi Nusantara</Text>
      </Flex>
    </footer>
  );
}
