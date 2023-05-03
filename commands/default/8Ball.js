const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	.setName('8ball')
	.setDescription('Helps you make decisions.')
	.addStringOption(option =>
		option.setName('question')
			.setDescription('The question you need to decide on.')
			.setRequired(true)
	),
	async execute(interaction) {
		const question = interaction.options.getString('question');
		const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "	Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don’t count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
		const response = responses[Math.floor(Math.random() * responses.length)]

		const embed = new EmbedBuilder()
			.setColor(0x5865F2)
			.setTitle("8Ball")
			.setFooter({ text: 'Magic 8Ball', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
			.addFields(
				{ name: 'Question:', value: question },
				{ name: 'Answer:', value: response },
			);

		interaction.reply({ embeds: [embed] });
	},
};