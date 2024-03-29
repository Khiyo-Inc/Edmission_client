import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Organizer/Navbar";
import Footer from "@/components/Organizer/Footer";
import ReduxProvider from "@/components/Redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Edmission",
  description: "A product of Khiyo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`font-inter bg-white text-ed-text`}> */}
      <body className={`${inter.className} bg-white text-ed-text`}>
        <ReduxProvider>
          <div className="App min-h-[100vh] flex flex-col justify-between">
            <nav>
              <Navbar />
            </nav>
            <div className="w-full p-4 lg:p-0 lg:max-w-[60%] lg:w-[1200px] m-auto">
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
