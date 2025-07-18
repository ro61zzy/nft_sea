import Nav from '@/components/Nav';
import { Cinzel } from 'next/font/google'


const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'], // choose weights you want
  variable: '--font-cinzel', // optional: for CSS variable
  display: 'swap',
})



export default function Home() {
  return (
   <div className="container mx-auto px-12">
      <Nav />
    <p className={`text-4xl text-red-700 ${cinzel.className}`}>check check check</p>
    </div>
  );
}
