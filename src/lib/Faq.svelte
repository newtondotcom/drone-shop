<script lang="ts">
    import { onMount } from "svelte";
    import translate from "./locales/function";

    let questions = [
    {
        "en": {
            question: "What are the advantages of a drone tour compared to a regular video tour?",
            answer: "Drone video tours, filmed entirely in one take, provide viewers with a much better understanding of a property's layout and size compared to standard videos. Additionally, we can capture camera angles that would otherwise be impossible."
        },
        "fr": {
            question: "Quels sont les avantages d'une visite en drone par rapport à une visite vidéo classique ?",
            answer: "Les visites vidéo en drone, entièrement filmées en une seule prise, offrent aux spectateurs une bien meilleure perception de la disposition et de la taille d'une propriété par rapport aux vidéos standard. De plus, nous pouvons capturer des angles de caméra qui seraient autrement impossibles."
        }
    },
    {
        "en": {
            question: "What types of properties do you film?",
            answer: "We film a wide range of properties, including residential real estate, small businesses, venues, and corporate office buildings. No project is too small or too large."
        },
        "fr": {
            question: "Quels types de propriétés filmez-vous ?",
            answer: "Nous filmons divers types de propriétés, qu'il s'agisse de biens immobiliers résidentiels, de petites entreprises, de lieux événementiels ou d'immeubles de bureaux d'entreprise. Aucun projet n'est trop petit ni trop grand."
        }
    },
    {
        "en": {
            question: "How long does it take to film?",
            answer: "Residential drone tours typically take about 30 to 60 minutes to film."
        },
        "fr": {
            question: "Combien de temps faut-il pour filmer ?",
            answer: "Les visites de drone résidentielles prennent généralement entre 30 et 60 minutes à filmer."
        }
    },
    {
        "en": {
            question : "What is the lead time to schedule my flight?",
            answer: "You can usually schedule your commercial flight within 7 days, and your residential flight within 2 days."
        },
        "fr": {
            question: "Quel est le délai de préavis pour planifier mon vol ?",
            answer: "En général, vous pouvez planifier votre vol commercial dans un délai de 7 jours et votre vol résidentiel dans un délai de 2 jours."
        }
    },
    {
        "en": {
            question: "How does a service proceed?",
            answer: "During a service, the following steps are followed in order: the location is explored, an initial video capture trajectory is established according to your preferences, the first flight provides a preview of the video, additional flights are conducted until a satisfactory result is achieved. The drone has a flight autonomy of 40 minutes, distributed over 3 batteries, which is sufficient for multiple retakes if necessary."
        },
        "fr": {
            question: "Comment se déroule une prestation ?",
            answer: "Pendant une prestation, les étapes suivantes sont suivies dans l'ordre : exploration des lieux, établissement d'une trajectoire de capture vidéo initiale en fonction de vos préférences, le premier vol offre un aperçu de la vidéo, des vols supplémentaires sont effectués jusqu'à l'obtention d'un résultat satisfaisant. Le drone a une autonomie de vol de 40 minutes, répartie sur 3 batteries, ce qui permet de refaire plusieurs prises si nécessaire."
        }
    },
    {
        "en": {
            question: "What is the turnaround time for a drone tour?",
            answer: "Most drone tour videos are delivered within 24 hours. Turnaround times for other drone tour videos are typically within 72 hours but may vary depending on the project."
        },
        "fr": {
            question: "Quel est le délai de livraison de la vidéo d'une visite en drone ?",
            answer: "La plupart des vidéos de visite en drone sont livrées en moins de 24 heures. Les délais de livraison pour d'autres vidéos de visite en drone sont généralement de 72 heures, mais peuvent varier en fonction du projet."
        }
    },
    {
        "en": {
            question: "What are the rates?",
            answer: "Rates are determined based on the service duration, the number of places to film, and the complexity of the shots to be taken. For a personalized quote, please contact us. Indicative prices are available on the Services page."
        },
        "fr":{
            question: "Quels sont les tarifs ?",
            answer: "Les tarifs sont déterminés en fonction de la durée de la prestation, du nombre de lieux à filmer, et de la complexité des prises de vue à réaliser. Pour obtenir un devis personnalisé, veuillez nous contacter. Des prix indicatifs sont disponibles sur la page Services."
        }
    },
    {
        "en": {
            question: "Are there safety concerns when flying a drone indoors?",
            answer: "We use drones that are specially designed and calibrated for slow indoor flight. They are equipped with ducts around the propellers, making them extremely safe for indoor use."
        },
        "fr": {
            question: "Y a-t-il des préoccupations en matière de sécurité lors de la conduite d'un drone en intérieur ?",
            answer: "Nous utilisons des drones spécialement conçus et réglés pour voler lentement en intérieur. Ils sont équipés de protections autour des hélices, ce qui les rend extrêmement sûrs pour le vol en intérieur."
        }
    },
    {
        "en": {
            question: "Where are we located?",
            answer: "We can provide services in the Paris region or around Toulouse. For services outside these areas, please contact us. Travel expenses may apply."
        },
        "fr":{
            question: "Où sommes-nous situés ?",
            answer: "Nous pouvons réaliser des prestations en région parisienne ou aux alentours de Toulouse. Pour des prestations en dehors de ces zones, veuillez nous contacter. Des frais de déplacement peuvent s'appliquer."
        }
    },
];


    onMount(() => {
        let lang = navigator.language.split("-")[0];
        if (lang !== "fr" && lang !== "en") lang = "en";
        questions = questions.map(q => q[lang]);
    });
</script>



<div class="max-w-screen-xl bg-gray-800 mx-auto px-5 min-h-screen">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 text-gray-200 tracking-tight">
			FAQ
		</h2>
		<p class="text-gray-300 text-xl mt-3">
            {translate("faq_title")}
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
