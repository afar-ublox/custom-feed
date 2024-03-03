export interface Item {
  title: string;
  url?: string;
  links?: Item[] | [];
}