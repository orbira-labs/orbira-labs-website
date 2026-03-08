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

export default function Home() {
  return (
    <>
      <Header />
      <main>
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
