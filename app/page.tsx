import { About3 } from "@/components/about3";
import { BookADemo1 } from "@/components/book-a-demo1";
import { Footer2 } from "@/components/footer2";
import { Hero3 } from "@/components/hero3";
import { Navbar1 } from "@/components/navbar1";
import { Pricing2 } from "@/components/pricing2";

export default function Home() {
  return (
    <div className="lg:mx-30 mx-10">
      <Navbar1 />
      <Hero3 />
      <About3 />
      <Pricing2 />
      <BookADemo1 />
      <Footer2 />
    </div>
  );
}
