import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const awalRamadhan = localFont({
  src: "./app/fonts/aAwalRamadhan.ttf",
  variable: "--font-awal-ramadhan",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});
