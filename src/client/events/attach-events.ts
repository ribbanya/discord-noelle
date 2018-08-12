import { Client } from 'discord.js';
import * as _ from 'lodash';
import { EventMap } from '.';
import { onError, onMessage, onReady } from './event-definitions';

const map: EventMap = {
  error: onError,
  message: onMessage,
  ready: onReady,
};

export function attachEventsTo(client: Client) {
  _.forOwn(map, (value, key) => {
    client.on(key, value);
  });
  return client;
}
