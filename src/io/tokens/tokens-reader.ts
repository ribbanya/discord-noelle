import { Path, readJson } from '../fs';
import { DiscordTokens } from './discord-tokens.interface';
import { Tokens } from './tokens.interface';

export async function readTokens(path: Path) {
  return validateTokens(await readJson(path));
}

function ensureTypeOrUndefined(object: any, keys: string[], type: string) {
  keys.forEach((key: string) => {
    const value = object[key];
    if (value && typeof value !== type) {
      throw Error(`'${object[key]} is not a valid ${key}.`);
    }
  });
}

export function validateTokens(json: any) {
  if (json.discord) {
    json.discord = validateDiscordTokens(json.discord);
  }
  return json as Tokens;
}

export function validateDiscordTokens(json: any) {
  ensureTypeOrUndefined(json, ['botAccount', 'owner'], 'string');
  return json as DiscordTokens;
}
