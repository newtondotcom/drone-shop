<script lang="ts">
	import { sendToDiscordWebhook } from './discord';
	import translate from '$lib/locales/function';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';

	const services = [
		{
			value: 'residential',
			label: 'Residential'
		},
		{
			value: 'local_business',
			label: 'Local Business'
		},
		{
			value: 'office',
			label: 'Office'
		},
		{
			value: 'hostel',
			label: 'Hostel'
		},
		{
			value: 'construction',
			label: 'Construction'
		}
	];

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

<div class="flex min-h-screen w-full flex-col justify-center px-4 align-middle md:px-24">
	{#if isSubmitted}
		<div class="-mt-20 flex flex-col self-center pb-4 pt-8 align-middle">
			<h1 class="text-2xl font-bold text-black sm:text-3xl">
				{translate('form_submitted')}
			</h1>

			<p class="mt-1.5 text-sm text-gray-500">
				{translate('response_message')}
			</p>
		</div>
	{:else}
		<Card.Root class="w-[350px] self-center md:w-[450px]">
			<Card.Header>
				<Card.Title>{translate('contact_us')}</Card.Title>
				<Card.Description>{translate('response_message')}</Card.Description>
			</Card.Header>
			<Card.Content>
				<form on:submit={handleSubmit} autocomplete="off">
					<div class="grid w-full items-center gap-4">
						<div class="flex flex-col space-y-1.5">
							<Label for="name">{translate('full_name')}</Label>
							<Input
								id="name"
								type="text"
								placeholder={translate('full_name_placeholder')}
								bind:value={name}
							/>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="email">{translate('email')}</Label>
							<Input
								id="email"
								type="email"
								placeholder={translate('email_placeholder')}
								bind:value={email}
							/>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="phone">{translate('phone_number')}</Label>
							<Input
								id="phone"
								type="tel"
								placeholder={translate('phone_number_Placeholder')}
								bind:value={phone}
							/>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="projects">{translate('choose_service')}</Label>
							<Select.Root>
								<Select.Trigger id="projects" bind:value={project}>
									<Select.Value placeholder={translate('select_placeholder')} />
								</Select.Trigger>
								<Select.Content>
									{#each services as framework}
										<Select.Item value={framework.value} label={framework.label}
											>{framework.label}</Select.Item
										>
									{/each}
								</Select.Content>
							</Select.Root>
						</div>
						<div class="flex flex-col space-y-1.5">
							<Label for="message">{translate('project')}</Label>
							<Textarea
								id="message"
								placeholder={translate('project_placeholder')}
								bind:value={message}
							/>
						</div>
					</div>
					<div class="mt-4 flex justify-between">
						<Button variant="outline" type="button" on:click={clearForm}
							>{translate('cancel_button')}</Button
						>
						<Button type="submit">{translate('send_button')}</Button>
					</div>
				</form>
			</Card.Content>
		</Card.Root>
	{/if}
</div>
