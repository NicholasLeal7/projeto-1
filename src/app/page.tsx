import { Header } from "@/components/home/Header";
import { SectionFAQ } from "@/components/home/SectionFAQ";
import { SectionHome } from "@/components/home/SectionHome";
import { SectionWorks } from "@/components/home/SectionWorks";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionHome />
        <SectionWorks />
        <SectionFAQ />
      </main>
      <Footer />
    </>
  );
}
