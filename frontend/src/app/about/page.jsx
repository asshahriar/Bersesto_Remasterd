import AboutDetails from '@/components/about/aboutdetails'
import AboutHero from '@/components/about/abouthero'
import HeadChefs from '@/components/about/headchefs'
import KitchenGallery from '@/components/about/kitchengallery'
import ReserveCTA from '@/components/home/reservecta'
import React from 'react'

export default function page() {
	return (
		<main>
			<AboutHero/>
			<AboutDetails/>
			<HeadChefs/>
			<KitchenGallery/>
			<ReserveCTA/>
		</main>
	)
}
