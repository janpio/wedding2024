import "./globals.css";
import { Parisienne, Lora, Libre_Barcode_39 } from "next/font/google";
import localFont from "next/font/local";
// Parisienne and Libre Baskerville
// Parisienne and Lora
// Sacramento and Montserrat
//
import Header from "./Header";
import Footer from "./Footer";

const lora = Lora({
	weight: ["400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	variable: "--font-lora",
});

const classy = localFont({
	variable: "--font-classy",
	src: [
		{
			path: "../public/fonts/Classy/Classy.regular.ttf",
			weight: "400",
			style: "normal",
		},
	],
});

const roseritta = localFont({
	variable: "--font-roseritta",
	src: [
		{
			path: "../public/fonts/roseritta/roseritta.regular.otf",
			weight: "400",
			style: "normal",
		},
	],
});

const motherland = localFont({
	variable: "--font-motherland",
	src: [
		{
			path: "../public/fonts/motherland/motherland.regular.otf",
			weight: "400",
			style: "normal",
		},
	],
});

const bodoni = localFont({
	variable: "--font-bodoni",
	src: [
		{
			path: "../public/fonts/bodoni-moda/bodoni-moda.ttf",
			weight: "400",
			style: "normal",
		},
	],
});

const parisienne = Parisienne({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-parisienne",
});

const libreBarcode = Libre_Barcode_39({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
	variable: "--font-libreBarcode",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className={`${roseritta.variable} ${motherland.variable} ${bodoni.variable} ${classy.variable} ${libreBarcode.variable} ${parisienne.variable} ${lora.variable}`}
		>
			<head>
				<link rel="shortcut icon" href="/heart.png" />
				<title>Natasha & Derek</title>
			</head>
			<body className={`relative`}>
				<Header />
				<div className="min-w-full flex justify-center min-h-[calc(100vh-160px)]">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
