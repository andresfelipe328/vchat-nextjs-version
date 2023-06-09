import "./globals.css";

import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Vchat",
  description: "real time chatting application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <Sibar/> */}
        {/* <BasicAnimationLayout
          Tag="main"
          style="p-2 h-screen flex gap-1"
          id="main-conent-container"
        > */}
        {children}
        {/* </BasicAnimationLayout> */}
      </body>
    </html>
  );
}
