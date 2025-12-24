import About from '@/components/About';
import Homepage from '@/components/Homepage';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Projects />
      <Technologies />
      <About />
    </div>
  );
}
