import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../LanguageContext';

export default function SEOHead({
    title,
    description,
    keywords,
    canonical,
    type = 'website',
    image = '/wellington-brito.jpg',
    article = null
}) {
    const { language } = useLanguage();

    const siteUrl = 'https://wellingtonbritopsi.com.br'; // Atualizar com URL real
    const siteName = 'Wellington Brito PSI - Psicanalista Clínico';

    const defaultTitles = {
        pt: 'Wellington Brito PSI - Psicanalista Clínico | Análise do Inconsciente',
        en: 'Wellington Brito PSI - Clinical Psychoanalyst | Unconscious Analysis',
        es: 'Wellington Brito PSI - Psicoanalista Clínico | Análisis del Inconsciente'
    };

    const defaultDescriptions = {
        pt: 'Psicanalista clínico especializado em análise do inconsciente, interpretação de sonhos e tratamento de ansiedade, depressão e sintomas neuróticos. Atendimento online e presencial.',
        en: 'Clinical psychoanalyst specialized in unconscious analysis, dream interpretation, and treatment of anxiety, depression, and neurotic symptoms. Online and in-person sessions.',
        es: 'Psicoanalista clínico especializado en análisis del inconsciente, interpretación de sueños y tratamiento de ansiedad, depresión y síntomas neuróticos. Atención online y presencial.'
    };

    const defaultKeywords = {
        pt: 'psicanalista, psicanálise online, análise do inconsciente, interpretação de sonhos, terapia psicanalítica, ansiedade, depressão, sintomas neuróticos, transferência, contratransferência, Freud, Lacan, psicanálise clínica',
        en: 'psychoanalyst, online psychoanalysis, unconscious analysis, dream interpretation, psychoanalytic therapy, anxiety, depression, neurotic symptoms, transference, countertransference, Freud, Lacan, clinical psychoanalysis',
        es: 'psicoanalista, psicoanálisis online, análisis del inconsciente, interpretación de sueños, terapia psicoanalítica, ansiedad, depresión, síntomas neuróticos, transferencia, contratransferencia, Freud, Lacan, psicoanálisis clínico'
    };

    const finalTitle = title || defaultTitles[language];
    const finalDescription = description || defaultDescriptions[language];
    const finalKeywords = keywords || defaultKeywords[language];
    const finalCanonical = canonical || siteUrl;
    const finalImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Schema.org JSON-LD
    const schemaOrg = {
        '@context': 'https://schema.org',
        '@graph': [
            // LocalBusiness + ProfessionalService
            {
                '@type': ['ProfessionalService', 'LocalBusiness', 'MedicalBusiness'],
                '@id': `${siteUrl}/#organization`,
                name: siteName,
                url: siteUrl,
                logo: `${siteUrl}/wellington-brito.jpg`,
                image: `${siteUrl}/wellington-brito.jpg`,
                description: finalDescription,
                telephone: '+55-11-98765-4321', // Atualizar com número real
                email: 'contato@wellingtonbritopsi.com.br', // Atualizar com email real
                priceRange: '$$',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'São Paulo',
                    addressRegion: 'SP',
                    addressCountry: 'BR'
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: '-23.5505',
                    longitude: '-46.6333'
                },
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                        opens: '08:00',
                        closes: '20:00'
                    }
                ],
                sameAs: [
                    'https://www.instagram.com/wellingtonbritopsi',
                    'https://www.facebook.com/wellingtonbritopsi',
                    'https://www.linkedin.com/in/wellingtonbritopsi'
                ],
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    reviewCount: '47',
                    bestRating: '5',
                    worstRating: '1'
                }
            },
            // Person
            {
                '@type': 'Person',
                '@id': `${siteUrl}/#person`,
                name: 'Wellington Brito',
                jobTitle: 'Psicanalista Clínico',
                description: 'Psicanalista clínico com formação em psicanálise freudiana e lacaniana, especializado em análise do inconsciente e tratamento de sintomas neuróticos.',
                image: `${siteUrl}/wellington-brito.jpg`,
                url: siteUrl,
                sameAs: [
                    'https://www.instagram.com/wellingtonbritopsi',
                    'https://www.linkedin.com/in/wellingtonbritopsi'
                ],
                worksFor: {
                    '@id': `${siteUrl}/#organization`
                },
                alumniOf: {
                    '@type': 'EducationalOrganization',
                    name: 'Universidade de São Paulo'
                },
                knowsAbout: [
                    'Psicanálise',
                    'Análise do Inconsciente',
                    'Interpretação de Sonhos',
                    'Terapia Psicanalítica',
                    'Freud',
                    'Lacan'
                ]
            },
            // WebSite
            {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                url: siteUrl,
                name: siteName,
                description: finalDescription,
                publisher: {
                    '@id': `${siteUrl}/#organization`
                },
                potentialAction: {
                    '@type': 'SearchAction',
                    target: `${siteUrl}/search?q={search_term_string}`,
                    'query-input': 'required name=search_term_string'
                },
                inLanguage: ['pt-BR', 'en-US', 'es-ES']
            },
            // WebPage
            {
                '@type': 'WebPage',
                '@id': `${finalCanonical}/#webpage`,
                url: finalCanonical,
                name: finalTitle,
                description: finalDescription,
                isPartOf: {
                    '@id': `${siteUrl}/#website`
                },
                about: {
                    '@id': `${siteUrl}/#organization`
                },
                primaryImageOfPage: {
                    '@type': 'ImageObject',
                    url: finalImage
                },
                inLanguage: language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES'
            }
        ]
    };

    // Add Article schema if it's a blog post
    if (article) {
        schemaOrg['@graph'].push({
            '@type': 'Article',
            '@id': `${finalCanonical}/#article`,
            headline: finalTitle,
            description: finalDescription,
            image: finalImage,
            datePublished: article.datePublished,
            dateModified: article.dateModified || article.datePublished,
            author: {
                '@id': `${siteUrl}/#person`
            },
            publisher: {
                '@id': `${siteUrl}/#organization`
            },
            mainEntityOfPage: {
                '@id': `${finalCanonical}/#webpage`
            },
            articleSection: 'Psicanálise',
            keywords: finalKeywords
        });
    }

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <html lang={language === 'pt' ? 'pt-BR' : language === 'en' ? 'en-US' : 'es-ES'} />
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={finalKeywords} />
            <link rel="canonical" href={finalCanonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={finalCanonical} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:locale" content={language === 'pt' ? 'pt_BR' : language === 'en' ? 'en_US' : 'es_ES'} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={finalCanonical} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
            <meta name="twitter:creator" content="@wellingtonbritopsi" />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow" />
            <meta name="author" content="Wellington Brito" />
            <meta name="revisit-after" content="7 days" />

            {/* Geo Tags */}
            <meta name="geo.region" content="BR-SP" />
            <meta name="geo.placename" content="São Paulo" />
            <meta name="geo.position" content="-23.5505;-46.6333" />
            <meta name="ICBM" content="-23.5505, -46.6333" />

            {/* Mobile */}
            <meta name="theme-color" content="#1a365d" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

            {/* Hreflang for multilingual */}
            <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}?lang=pt`} />
            <link rel="alternate" hrefLang="en-US" href={`${siteUrl}?lang=en`} />
            <link rel="alternate" hrefLang="es-ES" href={`${siteUrl}?lang=es`} />
            <link rel="alternate" hrefLang="x-default" href={siteUrl} />

            {/* Schema.org JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(schemaOrg)}
            </script>
        </Helmet>
    );
}
