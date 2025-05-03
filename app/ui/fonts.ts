import { Fira_Code, Alumni_Sans } from "next/font/google";

export const AlumniSans = Alumni_Sans({
  weight: ["600", "800", "900"],
  subsets: ["latin"],
  variable: "--font-Alumni-Sans",
  preload: true
});
export const FiraCode = Fira_Code({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-Fira-Code",
});
