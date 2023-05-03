//https://discordjs.guide/additional-info/rest-api.html#urban-dictionary
//https://github.com/discordjs/guide/blob/main/code-samples/additional-info/rest-api/14/index.js

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);
const { request } = require('undici');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('urban')
		.setDescription('Replies with the Urban Dictionary definition of a word or term.')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('The word or term you want to know the meaning of.')
				.setRequired(true)
		),
	async execute(interaction) {
		const term = interaction.options.getString('input');
		const query = new URLSearchParams({ term });

		const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
		const { list } = await dictResult.body.json();

		if (!list.length) {
			return interaction.reply(`No results found for **${term}**.`);
		}

		const [answer] = list;

		const embed = new EmbedBuilder()
			.setColor(0x5865F2)
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
				{
					name: 'Rating',
					value: `**${answer.thumbs_up}** 👍 and **${answer.thumbs_down}** 👎.`,
				},
			);

		interaction.reply({ embeds: [embed] });
	}
};