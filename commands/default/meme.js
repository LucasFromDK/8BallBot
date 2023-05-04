const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Replies with a meme.'),

	async execute(interaction) {
        const memeResult = await request('https://meme-api.com/gimme');
        const memeData = await memeResult.body.json();
        const memeImage = memeData[0].url; // URL of Meme Image
        console.log(memeData)

        const embed = new EmbedBuilder()
            .setTitle("Random Meme")
            .setColor(0x5865F2)
            .setImage(memeImage)
            .setFooter({ text: 'Meme From: https://meme-api.com/gimme', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
            .setURL("https://meme-api.com/gimme")

        interaction.reply({ embeds: [embed] });
	}
};