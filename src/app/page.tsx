import {
  Header,
  Hero,
  BrandThesis,
  FeaturedProduct,
  ProductEcosystem,
  Approach,
  Founder,
  Contact,
  Footer,
} from "@/components/sections";
import { PageBackground } from "@/components/ui";

export default function Home() {
  return (
    <>
      <PageBackground />
      <Header />
      <main className="relative z-[1] overflow-x-hidden">
        <Hero />
        <BrandThesis />
        <FeaturedProduct />
        <ProductEcosystem />
        <Approach />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
