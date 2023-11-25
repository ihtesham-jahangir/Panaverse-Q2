//Attractive Navbar and Footer in NEXT JS  
import bg from '@/assets/bg.jpg'
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <Image src={bg} alt="" className='absolute opacity-60 w-full z-[-1]' />
    </>
  );
}
