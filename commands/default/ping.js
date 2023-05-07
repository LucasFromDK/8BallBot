const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong, and the Bot Ping!'),
	async execute(interaction) {
		const ping = Math.abs(Date.now() - interaction.createdTimestamp);
		await interaction.reply(`Pong 🏓, Bot Ping: **${ping}ms**`);
	},
};