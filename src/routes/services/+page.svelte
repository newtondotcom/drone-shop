<script lang="ts">
    import { goto } from "$app/navigation";
    import Title from "$lib/Title.svelte";
    import translate from "$lib/locales/function";
    import { onMount } from "svelte";

  let services = [
  {
      "en": {
          title: "Residential",
          description: "Sell your residential listings faster with Indoor Drone Tours!",
          img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          price: "199",
          duration: 60
      },
      "fr": {
          title: "Résidentiel",
          description: "Vendez vos annonces résidentielles plus rapidement avec les visites en drone intérieur !",
          img: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
          price: "199",
          duration: 60
      }
  },
  {
      "en": {
          title: "Local Business",
          description: "Showcase your business with Indoor Drone Tours!",
          img: "/local-business.jpeg",
          price: "199",
          duration: 60
      },
      "fr": {
          title: "Entreprise Locale",
          description: "Mettez en valeur votre commerce avec une visite en drone intérieur !",
          img: "/local-business.jpeg",
          price: "199",
          duration: 60
      }
  },
  {
      "en": {
          title: "Office",
          description: "Virtual Tours and Drone Video For Office Buildings",
          img: "/office.webp",
          price: "399",
          duration: 90
      },
      "fr": {
          title: "Bureau",
          description: "Visites virtuelles et vidéos de drones pour les immeubles de bureaux",
          img: "/office.webp",
          price: "399",
          duration: 90
      }
  },
  {
      "en": {
          title: "Hostel",
          description: "Fly through your hotel and resort with Indoor Drone Tours",
          img: "/hotel.jpeg",
          price: "399",
          duration: 90
      },
      "fr": {
          title: "Hôtels et hébergements locatifs",
          description: "Parcourez votre hôtel et votre complexe avec les visites en drone intérieur",
          img: "/hotel.jpeg",
          price: "399",
          duration: 90
      }
  },
  {
      "en": {
          title: "Construction",
          description: "Capture your construction projects like never before with Indoor Drone Tours!",
          img: "/construction.jpeg",
          price: "299",
          duration: 60
      },
      "fr": {
          title: "Construction",
          description: "Capturez vos projets de construction comme jamais auparavant avec les visites en drone intérieur !",
          img: "/construction.jpeg",
          price: "299",
          duration: 60
      }
  }
];

onMount(() => {
        let lang = navigator.language.split("-")[0];
        if (lang !== "fr" && lang !== "en") lang = "en";
        services = services.map(q => q[lang]);
});

</script>

<svelte:head>
  <title>Services | DronInside</title> 
</svelte:head>

<div class="max-w-screen-xl bg-gray-800 mx-auto px-5 min-h-screen pb-20">
    <Title title={translate("services_title")}
    subtitle={translate("service_subtitle")} />

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">

    {#each services as service}
    <button
    on:click={() => goto(`/contact`)} 
    class="block rounded-lg p-4 shadow-sm shadow-indigo-100 bg-slate-200 msm:py-8">
        <img
          alt="Home"
          src="{service.img}"
          class="h-56 w-full rounded-md object-cover"
        />
      
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
      
          <div class="mt-6 flex items-center gap-8 text-xs align-middle justify-center">
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
              <svg viewBox="0 0 24 24" class="w-6 text-indigo-500" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              <div class="mt-1.5 sm:mt-0 msm:ml-2">
                <p class="text-gray-500">{translate("services_duration")}</p>
                <p class="font-medium">+ {service.duration} min</p>
              </div>
            </div>
      
            <div class="msm:flex msm:flex-row sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg fill="currentColor" class="w-6 text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,12.692,11.308,3H3v8.308L12.692,21ZM9.923,9.923a1.958,1.958,0,1,1,0-2.769A1.957,1.957,0,0,1,9.923,9.923Z"></path></g></svg>
              <div class="mt-1.5 sm:mt-0 msm:ml-2">
                <p class="text-gray-500">{translate("services_price")}</p>
                <p class="font-medium">{service.price}€</p>
              </div>
            </div>
          </div>
        </div>
    </button>
    {/each}
</div>

</div>