<script lang="ts">
    import Testimonials from '$lib/Testimonials.svelte';
    import Title from '$lib/Title.svelte';
    import Youtube from "svelte-youtube-embed";
    import Footer from '$lib/Footer.svelte';
</script>

<div class="h-[250px]">
    <img src="/avata.jpg" alt="test" class="w-full h-full object-cover">
</div>

<section class="overflow-hidden bg-gray-800 sm:grid sm:grid-cols-2">
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
  
    <img
      alt="Student"
      src="/camera.gif"
      class="h-56 w-full object-cover sm:h-full"
    />
</section>

<div class="relative">
  <img 
      src="/avata.png"
      alt="test"
      class="w-2/3 mx-auto opacity-60 -translate-y-[100px]"
  >
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center text-white h-40 px-[20px] py-[20px]">
    <h2 class="text-7xl py-6">Who We Are</h2>
    <h3 class="text-4xl py-4">New England Drone Tours is a full-service video production company based out of Boston, MA. We specialize in drone tour videos for real estate, businesses, hotels, offices, venues, and more!</h3>
    <ul class="self-center text-2xl py-2">
      <li>Part 107 Certified</li>
      <li>10+ Years flying Drones</li>
      <li>$10 Million Liability Insurance</li>
    </ul>
  </div>
</div>



<!--
<Testimonials />
-->

<div class="flex flex-col text-white">
    <div class="flex self-center my-8 text-5xl">SHOWREEL</div>
    <Youtube id="q2Y3f0lHnMs" />
</div>

<Footer />