import { WHATSAPP_NUMBER } from "@/lib/data";

export const SITE_URL = "https://ecutrek.com";
export const SITE_NAME = "EcuTrek";
export const SITE_DESCRIPTION =
  "EcuTrek designs private, guided tours across Ecuador — Andean day trips from Quito, multi-day Sierra-to-Amazon packages, and Galápagos and Cuyabeno itineraries — led by naturalist guide Cristian Erazo, 28 years in the field.";

export const TRIPADVISOR_URL =
  "https://www.tripadvisor.com/Attraction_Review-g294308-d26455191-Reviews-Ecutrek-Quito_Pichincha_Province.html";

export const absoluteUrl = (path: string) =>
  new URL(path, SITE_URL).toString();

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/images/ecutrek-logo.png"),
    image: absoluteUrl("/images/cuencaBCK.jpeg"),
    description: SITE_DESCRIPTION,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: "ecutrek@hotmail.com",
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    founder: {
      "@type": "Person",
      name: "Cristian Erazo",
      jobTitle: "Tourist Guide",
      description:
        "28 years as a tourist guide, Bachelor's Degree in National Tourism Guiding, former mountaineering guide graduate.",
    },
    sameAs: [TRIPADVISOR_URL],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLdScriptProps(data: object) {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    },
  };
}
