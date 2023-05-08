const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong, and the Bot Ping!'),
	async execute(interaction) {
		const ping = Math.abs(Date.now() - interaction.createdTimestamp);
		const pingtime = `Pong 🏓\nBot Ping Is: **${ping} ms**`

		const embed = new EmbedBuilder()
		.setColor(0x5865F2)
		.setTitle("Ping")
		.setDescription(pingtime)
		.setFooter({ text: 'Please be good.', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })


		await interaction.reply({ embeds: [embed] });
	},
};