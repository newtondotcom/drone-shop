<script lang="ts">
	import { goto } from '$app/navigation';
	import Title from '$lib/Title.svelte';
	import translate from '$lib/locales/function';
	import { onMount } from 'svelte';

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

<div class="mx-auto min-h-screen max-w-screen-xl bg-gray-800 px-5 pb-20">
	<Title title={translate('services_title')} subtitle={translate('service_subtitle')} />

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
		{#each services as service}
			<button
				on:click={() => goto(`/contact`)}
				class="msm:py-8 block rounded-lg bg-slate-200 p-4 shadow-sm shadow-indigo-100"
			>
				<img alt="Home" src={service.img} class="h-56 w-full rounded-md object-cover" />

				<div class="mt-2">
					<dl>
						<div>
							<dt class="sr-only">Duration</dt>
							<dd class="font-medium">{service.title}</dd>
						</div>

						<div>
							<dt class="sr-only">Price</dt>
							<dd class="text-sm text-gray-500">{service.description}</dd>
						</div>
					</dl>

					<div class="mt-6 flex items-center justify-center gap-8 align-middle text-xs">
						<!--
            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg class="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Parking</p>
                <p class="font-medium">2 spaces</p>
              </div>
            </div>

            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg class="h-4 w-4 text-indigo-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>
              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Parking</p>
                <p class="font-medium">2 spaces</p>
              </div>
            </div>
      
            <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                class="h-4 w-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
      
              <div class="mt-1.5 sm:mt-0">
                <p class="text-gray-500">Bathroom</p>
      
                <p class="font-medium">2 rooms</p>
              </div>
            </div>
            -->

						<div class="msm:flex msm:flex-row sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
							<svg
								viewBox="0 0 24 24"
								class="w-6 text-indigo-500"
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

						<div class="msm:flex msm:flex-row sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
							<svg
								fill="currentColor"
								class="w-6 text-indigo-500"
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
				</div>
			</button>
		{/each}
	</div>
</div>
