<script lang="ts">
  import Youtube from "svelte-youtube-embed";
  import Footer from '$lib/Footer.svelte';
  import Divider from '$lib/Divider.svelte';
  import translate from '$lib/locales/function';
</script>

<svelte:head>
  <title>New England Drone Tour</title> 
</svelte:head>

<div class="lg:h-[250px] sm:h-[100px]">
    <img src="/avata.jpg" alt="test" class="w-full h-full object-cover">
</div>

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

<div class="relative py-0 lg:h-[1000px]">
<img 
    src="/avata.png"
    alt="test"
    class="lg:w-2/3 mx-auto opacity-70 lg:-translate-y-[100px]"
>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 lg:-translate-y-3/4 text-center text-white lg:h-40 lg:px-[20px] lg:py-[20px]">
  <h2 class="text-7xl py-6 msm:text-lg">{translate("who_we_are")}</h2>
  <h3 class="text-4xl py-4 msm:text-md">{translate("company_description")}</h3>
  <ul class="self-center text-2xl msm:text-sm py-2">
    <li>{translate("years_flying_drones")}</li>
    <li>{translate("liability_insurance")}</li>
    <li>{translate("video_montage")}</li>
  </ul>
</div>
</div>

<div class="flex flex-col text-white lg:w-4/5 mx-auto py-4 msm:px-4">
  <div class="flex self-center my-8 text-5xl">{translate("showreel")}</div>
  <Youtube id="mS7L6ite8TI" />
</div>

<Footer />




<!--
<Testimonials />
-->

<Divider />

<div class="flex flex-col text-white lg:w-4/5 mx-auto py-4 msm:px-4">
    <div class="flex self-center my-8 text-5xl">SHOWREEL</div>
    <Youtube id="zHKfHjk8EiY" />
</div>

<Footer />