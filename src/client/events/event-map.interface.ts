export interface EventMap {
  [id: string]: (...args: any[]) => void;
}
