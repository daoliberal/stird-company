import Image from "next/image";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main>
      <header className="fixed left-0 top-0 z-50 w-full px-6 py-5 backdrop-blur-md bg-background/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Image
            src="/logo.png"
            alt="Stird"
            width={120}
            height={120}
            className="h-10 w-10 rounded-lg"
            priority
          />
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              About
            </a>
            <a
              href="#products"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Products
            </a>
            <a
              href="mailto:batur@stird.co.uk"
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FooterSection />
    </main>
  );
}
