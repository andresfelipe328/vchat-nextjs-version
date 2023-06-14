import "./globals.css";

import Sidebar from "@/components/global/sidebar/Sidebar";
import BasicAnimationLayout from "@/components/layouts/animationLayouts/BasicAnimationLayout";
import RooteAnimationLayout from "@/components/layouts/animationLayouts/RooteAnimationLayout";

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
      <body className={`noJS ${montserrat.className}`}>
        <RooteAnimationLayout>
          <Sidebar />
          {children}
        </RooteAnimationLayout>
      </body>
    </html>
  );
}
