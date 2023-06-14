import "./globals.css";

import Sidebar from "@/components/global/sidebar/Sidebar";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";
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
      <body className={montserrat.className}>
        <RootAnimationLayout
        // Tag="main"
        // style="p-2 h-screen flex gap-1"
        // id="main-conent-container"
        >
          <Sidebar />
          {children}
        </RootAnimationLayout>
      </body>
    </html>
  );
}
