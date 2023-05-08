const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// Array of user IDs and role IDs to whitelist
const userWhitelist = ['363341174250930178'];
const roleWhitelist = ['1088129373137293312'];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Clears a specified number of messages from the current channel.')
    .addIntegerOption(option => option.setName('amount').setDescription('The number of messages to clear').setRequired(true))
    .setDefaultPermission(false),
  async execute(interaction) {
    // Check if the user executing the command or their roles are whitelisted
    if (!userWhitelist.includes(interaction.user.id) && !interaction.member.roles.cache.some(role => roleWhitelist.includes(role.id))) {
      return interaction.reply({ content: 'You are not authorized to use this command!', ephemeral: true });
    }

    const amount = interaction.options.getInteger('amount');
    if (amount <= 0) {
      return interaction.reply({ content: 'The amount must be a positive integer!', ephemeral: true });
    }
    if (amount > 100) {
      return interaction.reply({ content: 'You can only clear up to 100 messages at a time!', ephemeral: true });
    }

    const channel = interaction.channel;
    const messages = await channel.messages.fetch({ limit: amount });

    channel.bulkDelete(messages)
      .then(deletedMessages => {
        const embed = new EmbedBuilder()
          .setDescription(`Deleted ${deletedMessages.size} messages!`)
          .setColor('#00FF00');

        interaction.reply({ embeds: [embed], ephemeral: true });
      })
      .catch(error => {
        console.error(error);
        interaction.reply({ content: 'Failed to clear messages!', ephemeral: true });
      });
  },
};