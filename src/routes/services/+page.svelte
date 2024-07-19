<script lang="ts">
	import { goto } from '$app/navigation';
	import Title from '$lib/Title.svelte';
	import translate from '$lib/locales/function';
	import { onMount } from 'svelte';
	import * as Card from '$lib/components/ui/card';

	let services = [
		{
			key: 'residential',
			en: {
				title: 'Residential',
				description:
					'Take advantage of a competitive edge to sell your residential listings faster!'
			},
			fr: {
				title: 'Lieux résidentiels',
				description:
					"Profitez d'un avantage concurrentiel pour vendre vos annonces résidentielles plus rapidement !"
			},
			price: 199,
			duration: 60,
			img: '/res.avif'
		},
		{
			key: 'local-business',
			en: {
				title: 'Local Business',
				description: 'Highlight your business with a video for social media!'
			},
			fr: {
				title: 'Entreprises Locales',
				description:
					'Mettez en valeur votre commerce avec une vidéo à destination des réseaux sociaux !'
			},
			price: 199,
			duration: 60,
			img: '/local-business.jpeg'
		},
		{
			key: 'office',
			en: {
				title: 'Office',
				description: 'Promote your workspaces / coworking with a custom video!'
			},
			fr: {
				title: 'Bureaux',
				description:
					'Faites la promotion de vos espaces de travail / coworking  avec une vidéo sur mesure !'
			},
			price: 399,
			duration: 90,
			img: '/office.webp'
		},
		{
			key: 'hostel',
			en: {
				title: 'Hostel',
				description: 'Showcase your hotel complex with an immersive video!'
			},
			fr: {
				title: 'Hôtels et hébergements locatifs',
				description: 'Faites découvrir votre complexe hôtellier à travers une vidéo immersive !'
			},
			price: 399,
			duration: 90,
			img: '/hotel.jpeg'
		},
		{
			key: 'construction',
			en: {
				title: 'Construction',
				description:
					'Capture and share the progress of your construction projects like never before!'
			},
			fr: {
				title: 'Site de constructions',
				description:
					"Capturez et partagez l'avancement de vos projets de construction comme jamais auparavant !"
			},
			price: 299,
			duration: 60,
			img: '/construction.jpeg'
		}
	];

	onMount(() => {
		let lang = navigator.language.split('-')[0];
		if (lang !== 'fr' && lang !== 'en') lang = 'en';
		services = services.map((service) => ({
			...service[lang],
			price: service.price,
			duration: service.duration,
			img: service.img
		}));
	});
</script>

<svelte:head>
	<title>Services | DronInside</title>
</svelte:head>

<div class="flex flex-col">
	<Title title={translate('services_title')} subtitle={translate('service_subtitle')} />

	<div class="grid grid-cols-1 gap-4 px-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
		{#each services as service}
			<button on:click={() => goto(`/contact`)}>
				<Card.Root>
					<Card.Header class="text-left">
						<Card.Title>{service.title}</Card.Title>
						<Card.Description>{service.description}</Card.Description>
					</Card.Header>
					<Card.Content>
						<img alt="Home" src={service.img} class="h-56 w-full rounded-md object-cover" />
					</Card.Content>
					<Card.Footer>
						<div
							class="flex w-full flex-row items-center justify-center gap-8 align-middle text-xs"
						>
							<div
								class="msm:flex msm:flex-row sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
							>
								<svg
									viewBox="0 0 24 24"
									class="w-6 text-primary"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g><g id="SVGRepo_iconCarrier">
										<path
											d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										></path>
									</g></svg
								>
								<div class="msm:ml-2 mt-1.5 sm:mt-0">
									<p class="text-gray-500">{translate('services_duration')}</p>
									<p class="font-medium">+ {service.duration} min</p>
								</div>
							</div>

							<div
								class="msm:flex msm:flex-row sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
							>
								<svg
									fill="currentColor"
									class="w-6 text-primary"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g><g id="SVGRepo_iconCarrier"
										><path
											d="M21,12.692,11.308,3H3v8.308L12.692,21ZM9.923,9.923a1.958,1.958,0,1,1,0-2.769A1.957,1.957,0,0,1,9.923,9.923Z"
										></path></g
									></svg
								>
								<div class="msm:ml-2 mt-1.5 sm:mt-0">
									<p class="text-gray-500">{translate('services_price')}</p>
									<p class="font-medium">{service.price}€</p>
								</div>
							</div>
						</div>
					</Card.Footer>
				</Card.Root>
			</button>
		{/each}
	</div>
</div>
