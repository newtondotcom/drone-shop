<script lang="ts">
    import Youtube from "svelte-youtube-embed";
    import { onMount } from "svelte";

    let videos = [
        {
            "en": {
                id: "KjyyQyEjXqM",
                description: "A lively virtual tour of a seaside house. These lively videos can be created for private properties of any kind."
            },
            "fr": {
                id: "KjyyQyEjXqM",
                description: "Une visite virtuelle animée d'une maison en bord de mer. Ces vidéos animées peuvent être créées pour des propriétés privées de toutes sortes."
            }
        },
        {
            "en": {
                id: "DqmoH9LV2Dw",
                description: "A house of over 200 square meters in the middle of the forest. Drone real estate tours provide a better sense of space compared to traditional tours."
            },
            "fr": {
                id: "DqmoH9LV2Dw",
                description: "Une maison de plus de 200 mètres carrés en plein milieu de la forêt. Les visites immobilières par drone permettent de mieux comprendre l'espace par rapport aux visites traditionnelles."
            }
        }
    ];

    onMount(() => {
        let lang = navigator.language.split("-")[0];
        if (lang !== "fr" && lang !== "en") lang = "en";
        videos = videos.map(q => q[lang]);
    });

    const titleColor = "#fff";
    const titleShadowColor = "#000";
    const titleFontFamily = "Montserrat";

</script>

<svelte:head>
  <title>Portfolio | NEDT</title> 
</svelte:head>

<div class="min-h-screen bg-gray-800">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-20 lg:py-8 gap-4">
        {#each videos as video}
        <div class="mx-4 my-4 shrink">
            <Youtube 
            id="{video.id}"
            --title-color={titleColor}
            --title-shadow-color="{titleShadowColor}100"
            --title-font-family={titleFontFamily}
            --overlay-bg-color="hsla(0, 0%, 0%, 0.3)" 
            --overlay-transition="all 100ms linear" 
            animations={false}
            >
                <button class="text-black">
                    <svg viewBox="0 0 24 24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M19.1414 5.00003C20.9097 6.80378 22 9.27458 22 12C22 14.7578 20.8836 17.2549 19.0782 19.064M5 19.1415C3.14864 17.3265 2 14.7974 2 12C2 9.235 3.12222 6.73208 4.93603 4.92188" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.5" d="M16.2849 8.04397C17.3458 9.05877 18 10.4488 18 11.9822C18 13.5338 17.3302 14.9386 16.2469 15.9564M7.8 16C6.68918 14.9789 6 13.556 6 11.9822C6 10.4266 6.67333 9.01843 7.76162 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.6563 10.4511C14.5521 11.1088 15 11.4376 15 12C15 12.5624 14.5521 12.8912 13.6563 13.5489C13.4091 13.7304 13.1638 13.9014 12.9384 14.0438C12.7407 14.1688 12.5168 14.298 12.2849 14.4249C11.3913 14.914 10.9444 15.1586 10.5437 14.8878C10.1429 14.617 10.1065 14.0502 10.0337 12.9166C10.0131 12.596 10 12.2817 10 12C10 11.7183 10.0131 11.404 10.0337 11.0834C10.1065 9.94977 10.1429 9.38296 10.5437 9.1122C10.9444 8.84144 11.3913 9.08599 12.2849 9.57509C12.5168 9.70198 12.7407 9.83123 12.9384 9.95619C13.1638 10.0986 13.4091 10.2696 13.6563 10.4511Z" stroke="currentColor" stroke-width="1.5"></path> </g></svg>
                </button>
            </Youtube>
            <h2 class="text-white text-center text-sm">{video.description}</h2>
        </div>
        {/each}
    </div>
</div>
