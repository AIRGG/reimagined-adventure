import { useState } from 'react';
import { Container, Group, Burger, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';

const links = [
  { link: '/about', label: 'Features' },
  { link: '/pricing', label: 'Pricing' },
  { link: '/learn', label: 'Learn' },
  { link: '/community', label: 'Community' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {/* <MantineLogo size={28} /> */}
        <Image src="/assets/images/logo.png" h="30px" w="auto" fit="cover" alt="Logo" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <a
          href="/"
          className={classes['link-login']}
          data-active
          onClick={(event) => {
            event.preventDefault();
            setActive('/');
          }}
        >
          Mitra Petani
        </a>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
