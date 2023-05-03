const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		const ping = Math.abs(Date.now() - interaction.createdTimestamp);
		await interaction.reply(`Pong 🏓, Bot Ping: **${ping}ms**`);
	},
};