import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'As Chaves Internas da Oratória - Gabriel Boccia | Foco para Candidatos Políticos',
  description:
    'Domine a arte da oratória política com Gabriel Boccia. Aprenda técnicas de comunicação assertiva, construção de credibilidade e persuasão honesta para candidatos políticos. Transforme sua capacidade de influenciar e conquistar eleitores.',
  keywords: [
    'oratória política',
    'comunicação política',
    'Gabriel Boccia',
    'candidatos políticos',
    'discurso político',
    'persuasão',
    'debate político',
    'comunicação assertiva',
    'campanha eleitoral',
    'retórica política',
  ],
  authors: [{ name: 'Gabriel Boccia' }],
  openGraph: {
    title: 'As Chaves Internas da Oratória - Gabriel Boccia',
    description:
      'Foco para candidatos políticos. Domine a arte da comunicação política e conquiste eleitores com oratória assertiva e persuasiva.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'As Chaves Internas da Oratória - Gabriel Boccia',
    description:
      'Foco para candidatos políticos. Domine a arte da comunicação política.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Book',
              name: 'As Chaves Internas da Oratória',
              alternateName: 'Foco para candidatos políticos',
              author: {
                '@type': 'Person',
                name: 'Gabriel Boccia',
              },
              description:
                'Um guia completo de oratória política focado em comunicação assertiva, construção de credibilidade e persuasão honesta para candidatos políticos.',
              inLanguage: 'pt-BR',
              bookFormat: 'https://schema.org/BookFormatType',
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
