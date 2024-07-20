<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Youtube from 'svelte-youtube-embed';
	import Divider from '$lib/components/ux/Divider.svelte';
	import translate from '$lib/locales/function';
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/experimental/Modal.svelte';
	import Spotlight from '$lib/components/aceternity/Spotlight.svelte';
	import GridBg from '$lib/components/aceternity/GridBg.svelte';
	import { YouTube as YTB } from 'sveltekit-embed';

	const titleColor = '#fff';
	const titleShadowColor = '#000';
	const titleFontFamily = 'Montserrat';
</script>

<svelte:head>
	<title>DronInside</title>
</svelte:head>

<section class="flex flex-col justify-center overflow-hidden px-6 align-middle">
	<div class="hidden px-4 lg:flex">
		<img src="/cover.jpg" class="h-full w-full rounded-xl object-cover" alt="cover" />
	</div>
	<div class="h-[150px] lg:hidden">
		<img src="/mobile.jpg" alt="header" class="h-full w-full object-cover" />
	</div>
	<div class="flex flex-row">
		<div class="my-auto flex h-full w-1/2 flex-col justify-center px-10 align-middle">
			<div class="mx-auto max-w-xl text-center">
				<h2 class="text-2xl font-bold text-black md:text-3xl">
					{translate('video_description')}
				</h2>

				<p class="hidden text-black md:mt-4 md:block">
					{translate('video_text')}
				</p>

				<div class="mt-4 md:mt-8">
					<Button on:click={() => goto('/contact')} class="font-semibold">
						{translate('get_started')}
					</Button>
				</div>
			</div>
		</div>
		<div class="w-1/2">
			<img
				src="/tranche.jpg"
				alt="header"
				class="z-10 h-full w-full translate-y-[-10%] object-cover shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]"
			/>
		</div>
	</div>
</section>

<Divider />

<div
	class="relative flex h-[40rem] w-full flex-col overflow-hidden rounded-md bg-white/[0.96] antialiased bg-grid-white/[0.02] dark:bg-black/[0.96] md:items-center md:justify-center"
>
	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
	<div class=" relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
		<h1
			class="bg-opacity-50 bg-gradient-to-b from-neutral-400 to-neutral-700 bg-clip-text text-center text-4xl font-bold text-transparent dark:from-neutral-50 dark:to-neutral-400 md:text-7xl"
		>
			{translate('who_we_are')}
		</h1>
		<p
			class="mx-auto mt-4 max-w-lg text-center text-base font-semibold text-neutral-600 dark:font-normal dark:text-neutral-300"
		>
			<span class="font-bold text-primary">Droninside</span>
			{translate('company_description')}
		</p>

		<div
			class="mx-auto mt-8 max-w-lg text-center text-base font-semibold text-neutral-700 dark:font-normal dark:text-neutral-200"
		>
			{translate('discover_services')}
			<a href="/services" class="text-primary underline">{translate('discover_here')}</a>
		</div>
	</div>
	<!--
	<div class="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center text-neutral-200 h-16 font-bold">
		<div class="mx-4">{translate('years_flying_drones')}</div>
		<div class="mx-4">{translate('video_montage')}</div>
	</div>
	-->
</div>

<Divider className="hidden dark:block" />

<GridBg>
	<div
		class="mb-2 flex self-center bg-opacity-50 bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-primary text-transparent md:text-7xl"
	>
		Showreel
	</div>
	<YTB youTubeId="TTYi8xfwReI" aspectRatio="16:9" width="65vw" height="100%" />
</GridBg>
