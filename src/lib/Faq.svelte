<script lang="ts">
    let questions = [
        {
            question: "What is the turnaround time for a drone tour?",
            answer: "Most drone tour videos are delivered within 24 hours. Turnaround times for other drone tour videos is typically within 72 hours but varies depending on the project."
        },
        {
            question: "What's the benefit of a drone tour vs a regular video tour?",
            answer: "Since drone video tours are shot entirely in one take, viewers have a much better sense of the layout and size of a property as opposed to standard videos. We are also able to achieve camera angles that would be otherwise impossible."
        },
        {
            question: "Are there safety concerns flying a drone indoors?",
            answer: "We fly drones that are custom built and tuned specifically for flying slow indoors. They weigh less than .55 lbs and have ducts around the propellers making them extremely safe to fly indoors."
        },
        {
            question: "What kind of properties do you film?",
            answer: "We film everything from residential real estate and small businesses to venues and corporate office buildings. No project is too small or too big."
        },
        {
            question: "How Long does it take to film?",
            answer: "Residential drone tours normally take about 30 - 60 minutes to film"
        },
        {
            question : "What is the lead time to get my flight scheduled?",
            answer: "You can usually schedule your commercial flight within 7 days. You can usually schedule your residential flight within 2 days."
        }
    ];
</script>


<div class="max-w-screen-xl bg-gray-800 mx-auto px-5 min-h-screen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 text-gray-200 tracking-tight">
			FAQ
		</h2>
		<p class="text-gray-300 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div class="grid divide-y divide-neutral-200 text-gray-200 max-w-xl mx-auto mt-8">
        {#each questions as { question, answer }}
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> {question}</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-gray-200 mt-3 group-open:animate-fadeIn">
                    {answer}
				</p>
			</details>
		</div>
        {/each}
	</div>
</div>
