import "./globals.css";

import Sidebar from "@/components/global/sidebar/Sidebar";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";
import RootAnimationLayout from "@/components/layouts/animationLayouts/RootAnimationLayout";

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
        <RootAnimationLayout>
          <Sidebar />
          {children}
        </RootAnimationLayout>
      </body>
    </html>
  );
}
