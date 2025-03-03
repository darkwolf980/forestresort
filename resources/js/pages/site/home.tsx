import { HeroSection } from '@/components/site/hero-section';
import { Head } from '@inertiajs/react';
import Navbar from '../../components/site/navbar';

const Home = () => {
  return (
    <>
      <Head title={'Forest treetop holiday resort - Home'} />
      <Navbar />
      <HeroSection />
      <main className="min-h-screen">{/* Page content will go here */}</main>
    </>
  );
};
export default Home;
