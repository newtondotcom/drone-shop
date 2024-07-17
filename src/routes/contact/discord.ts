import Constants from '$lib/constants';

export async function sendToDiscordWebhook(
	message: string,
	email: string,
	names: string,
	phone: string,
	project: string
) {
	fetch(Constants.discordWebhook, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			avatar_url: '',
			content: '@everyone ' + message,
			embeds: [
				{
					color: Constants.color,
					title: 'Nouveau message de ' + names + ' (' + phone + ')',
					description: 'Contact : ' + email + ', Projet : ' + project
				}
			]
		})
	});
	return;
}
