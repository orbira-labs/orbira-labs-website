import {
  Header,
  Hero,
  BrandThesis,
  FeaturedProduct,
  ProductEcosystem,
  Approach,
  Engines,
  Founder,
  Contact,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <BrandThesis />
        <FeaturedProduct />
        <ProductEcosystem />
        <Approach />
        <Engines />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
