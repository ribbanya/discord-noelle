import * as fs from 'fs';
import { URL } from 'url';
import { promisify } from 'util';

export type Path = string | number | Buffer | URL;

export const readFile = promisify(fs.readFile);

export async function readJson(path: Path) {
  return JSON.parse((await readFile(path)).toString());
}
