const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coinflip')
		.setDescription('Flips a coin.'),
	async execute(interaction) {
		const coinFlip = Math.round(Math.random());

		const embed = new EmbedBuilder()
		.setColor(0x5865F2)
		.setTitle("Coinflip \:coin:")
		.setDescription(coinResult(coinFlip))
        .setImage("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTU4ZGI3M2FlZTUzOTUwZTRmZTZlMTYwZThiNmQ0OWE2NmViOWM1MCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/8MWdaFQEYEicGIkfHU/giphy.gif")
		.setFooter({ text: 'Im running out of coins!', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })


		await interaction.reply({ embeds: [embed] });
	},
};

function coinResult(coinFlip) {
    if (coinFlip == 0) {
        const coinSide = "**Result**: Heads"
        return coinSide
    } else if (coinFlip == 1) {
        const coinSide = "**Result**: Tails"
        return coinSide
    }
}