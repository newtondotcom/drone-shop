<script lang="ts">
	import translate from '$lib/locales/function';

	export let open = false;
	export let loading: boolean;

	let title: string = translate('loading_propellers') as string;
	let phase: 'propellers' | 'battery' | 'camera' | 'takeoff' = 'propellers';

	let intervalLoadingAnimation = 1000;

	function handleVideoLoaded() {
		if (loading) {
			switch (phase) {
				case 'propellers':
					phase = 'battery';
					title = translate('loading_battery') as string;
					setTimeout(handleVideoLoaded, intervalLoadingAnimation);
					break;
				case 'battery':
					phase = 'camera';
					title = translate('loading_camera') as string;
					setTimeout(handleVideoLoaded, intervalLoadingAnimation);
					break;
				case 'camera':
					phase = 'takeoff';
					title = translate('loading_takeoff') as string;
					setTimeout(handleVideoLoaded, intervalLoadingAnimation);
					break;
				case 'takeoff':
					phase = 'propellers';
					title = translate('loading_propellers');
					setTimeout(handleVideoLoaded, intervalLoadingAnimation);
					break;
				default:
					break;
			}
		}
	}

	handleVideoLoaded();
</script>

{#if open}
	<div
		class="modal msm:hidden fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center p-8 lg:p-0"
	>
		<div class="modal-overlay fixed h-full w-full bg-gray-900 opacity-50"></div>
		<div
			class="z-50 mx-auto w-full overflow-y-auto rounded-lg bg-white shadow-xl lg:h-max lg:w-1/2"
		>
			<div
				class="head flex items-center justify-center bg-gray-100 px-8 py-5 text-2xl font-extrabold"
			>
				<div class="flex-grow self-end text-end" style="flex-basis: 50%;">{title}</div>
				<div class="dot-container flex-grow pl-6" style="flex-basis: 50%;">
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
			</div>
			<div class="content align-center h flex justify-center self-center p-1">
				{#if phase === 'propellers'}
					<img src="propeller.gif" alt="propellers" class="h-20 w-20 self-center" />
				{:else if phase === 'battery'}
					<img src="batteries-charge-up.gif" alt="propellers" class="h-20 self-center" />
				{:else if phase === 'camera'}
					<img src="cam.gif" alt="battery" class="h-20 self-center" />
				{:else if phase === 'takeoff'}
					<img src="bye-dancing.gif" alt="takeoff" class="h-20 self-center" />
				{/if}
			</div>
		</div>
	</div>
{/if}

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
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-20px);
		}
	}
</style>
