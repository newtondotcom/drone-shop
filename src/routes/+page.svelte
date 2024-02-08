<script lang="ts">
  import Youtube from "svelte-youtube-embed";
  import Divider from '$lib/Divider.svelte';
  import translate from '$lib/locales/function';
  import { goto } from "$app/navigation";
  import Modal from "$lib/Modal.svelte";
  import { onMount } from "svelte";

  const titleColor = "#fff";
  const titleShadowColor = "#000";
  const titleFontFamily = "Montserrat";

  let loading = true;
  let mobile = false;

  function toggleLoading() {
    loading = !loading;
  }
  
  function handleVideoLoaded(event: Event & { currentTarget: EventTarget & HTMLVideoElement; }) {
    toggleLoading();
  }

  onMount(() => {
    const width = window.innerWidth;
    if (width < 640) {
      mobile = true;
    }
  });
</script>


<svelte:head>
  <title>DronInside</title> 
</svelte:head>

<Modal
open={loading}
bind:loading
/>

{#if !mobile}
<div class="lg:h-[250px] msm:hidden">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video 
  src="/video.mp4" 
  autoplay 
  loop
  on:loadeddata={handleVideoLoaded}
  id="video"
  class="w-full h-full object-cover" />
</div>
{:else}
<div class="lg:hidden msm:h-[150px]">
  <img 
  src="/mobile.png"
  alt="header"
  class="w-full h-full object-cover"/>
</div>
{/if}

<section class="overflow-hidden flex flex-row align-middle justify-center bg-gray-800 sm:grid sm:grid-cols-2">
  <div class="p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
          {translate("video_description")}
      </h2>

      <p class="hidden text-gray-200 md:mt-4 md:block">
          {translate("video_text")}
      </p>

      <div class="mt-4 md:mt-8">
        <button
          class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          on:click={()=>goto("/contact")}
        >
          {translate("get_started")}
        </button>
      </div>
    </div>
  </div>
  <div class="flex flex-col align-middle self-center msm:hidden">
    <img
      alt="Student"
      src="/camera.gif"
      height="auto"
      class="flex w-full object-cover lg:scale-75"
    />
  </div>
</section>

<Divider />

<div class="relative py-0 lg:h-[1000px]">
<img 
    src="/avata.png"
    alt="test"
    class="lg:w-2/3 mx-auto opacity-70 lg:-translate-y-[100px] msm:-y-translate-1/3"
>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-3/4 msm:-translate-y-1/3 text-center text-white lg:h-40 lg:px-[20px] lg:py-[20px]">
  <h2 class="text-6xl py-4 msm:text-xl">{translate("who_we_are")}</h2>
  <h3 class="text-3xl py-2 msm:text-lg">{translate("company_description")}</h3>
  <ul class="self-center text-xl msm:text-sm py-2 msm:opacity-50">
    <li>{translate("years_flying_drones")}</li>
    <li>{translate("liability_insurance")}</li>
    <li>{translate("video_montage")}</li>
  </ul>
</div>
</div>

<!--
<Testimonials />
-->
<div class="msm:h-20"></div>

<Divider />

<div class="flex flex-col text-white lg:w-4/5 mx-auto py-4 msm:px-4">
    <div class="flex self-center my-8 text-5xl">SHOWREEL</div>
    <Youtube id="mS7L6ite8TI"
    --title-color={titleColor}
    --title-shadow-color="{titleShadowColor}100"
    --title-font-family={titleFontFamily}
    --overlay-bg-color="hsla(0, 0%, 0%, 0.3)" 
    --overlay-transition="all 100ms linear" 
    animations={false}
    >
        <button class="text-black">
            <svg viewBox="0 0 24 24" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="currentColor"></path> </g></svg>
        </button>
    </Youtube>
</div>