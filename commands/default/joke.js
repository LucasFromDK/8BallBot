const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Tells you a joke.'),

  async execute(interaction) {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const jokeData = response.data;
    const setup = jokeData.setup;
    const punchline = jokeData.punchline;

    const embed = new EmbedBuilder()
      .setColor(0x5865F2)
      .setTitle('Joke')
      .setDescription(setup)
      .addFields(
        { name: '\n', value: '\n' },
        { name: 'Punchline', value: punchline }
      )
      .setFooter({ text: 'So funny, right?', iconURL: 'https://cdn.discordapp.com/avatars/1088016851403026462/06bd8b265d56024aa1e002e30f25a79a.png?size=1024' })

    await interaction.reply({ embeds: [embed] });
  },
};