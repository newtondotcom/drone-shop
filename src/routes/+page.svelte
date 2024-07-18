<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import Youtube from 'svelte-youtube-embed';
	import Divider from '$lib/Divider.svelte';
	import translate from '$lib/locales/function';
	import { goto } from '$app/navigation';
	import Modal from '$lib/Modal.svelte';
	import Spotlight from '$lib/Spotlight.svelte';

	const titleColor = '#fff';
	const titleShadowColor = '#000';
	const titleFontFamily = 'Montserrat';
</script>

<svelte:head>
	<title>DronInside</title>
</svelte:head>

<div class="hidden lg:flex">
	<img src="/cover.png" class="h-full w-full rounded-3xl object-cover px-10 py-4" alt="cover" />
</div>
<div class="h-[150px] lg:hidden">
	<img src="/mobile.png" alt="header" class="h-full w-full object-cover" />
</div>

<section class="flex flex-row justify-center overflow-hidden align-middle sm:grid sm:grid-cols-2">
	<div class="p-8 md:p-12 lg:px-16 lg:py-24">
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
</section>

<Divider />

<div
	class="bg-grid-white/[0.02] relative flex h-[40rem] w-full flex-col overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center"
>
	<Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
	<div class=" relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
		<h1
			class="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"
		>
			{translate('who_we_are')}
		</h1>
		<p class="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
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

<div class="msm:h-20"></div>

<Divider />

<div class="msm:px-4 mx-auto flex flex-col py-4 text-black lg:w-4/5">
	<div class="my-8 flex self-center text-5xl font-semibold text-primary">SHOWREEL</div>
	<Youtube
		id="TTYi8xfwReI"
		--title-color={titleColor}
		--title-shadow-color="{titleShadowColor}100"
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
</div>
