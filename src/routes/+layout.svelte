<script lang="ts">
    import { goto } from "$app/navigation";
    import Divider from "$lib/Divider.svelte";
    import Footer from "$lib/Footer.svelte";
    import translate from '$lib/locales/function';
    import "../app.css";
    import { page } from "$app/stores";

    import "$lib/nprogress.css";
    import NProgress from "nprogress";
    import { navigating } from "$app/stores";

    NProgress.configure({
        minimum: 0.16,
    });

    $: {
        if ($navigating) {
            NProgress.start();
        } else NProgress.done();
    }

    let menu = false;

    function goMobile(route: string) {
      menu = !menu;
      goto(route);
    }

    let darktheme = false;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darktheme = true;
    }

  </script>

  <svelte:head>
    {#if darktheme}
      <link rel="icon" href="/icons/favicon-white.ico" />
      <link rel="apple-touch-icon" href="/icons/favicon-white.png" />
      <meta name="theme-color" content="#ffffff" />
    {:else}
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/icons/favicon.png" />
    <meta name="theme-color" content="#000000" />
    {/if}
  </svelte:head>
  
  {#if $page.url.pathname !==  "/logo"}
  <header class="bg-gray-800 text-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <button class="flex flex-row" on:click={()=>goto("/")} >
            <div class="flex">
            <span class="sr-only">Home</span>
              <img class="h-8 w-auto sm:h-10" src="/logo.png" alt="Logo" />
            </div>
          </button>
        </div>
          {#if !menu}
          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <button class="transition hover:text-gray-500/75" on:click={()=>goto("/")}>{translate("home")}</button>
                </li>

                <li>
                  <button class="transition hover:text-gray-500/75" on:click={()=>goto("/services")}>{translate("services")}</button>
                </li>

                <li>
                  <button class="transition hover:text-gray-500/75" on:click={()=>goto("/portfolio")}>{translate("portfolio")}</button>
                </li>

                <li>
                  <button class="transition hover:text-gray-500/75" on:click={()=>goto("/faq")}>{translate("faq")}</button>
                </li>

              </ul>
            </nav>
          </div>
          {/if}
  
        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">  
            <div class="hidden sm:flex">
              <button
                on:click={()=>goto("/contact")}
                class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
              >
                {translate("contact_us")}
              </button>
            </div>
          </div>
  
          <div class="block md:hidden">
            <button 
            class="rounded bg-gray-100 p-2 text-gray-400 transition hover:text-gray-400/75"
            on:click={()=>menu = !menu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  
    {#if menu}
    <nav aria-label="Global">
        <ul class=" w-full flex-col align-middle justify-center text-center items-center gap-6 text-lg mb-2">
            <li>
                <button class="transition py-2 hover:text-gray-500/75" on:click={()=>goMobile("/")}>{translate('home')}</button>
            </li>

            <li>
                <button class="transition py-2 hover:text-gray-500/75" on:click={()=>goMobile("/services")}>{translate("services")}</button>
            </li>

            <li>
                <button class="transition py-2 hover:text-gray-500/75" on:click={()=>goMobile("/portfolio")}>{translate("portfolio")}</button>
            </li>

            <li>
                <button class="transition py-2 hover:text-gray-500/75" on:click={()=>goMobile("/faq")}>{translate("faq")}</button>
            </li>
        </ul>
    </nav>
    {/if} 

    <Divider />
  </header>

  {/if}


  
<main class="bg-gray-800">
  <slot />
</main>


{#if $page.url.pathname !==  "/logo"}
<Footer />
{/if}