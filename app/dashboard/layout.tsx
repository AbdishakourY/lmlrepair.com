import Header from "@/components/header";
import PageWrapper from "@/components/pagewrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { Karla } from "next/font/google";
import { SideBar } from "../../components/sidebar";
import "../globals.css";

export const revalidate = 0;

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-karla",
});
export const metadata: Metadata = {
  title: "LML Portal",
  description: "LML Portal dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={karla.className}>
      <ThemeProvider
        themes={["dark", "custom", "light"]}
        attribute="class"
        enableSystem
        disableTransitionOnChange
      >
        <div className=" h-screen overflow-hidden">
          <SideBar />
          <div className="flex flex-col h-full w-full ">
            <Header />
            <PageWrapper children={children} />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
