const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roulette')
		.setDescription('Rolls two numbers between 1 and 10, if its the same number you lose.')
        .addStringOption(option =>
			option.setName('number')
				.setDescription('Choose a number between 1 and 36.')
				.setRequired(true)
		),
        
	async execute(interaction) {
		const numberOne = interaction.options.getString('number');
        const numberTwo = Math.floor(Math.random() * 36 + 1);

        const embed = new EmbedBuilder()
        .setColor(0x5865F2)
        .setTitle('Roulette')
        .setDescription(drawWinner(numberOne, numberTwo))
        .setImage("https://thumbs.gfycat.com/DistortedRecentEland-size_restricted.gif")
        .setFooter({ text: '100% Not Rigged, I promise!', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
        
        await interaction.reply({ embeds: [embed] });
	},
};

function drawWinner(numberOne, numberTwo) {
    if (numberOne > 36 || numberOne < 1) {
        const result = "Invalid number, please chose a number between **1** and **36**"
        return result
    } else if (numberOne != numberTwo) {
        const result = `You lost, your number was: **${numberOne}**, winning number was: **${numberTwo}**, better luck next time!`;
        return result
     } else if (numberOne == numberTwo) {
         const result = `You win 🎉, you rolled a: **${numberOne}** and the winning number was also **${numberTwo}**!`;
         return result
     }
}