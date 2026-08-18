import AboutSection from "@/components/home/about";
import FeaturedSection from "@/components/home/featuredsection";
import GallerySection from "@/components/home/gallerysection";
import Hero from "@/components/home/hero";
import ReserveCTA from "@/components/home/reservecta";
import Image from "next/image";

export default function Home() {
  return (
		<main>
			<Hero/>
			<AboutSection/>
			<FeaturedSection/>
			<GallerySection/>
			<ReserveCTA/>
		</main>
	);
}
