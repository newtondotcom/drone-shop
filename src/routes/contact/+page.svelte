<script lang="ts">
	import { sendToDiscordWebhook } from './discord';
	import translate from '$lib/locales/function';
	import { goto } from '$app/navigation';

	let name = '';
	let email = '';
	let message = '';
	let phone = '';
	let project = '';

	let isSubmitted = false;

	async function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
		await sendToDiscordWebhook(message, email, name, phone, project);
		clearForm();
		isSubmitted = true;
		setTimeout(() => {
			isSubmitted = false;
			goto('/');
		}, 5000);
	}

	function clearForm() {
		name = '';
		email = '';
		message = '';
		phone = '';
	}
</script>

<svelte:head>
	<title>Contact | DronInside</title>
</svelte:head>

<div class="flex min-h-screen w-full flex-col justify-center align-middle">
	{#if isSubmitted}
		<div class="-mt-20 flex flex-col self-center pb-4 pt-8 align-middle">
			<h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
				{translate('formSubmitted')}
			</h1>

			<p class="mt-1.5 text-sm text-gray-500">
				{translate('responseMessage')}
			</p>
		</div>
	{:else}
		<div class="-mt-20 flex flex-col self-center pb-4 pt-8 align-middle">
			<h1 class="text-2xl font-bold text-gray-100 sm:text-3xl">
				{translate('contactUs')}
			</h1>

			<p class="mt-1.5 text-sm text-gray-500">
				{translate('responseMessage')}
			</p>
		</div>

		<form on:submit={handleSubmit} autocomplete="off" class="flex flex-col">
			<div class="mt-4 flex self-center align-middle">
				<label
					for="UserName"
					class="block overflow-hidden rounded-md border border-gray-200 bg-slate-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
				>
					<span class="text-xs font-medium text-gray-700">{translate('fullName')}</span>
					<input
						type="text"
						id="UserName"
						placeholder={translate('fullNamePlaceholder')}
						class="mt-1 w-full border-none bg-slate-200 p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						bind:value={name}
					/>
				</label>
			</div>

			<div class="mt-4 flex self-center align-middle">
				<label
					for="UserEmail"
					class="block overflow-hidden rounded-md border border-gray-200 bg-slate-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
				>
					<span class="text-xs font-medium text-gray-700">{translate('email')}</span>
					<input
						type="email"
						id="UserEmail"
						placeholder={translate('emailPlaceholder')}
						class="mt-1 w-full border-none bg-slate-200 p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						bind:value={email}
					/>
				</label>
			</div>

			<div class="mt-4 flex self-center align-middle">
				<label
					for="UserPhone"
					class="block overflow-hidden rounded-md border border-gray-200 bg-slate-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
				>
					<span class="text-xs font-medium text-gray-700">{translate('phoneNumber')}</span>
					<input
						type="tel"
						id="UserPhone"
						placeholder={translate('phonePlaceholder')}
						class="mt-1 w-full border-none bg-slate-200 p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						bind:value={phone}
					/>
				</label>
			</div>

			<div class="mt-4 flex self-center">
				<select
					id="projects"
					bind:value={project}
					class="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				>
					<option selected>{translate('choose_service')}</option>
					<option value="residential">{translate('residential')}</option>
					<option value="local_business">{translate('local_business')}</option>
					<option value="office">{translate('office')}</option>
					<option value="hostel">{translate('hostel')}</option>
					<option value="construction">{translate('construction')}</option>
					<option value="industrial">{translate('industrial')}</option>
				</select>
			</div>

			<div class="mt-4 flex self-center align-middle">
				<label
					for="UserProject"
					class="block overflow-hidden rounded-md border border-gray-200 bg-slate-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
				>
					<span class="text-xs font-medium text-gray-700">{translate('project')}</span>
					<textarea
						id="UserProject"
						placeholder={translate('projectPlaceholder')}
						class="mt-1 w-full resize-y border-none bg-slate-200 p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
						bind:value={message}
					></textarea>
				</label>
			</div>

			<div class="flex self-center sm:gap-4">
				<button
					class="mt-5 rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
					type="submit"
				>
					{translate('sendButton')}
				</button>
			</div>
		</form>
	{/if}
</div>
