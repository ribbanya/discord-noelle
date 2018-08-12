import { Client } from 'discord.js';
import { attachEventsTo } from './client';
import { readTokens } from './io';

if (require.main === module) start();

async function start() {
  const tokensPath = 'tokens.json';
  const { discord } = await readTokens(tokensPath);

  const botAccount = discord ? discord.botAccount : undefined;

  if (!botAccount) throw Error(`botAccount token required in ${tokensPath}.`);

  const client = new Client();
  attachEventsTo(client);

  client.login(botAccount);
}
