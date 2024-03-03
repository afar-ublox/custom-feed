export interface Item {
  title: string;
  id?: string;
  url?: string;
  links?: Item[] | [];
}