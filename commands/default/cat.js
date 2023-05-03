const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Replies with an image of a cat.'),

	async execute(interaction) {
        const catResult = await request('https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_fxh8eMVZ8W5S5ofRExhlJXFjIc4IfwPSnTnq9OMI7LARonUX8mO0chs93T1zpyNt');
        const catData = await catResult.body.json();
        const catImage = catData[0].url; // URL of Cat Image

        const embed = new EmbedBuilder()
            .setTitle("Random Cat Image")
            .setColor(0x5865F2)
            .setImage(catImage)
            .setFooter({ text: 'Cats From: https://thecatapi.com/', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
            .setURL("https://thecatapi.com/")

        interaction.reply({ embeds: [embed] });
	}
};