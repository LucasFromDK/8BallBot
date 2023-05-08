const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roulette')
		.setDescription('Rolls two numbers between 1 and 10, if its the same number you lose.'),
	async execute(interaction) {
		const numberOne = Math.floor(Math.random() * 10 + 1);
        const numberTwo = Math.floor(Math.random() * 10 + 1);

        if (numberOne == numberTwo) {
            await interaction.reply(`You lost, we both rolled a: **${numberOne}**, better luck next time`);
            console.log("Player Lost!")
        } else
		await interaction.reply(`You win 🎉, you rolled: **${numberOne}** and i rolled: **${numberTwo}**!`);
        console.log("Player Won 🎉!")
	},
};