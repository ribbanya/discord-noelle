import { Message } from 'discord.js';

export function onReady() {
  console.info('Ready.');
}

export function onMessage(msg: Message) {
  if (msg.author.bot) return;
  console.info('Ping?');
  msg.channel.send('Pong!');
}

export function onError(error: Error) {
  console.error(error);
}
