const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('joke')
	.setDescription('Tells you a joke.'),

	async execute(interaction) {
		const responses = ["Yesterday I saw a guy spill all his Scrabble letters on the road, I asked him: Whats the word on the street?"]
		const response = responses[Math.floor(Math.random() * responses.length)]

		const embed = new EmbedBuilder()
			.setColor(0x5865F2)
			.setTitle("Joke")
			.setFooter({ text: 'So funny, right?', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
			.addFields(
				{ name: ' ', value: response },
			);

		interaction.reply({ embeds: [embed] });
	},
};