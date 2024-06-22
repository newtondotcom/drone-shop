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
        },
        {
            "en": {
                id: "A0knQ9E67bc",
                description: "Discover the beauty of the South of France with this video."
            },
            "fr": {
                id: "A0knQ9E67bc",
                description: "Découvrez la beauté du Sud de la France avec cette vidéo."
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
  <title>Portfolio | DronInside</title> 
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
                    <svg viewBox="0 0 24 24" height="30" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="currentColor"></path> </g></svg>
                </button>
            </Youtube>
            <h2 class="text-white text-center text-sm">{video.description}</h2>
        </div>
        {/each}
    </div>
</div>
