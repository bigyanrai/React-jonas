import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful moundtains and dark forest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative flex flex-col antialiased ${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <Header />
        <div className="grid flex-1 px-8 py-12">
          <main className="max-w-7x mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
