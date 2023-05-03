const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Replies with an image of a dog.'),

	async execute(interaction) {
        const dogResult = await request('https://api.thedogapi.com/v1/images/search?limit=1&api_key=live_fxh8eMVZ8W5S5ofRExhlJXFjIc4IfwPSnTnq9OMI7LARonUX8mO0chs93T1zpyNt');
        const dogData = await dogResult.body.json();
        const dogImage = dogData[0].url; // URL of Dog Image

        const embed = new EmbedBuilder()
            .setTitle("Random Dog Image")
            .setColor(0x5865F2)
            .setImage(dogImage)
            .setFooter({ text: 'Dogs From: https://thedogapi.com/', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })
            .setURL("https://thedogapi.com/")

        interaction.reply({ embeds: [embed] });
	}
};