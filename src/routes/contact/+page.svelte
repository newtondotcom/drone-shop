<script lang="ts">
    import {sendToDiscordWebhook} from "./discord";
    import translate from '$lib/locales/function';

    let name = "";
    let email = "";
    let message = "";
    let phone = "";

    let isSubmitted = false;

    async function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();
      await sendToDiscordWebhook(message,email,name);
      clearForm();
      isSubmitted = true;
      setTimeout(() => {
        isSubmitted = false;
      }, 5000);
    }
  
    function clearForm() {
      name = "";
      email = "";
      message = "";
     phone = "";
    }

</script>

<svelte:head>
  <title>Contact | DronInside</title> 
</svelte:head>

<div class="flex flex-col justify-center align-middle min-h-screen">

    {#if isSubmitted}
        <div class="flex flex-col align-middle self-center pt-8 pb-4 -mt-20">
            <h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
                {translate("formSubmitted")}
            </h1>
        
            <p class="mt-1.5 text-sm text-gray-500">
                {translate("responseMessage")}
            </p>
        </div>
    {:else}
        <div class="flex flex-col align-middle self-center pt-8 pb-4 -mt-20">
            <h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
                {translate("contactUs")}
            </h1>
        
            <p class="mt-1.5 text-sm text-gray-500">
                {translate("responseMessage")}
            </p>
        </div>

        <form on:submit={handleSubmit} autocomplete="off" class="flex flex-col">
            <div class="flex align-middle self-center mt-4">
                <label
                    for="UserName"
                    class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span class="text-xs font-medium text-gray-700">{translate("fullName")}</span>
                    <input
                        type="text"
                        id="UserName"
                        placeholder={translate("fullNamePlaceholder")}
                        class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>
            </div>

            <div class="flex align-middle self-center mt-4">
                <label
                    for="UserEmail"
                    class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span class="text-xs font-medium text-gray-700">{translate("email")}</span>
                    <input
                        type="email"
                        id="UserEmail"
                        placeholder={translate("emailPlaceholder")}
                        class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>
            </div>

            <div class="flex align-middle self-center mt-4">
                <label
                    for="UserPhone"
                    class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span class="text-xs font-medium text-gray-700">{translate("phoneNumber")}</span>
                    <input
                        type="tel"
                        id="UserPhone"
                        placeholder={translate("phonePlaceholder")}
                        class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    />
                </label>
            </div>

            <div class="flex align-middle self-center mt-4">
                <label
                    for="UserProject"
                    class="block bg-slate-200 overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                >
                    <span class="text-xs font-medium text-gray-700">{translate("project")}</span>
                    <textarea
                        id="UserProject"
                        placeholder={translate("projectPlaceholder")}
                        class="mt-1 w-full bg-slate-200 border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm resize-y"
                    ></textarea>
                </label>
            </div>

            <div class="flex self-center sm:gap-4">  
                <button
                    class="rounded-md mt-5 bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                    type="submit"
                >
                    {translate("sendButton")}
                </button>
            </div>
        </form>
    {/if}

</div>

