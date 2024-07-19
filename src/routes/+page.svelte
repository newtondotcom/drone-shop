<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Youtube from 'svelte-youtube-embed';
	import Divider from '$lib/Divider.svelte';
	import translate from '$lib/locales/function';
	import { goto } from '$app/navigation';
	import Modal from '$lib/Modal.svelte';
	import Spotlight from '$lib/components/aceternity/Spotlight.svelte';
	import GridBg from '$lib/components/aceternity/GridBg.svelte';

	const titleColor = '#fff';
	const titleShadowColor = '#000';
	const titleFontFamily = 'Montserrat';
</script>

<svelte:head>
	<title>DronInside</title>
</svelte:head>

<section class="flex flex-col justify-center overflow-hidden px-6 align-middle">
	<div class="hidden px-4 lg:flex">
		<img src="/cover.png" class="h-full w-full rounded-xl object-cover" alt="cover" />
	</div>
	<div class="h-[150px] lg:hidden">
		<img src="/mobile.png" alt="header" class="h-full w-full object-cover" />
	</div>
	<div class="flex flex-row">
		<div class="w-1/2 px-10 py-8">
			<div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
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
				src="/hotel.jpeg"
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
	</div>
	<!--
	<div class="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center text-neutral-200 h-16 font-bold">
		<div class="mx-4">{translate('years_flying_drones')}</div>
		<div class="mx-4">{translate('video_montage')}</div>
	</div>
	-->
</div>

<Divider className="hidden dark:block" />

<div class="msm:px-4 mx-auto flex flex-col py-4 text-transparent lg:w-4/5">
	<GridBg>
		<div
			class="my-8 flex self-center bg-opacity-50 bg-gradient-to-b from-primary to-primary-light bg-clip-text text-center text-4xl font-bold text-primary text-transparent md:text-7xl"
		>
			Showreel
		</div>
		<Youtube
			id="TTYi8xfwReI"
			--title-color={'transparent'}
			--title-shadow-color="{'transparent'}100"
			--title-font-family={titleFontFamily}
			--overlay-bg-color="hsla(0, 0%, 0%, 0.3)"
			--overlay-transition="all 100ms linear"
			animations={false}
		>
			<button class="text-black">
				<svg viewBox="0 0 24 24" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"
					><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g><g id="SVGRepo_iconCarrier">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z"
							fill="currentColor"
						></path>
					</g></svg
				>
			</button>
		</Youtube>
	</GridBg>
</div>
