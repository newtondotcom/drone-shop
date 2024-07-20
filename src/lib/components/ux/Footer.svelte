<script lang="ts">
	import { goto } from '$app/navigation';
	import translate from '$lib/locales/function';
	import { page } from '$app/stores';
</script>

<footer class="flex">
	<div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="flex justify-center">
			<img class="h-8 w-auto sm:h-10" src="/logo.jpg" alt="Logo" />
		</div>

		<p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
			{translate('footer_description')}
		</p>

		<ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
			<li>
				<button
					class="text-gray-400 transition hover:text-primary {$page.url.pathname == '/'
						? 'text-primary/60'
						: ' '}"
					on:click={() => goto('/')}
				>
					{translate('home')}
				</button>
			</li>

			<li>
				<button
					class="text-gray-400 transition hover:text-primary {$page.url.pathname == '/services'
						? 'text-primary/60'
						: ' '}"
					on:click={() => goto('/services')}
				>
					{translate('services')}
				</button>
			</li>

			<li>
				<button
					class="text-gray-400 transition hover:text-primary {$page.url.pathname == '/portfolio'
						? 'text-primary/60'
						: ' '}"
					on:click={() => goto('/portfolio')}
				>
					{translate('portfolio')}
				</button>
			</li>

			<li>
				<button
					class="text-gray-400 transition hover:text-primary {$page.url.pathname == '/faq'
						? 'text-primary/60'
						: ' '}"
					on:click={() => goto('/faq')}
				>
					{translate('faq')}
				</button>
			</li>
		</ul>

		<div class="mt-12 flex justify-center text-primary">{translate('made_from')}</div>

		<ul class="mt-12 flex justify-center gap-6 md:gap-8">
			<li>
				<a
					href="https://instagram.com/droninside"
					rel="noreferrer"
					target="_blank"
					class="text-gray-400 transition hover:text-primary"
				>
					<span class="sr-only">Instagram</span>
					<svg
						class="h-6 w-6"
						clip-rule="evenodd"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g><g id="SVGRepo_iconCarrier">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
								fill="currentColor"
							></path>
							<path
								d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
								fill="currentColor"
							></path>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
								fill="currentColor"
							></path>
						</g></svg
					>
				</a>
			</li>

			<li>
				<a
					href="https://www.linkedin.com/in/robin-augereau/"
					rel="noreferrer"
					target="_blank"
					class="text-gray-400 transition hover:text-primary"
				>
					<span class="sr-only">LinkedIn</span>
					<svg
						class="h-6 w-6"
						fill="currentColor"
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><title>LinkedIn</title><path
							d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
						/></svg
					>
				</a>
			</li>

			<li>
				<a
					href="https://github.com/newtondotcom/drone-shop.git"
					rel="noreferrer"
					target="_blank"
					class="text-gray-400 transition hover:text-primary"
				>
					<span class="sr-only">GitHub</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705+.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</footer>
