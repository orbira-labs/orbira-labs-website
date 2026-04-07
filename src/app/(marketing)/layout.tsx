import type { Metadata } from "next";
import { SITE_CONFIG, PRODUCTS } from "@/lib/constants";
import { PageBackground } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Orbira Labs",
    "product lab",
    "mobile apps",
    "digital products",
    "KasaBende",
    "kasa yönetimi",
    "işletme yönetimi",
    "dijital ürünler",
  ],
  authors: [{ name: "Seyyit Ali Perse" }],
  creator: "Orbira Labs",
  publisher: "Orbira Labs",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/og-image.png"],
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.email,
      contactType: "customer service",
    },
    sameAs: [],
    founder: {
      "@type": "Person",
      name: "Seyyit Ali Perse",
      jobTitle: "Founder & Developer",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SoftwareApplicationSchema() {
  const kasabende = PRODUCTS.find((p) => p.id === "kasabende");

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: kasabende?.name,
    description: kasabende?.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark" data-theme="marketing">
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <PageBackground />
      <div className="relative z-[1] flex min-h-svh flex-col">{children}</div>
    </div>
  );
}
