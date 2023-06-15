import "./globals.css";

import Sidebar from "@/components/global/sidebar/Sidebar";
import RootAnimationLayout from "@/components/layouts/animationLayouts/RootAnimationLayout";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Vchat",
    template: "Vchat- %s",
  },
  description: "real time chatting application",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`noJS overflow-hidden ${montserrat.className}`}>
        <RootAnimationLayout>
          <Sidebar />
          {children}
        </RootAnimationLayout>
      </body>
    </html>
  );
}
