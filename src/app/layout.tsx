import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const awalRamadhan = localFont({
  src: "./fonts/aAwalRamadhan.ttf",
  variable: "--font-awal-ramadhan",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://shawarmafarid.com.ar"),

  title: "Promociones y Catering | Shawarma Farid",
  description:
    "Descubrí promociones y propuestas especiales de Shawarma Farid. Catering árabe para eventos, fiestas y celebraciones, con opciones árabes, mexicanas y argentinas.",

  keywords: [
    "shawarma",
    "catering árabe",
    "comida árabe",
    "shawarma farid",
    "catering para eventos",
    "catering fiestas",
    "comida mexicana catering",
    "catering argentino",
    "eventos cordoba",
    "comida oriental",
    "falafel",
    "keppe",
    "comida para cumpleaños",
    "cordoba catering",
    "promociones catering",
    "combos especiales",
    "cordoba",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/farid.html",
    siteName: "Catering Farid",
    title: "Catering Farid",
    description:
      "Promociones y combos especiales de catering para eventos. Sorprendé a tus invitados con sabores únicos.",
    images: [
      {
        url: "https://sweetcocol-pasteleria.onrender.com/farid/logo.png", // 👈 imagen en /public/farid/
        width: 1200,
        height: 630,
        alt: "Catering Farid",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Promociones Catering Farid",
    description:
      "Catering para eventos. Promociones y combos especiales.",
    images: ["https://sweetcocol-pasteleria.onrender.com/farid/logo.png"],
  },
};

export default function PropagandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${awalRamadhan.variable}`}>
        {children}
      </body>
    </html>
  );
}
