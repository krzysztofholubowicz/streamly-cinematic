import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  type?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = 'Streamly Production';
const BASE_URL = 'https://streamlyproduction.lovable.app';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const SEO = ({ title, description, path = '/', type = 'website', jsonLd }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    description,
    logo: `${BASE_URL}/favicon.ico`,
    sameAs: [],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};
