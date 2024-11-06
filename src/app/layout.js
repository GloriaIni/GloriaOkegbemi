import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const LazyComponent = dynamic(() => import('@/components/Lazy'), {
  suspense: true,
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Gloria Okegbemi | Frontend 3ngineer",
  description: "Bridging goals with technical innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden"> 
      <body
        className={`bg-gray-200 text-gray-800 page bg-cover bg-no-repeat relative ${montserrat.variable} antialiased overflow-x-hidden`} 
      >
        <Suspense fallback={
          <div className="animate-fadeInOut h-[100vh] flex items-center justify-center">
            <h1 className="text-[20px] font-bold">gloria.okegbemi</h1>
          </div>
        }>
          <Header />
          <main className="overflow-x-hidden"> 
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
