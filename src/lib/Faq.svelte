<script lang="ts">
    import { onMount } from "svelte";
    import translate from "./locales/function";

    let questions = [
        {
            "en": {
                question: "What is the turnaround time for a drone tour?",
                answer: "Most drone tour videos are delivered within 24 hours. Turnaround times for other drone tour videos are typically within 72 hours but vary depending on the project."
            },
            "fr": {
                question: "Quel est le délai de livraison d'une visite en drone ?",
                answer: "La plupart des vidéos de visite en drone sont livrées en moins de 24 heures. Les délais de livraison pour d'autres vidéos de visite en drone sont généralement de 72 heures, mais varient en fonction du projet."
            }
        },
        {
            "en": {
                question: "What's the benefit of a drone tour vs a regular video tour?",
                answer: "Since drone video tours are shot entirely in one take, viewers have a much better sense of the layout and size of a property as opposed to standard videos. We are also able to achieve camera angles that would be otherwise impossible."
            },
            "fr": {
                question: "Quel est l'avantage d'une visite en drone par rapport à une visite vidéo classique ?",
                answer: "Étant donné que les visites vidéo en drone sont entièrement tournées en une seule prise, les spectateurs ont une bien meilleure idée de la disposition et de la taille d'une propriété par rapport aux vidéos standard. Nous sommes également en mesure d'obtenir des angles de caméra qui seraient autrement impossibles."
            }
        },
        {
            "en": {
                question: "Are there safety concerns flying a drone indoors?",
                answer: "We fly drones that are custom built and tuned specifically for flying slow indoors. They weigh less than .55 lbs and have ducts around the propellers making them extremely safe to fly indoors."
            },
            "fr": {
                question: "Y a-t-il des préoccupations en matière de sécurité lors de la conduite d'un drone en intérieur ?",
                answer: "Nous utilisons des drones spécialement conçus et réglés pour voler lentement en intérieur. Ils pèsent moins de 0,55 livre et sont équipés de conduits autour des hélices, ce qui les rend extrêmement sûrs pour le vol en intérieur."
            }
        },
        {
            "en": {
                question: "What kind of properties do you film?",
                answer: "We film everything from residential real estate and small businesses to venues and corporate office buildings. No project is too small or too big."
            },
            "fr": {
                question: "Quels types de propriétés filmez-vous ?",
                answer: "Nous filmens tout, des biens immobiliers résidentiels et des petites entreprises aux lieux et aux immeubles de bureaux d'entreprise. Aucun projet n'est trop petit ou trop grand."
            }
        },
        {
            "en": {
                question: "How Long does it take to film?",
                answer: "Residential drone tours normally take about 30 - 60 minutes to film."
            },
            "fr": {
                question: "Combien de temps faut-il pour filmer ?",
                answer: "Les visites en drone résidentielles prennent généralement environ 30 à 60 minutes à filmer."
            }
        },
        {
            "en": {
                question : "What is the lead time to get my flight scheduled?",
                answer: "You can usually schedule your commercial flight within 7 days. You can usually schedule your residential flight within 2 days."
            },
            "fr": {
                question: "Quel est le délai de préavis pour planifier mon vol ?",
                answer: "Vous pouvez généralement planifier votre vol commercial dans un délai de 7 jours. Vous pouvez généralement planifier votre vol résidentiel dans un délai de 2 jours."
            }
        },
        {
            "en": {
                question: "How does a service proceed?",
               answer: "During a service, the following steps are followed in order: discovery of the location, establishment of an initial video capture trajectory in accordance with your preferences, the first flight where you get a preview of the video during its duration, the completion of final flights until a satisfactory result is achieved. The drone has a flight autonomy of 40 minutes, distributed over 3 batteries, which is enough to redo the shots several times if necessary."
            },
            "fr": {
                question: "Comment se déroule une prestation ?",
                answer: "Lors d'une prestation s'enchaînent dans l’ordre : découverte des lieux, établissement d’une première trajectoire de capture vidéo en accord avec vous, premier vol où vous voyez un aperçu de la vidéo pendant sa durée, réalisation des vols finaux jusqu’à obtention d’un résultat jugé satisfaisant. Le drone a une autonomie de vol de 40 min, répartie sur 3 batteries, donc suffisamment pour refaire plusieurs fois les plans si besoin."
            }
        },
        {
            "en": {
                question: "What are the rates?",
               answer: "The rates are defined according to the duration of the service, the number of places to film and the complexity of the shots to be made. For a personalized quote, contact us. Indicative prices are available on the Services page."
            },
            "fr":{
                question: "Quels sont les tarifs ?",
               answer: "Les tarifs sont définis en fonction de la durée de la prestation, du nombre de lieux à filmer et de la complexité des plans à réaliser. Pour un devis personnalisé, contactez-nous. Des prix indicatifs sont disponibles sur la page Services."
            },
        },
        {
            "en": {
                question: "Where are we located?",
               answer: "We can perform services in the Paris region or around Toulouse. For services outside these areas, contact us. Travel expenses may apply."
            },
            "fr":{
                question: "Où sommes nous situés ?",
               answer: "Nous pouvons effectuer des prestations en région parisienne ou aux alentours de Toulouse. Pour des prestations en dehors de ces zones, contactez-nous. Des fras de déplacement peuvent s'appliquer."
            },
        },
        {
            "en":{
                question : " ",
                answer : " "
            },
            "fr": {
                question : "Pourquoi faire une vidéo et pas de simples photos ?",
                answer : "De mon point de vue, ce qui rend le mieux, c’est de faire un plan séquence, c’est-à-dire de faire la visite de la maison en une prise, comme les vidéos disponibles sur mon site. Contrairement à de simples photos des différentes pièces prises par un photographe par exemple, le téléspectateur peut se rendre compte des volumes de la maison et de la disposition des pièces."
            },
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
