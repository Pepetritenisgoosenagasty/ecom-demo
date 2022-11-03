import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import "@/styles/global.css";
import { Montserrat } from "@next/font/google";
import "keen-slider/keen-slider.min.css"


const montserrat = Montserrat();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="" />
      <meta name="description" content="" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
        <title>Demo Ecommerce Application</title>
      </head>
      <body>
        <Header />
        <main className="min-h-full">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
