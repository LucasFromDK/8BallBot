const { SlashCommandBuilder } = require('discord.js');

let lastArgument = 'none'; // Global variable to store the last argument

module.exports = {
	data: new SlashCommandBuilder()
		.setName('last')
		.setDescription('Replies with the last argument given to this command.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The input you want to store for the next call.')
				.setRequired(false)
		),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		
		await interaction.reply(lastArgument); // Reply with the last argument
		
		if (input) {
			lastArgument = input; // Update the last argument if a new one is provided
		}
	},
};