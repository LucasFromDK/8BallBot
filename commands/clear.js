//Chat Cleaner Coming Soon
module.exports = {
    name: 'clear',
    description: 'Clean up the chat.',
    async execute(message, args) {

        if(message.member.roles.cache.has("1088129373137293312")){ //Role needed to clear messaged.

        if(!args[0]) return message.reply("Indtast antal beskeder du vil slette.");
        if(isNaN(args[0])) return message.reply("Indtast venligst et rigtigt tal.");

        if(args[0] > 100) return message.reply("Du kan ikke slette mere end 100 beskeder afgangen.");
        if(args[0] < 1) return message.reply("Du kan ikke slette mindre end 1 besked.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
        });
    }
}

} //Fra Linje 6