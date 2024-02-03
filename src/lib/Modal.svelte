{#if open}
<div class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
  <div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50"></div>
  <div class="bg-white w-full lg:h-max lg:w-1/2 mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
    <div class="flex justify-center items-center head bg-gray-100 py-5 px-8 text-2xl font-extrabold">
      <div class="flex-grow self-end text-end" style="flex-basis: 50%;">{title}</div>
      <div class="dot-container flex-grow pl-6" style="flex-basis: 50%;">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="content p-1 self-center flex align-center justify-center h">
      {#if phase === "propellers"}
      <img src="propeller.gif" alt="propellers" class="w-20 h-20 self-center">
      {:else if phase === "battery"}
      <img src="batteries-charge-up.gif" alt="propellers" class="h-20 self-center">
      {:else if phase === "camera"}
      <img src="cam.gif" alt="battery" class="h-20 self-center">
      {:else if phase === "takeoff"}
      <img src="bye-dancing.gif" alt="takeoff" class="h-20 self-center">
      {/if}
    </div>    
  </div>
</div>
{/if}

<script lang="ts">
import translate from "$lib/locales/function";

export let open = false;
export let loading: boolean;

let title: string = translate("loading_propellers") as string;
let phase: "propellers" | "battery" | "camera" | "takeoff" = "propellers";

let intervalLoadingAnimation = 1000;

function handleVideoLoaded() {
    if (loading) {
      switch (phase) {
        case "propellers":
          phase = "battery";
          title = translate("loading_battery") as string;
          setTimeout(handleVideoLoaded, intervalLoadingAnimation);
          break;
        case "battery":
          phase = "camera";
          title = translate("loading_camera") as string;
          setTimeout(handleVideoLoaded, intervalLoadingAnimation);
          break;
        case "camera":
          phase = "takeoff";
          title = translate("loading_takeoff") as string;
          setTimeout(handleVideoLoaded, intervalLoadingAnimation);
          break;
        case "takeoff":
          phase = "propellers";
          title = translate("loading_propellers")
          setTimeout(handleVideoLoaded, intervalLoadingAnimation);
          break;
        default:
          break;
      }
    }
}

handleVideoLoaded();

</script>

<style>
  .dot-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
    margin: 5px;
    animation: moveUpDown 1s infinite;
  }

  .dot:nth-child(2) {
    animation-delay: -0.3333333s;
  }

  .dot:nth-child(3) {
    animation-delay: -0.6666666s; 
  }

  @keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
</style>
