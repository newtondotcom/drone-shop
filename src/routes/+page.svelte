<script lang="ts">
    import Youtube from "svelte-youtube-embed";
    import Divider from '$lib/Divider.svelte';
</script>

<div class="lg:h-[250px] sm:h-[100px]">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video 
    src="/video.mp4" 
    autoplay 
    loop
    class="w-full h-full object-cover">
</div>

<section class="overflow-hidden flex flex-row align-middle justify-center bg-gray-800 sm:grid sm:grid-cols-2">
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
        <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
            Single-take walkthrough videos
            that stand out.
        </h2>
  
        <p class="hidden text-gray-200 md:mt-4 md:block">
            We fly small drones indoors creating seamless walkthrough videos for real estate, businesses, hotels, & more.
        </p>
  
        <div class="mt-4 md:mt-8">
          <button
            class="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
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
    <h2 class="text-7xl py-6 msm:text-lg">Who We Are</h2>
    <h3 class="text-4xl py-4 msm:text-md">New England Drone Tours is a full-service video production company based out of Boston, MA. We specialize in drone tour videos for real estate, businesses, hotels, offices, venues, and more!</h3>
    <ul class="self-center text-2xl msm:text-sm py-2">
      <li>Part 107 Certified</li>
      <li>10+ Years flying Drones</li>
      <li>$10 Million Liability Insurance</li>
    </ul>
  </div>
</div>



<!--
<Testimonials />
-->

<Divider />

<div class="flex flex-col text-white lg:w-4/5 mx-auto py-4 msm:px-4">
    <div class="flex self-center my-8 text-5xl">SHOWREEL</div>
    <Youtube id="zHKfHjk8EiY" />
</div>