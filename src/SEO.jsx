import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, path, noindex = false }) {
  const base = "https://daniescportfolio.web.app";

  return (
    <Helmet>
      <html lang="es" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${base}${path}`} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="geo.region" content="ES-GR" />
      <meta name="geo.placename" content="Granada" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${base}${path}`} />
      <meta property="og:locale" content="es_ES" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DaniEscDev — Diseño Web Granada",
        "description": description,
        "url": `${base}${path}`,
        "telephone": "+34 640 294 034",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Granada",
          "addressRegion": "Andalucía",
          "addressCountry": "ES"
        },
        "areaServed": "Granada",
        "priceRange": "€€"
      })}</script>
    </Helmet>
  );
}