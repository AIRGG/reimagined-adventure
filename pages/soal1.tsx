// import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
// import { Welcome } from '../components/Welcome/Welcome';
// import { Button } from '@mantine/core';
import { ComSlideshowImage } from '../components/HomePage/ComSlideshowImage';
import { ComEkosistem } from '../components/HomePage/ComEkosistem';
import { ComMitraKami } from '../components/HomePage/ComMitraKami';
import { ComKontak } from '../components/HomePage/ComKontak';
import { ComPeduliPetani } from '../components/HomePage/ComPeduliPetani';
import { Navbar } from '../components/Layout/Navbar';
import { Footer } from '../components/Layout/Footer';

export default function Soal1Page() {
  return (
    <>
      {/* <Welcome />
      <ColorSchemeToggle /> */}
      <Navbar></Navbar>
      <ComSlideshowImage />
      <ComEkosistem></ComEkosistem>
      <ComPeduliPetani></ComPeduliPetani>
      <ComMitraKami></ComMitraKami>
      <ComKontak></ComKontak>
      <Footer></Footer>
    </>
  );
}
