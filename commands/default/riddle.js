const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('riddle')
	.setDescription('Tells you a riddle.'),

	async execute(interaction) {
		const responses = ["Whats a pirates favorite programming feature? \n\n**Answer**: ||It's the **ARR**ay!||",
							"Why do cow's wear bells? \n\n **Answer**: ||Because their horns dont work!||",
							"Why don't scientists trust atoms?\n\n **Answer**: ||Because they make up everything!||",
							"What do you call a fake noodle? \n\n **Answer**: ||An Impasta!||"]
		const response = responses[Math.floor(Math.random() * responses.length)]

		const embed = new EmbedBuilder()
			.setColor(0x5865F2)
			.setTitle("Riddle")
			.setFooter({ text: 'Did you manage to guess the answer?', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
			.addFields({ name: ' ', value: response });

		interaction.reply({ embeds: [embed] });
	},
};