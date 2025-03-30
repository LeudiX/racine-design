import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Émile Racine",
    "jobTitle": "Industrial Designer & Artist",
    "url": "https://leudix.github.io/racine-design",
    "sameAs": [
      "https://instagram.com/designbyracine",
      "https://twitter.com/designbyracine"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default SchemaMarkup;