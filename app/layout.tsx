import Header from "../components/header";
import Footer from "../components/footer";
import { Expletus_Sans } from "next/font/google";
import bgImage from "../public/photography-bg.jpeg";
import "./globals.css";
import Image from "next/image";

const expletusSans = Expletus_Sans({
  variable: "--expletusSans-font",
  subsets: ["latin"],
});

export const metadata = {
  title: "Photography Portfolio",
  description: "Developed by Brenden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${expletusSans.variable}`}>
      <body>
        <div className="h-full overflow-auto">
          <Image
            src={bgImage}
            alt="background-image"
            placeholder="blur"
            className="fixed left-0 top-0 z-0 h-full object-cover"
          />
          <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t "></div>
          <Header />
          {/* <CategoryMenu /> */}
          <main className="relative pt-[110px] z-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
