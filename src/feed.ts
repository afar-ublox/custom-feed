import renderAtom from "./atom1";
import renderJSON from "./json";
import renderRSS from "./rss2";
import { Item } from "./typings";

export { Item };

/**
 * Class used to generate Feeds
 */
export class Feed {
  items: Item[] = [];

  /**
   * Add a feed item
   * @param item
   */
  public addItem = (item: Item) => this.items.push(item);
  /**
   * Returns a Atom 1.0 feed
   */
  public atom1 = (): string => renderAtom(this);

  /**
   * Returns a RSS 2.0 feed
   */
  public rss2 = (): string => renderRSS(this);

  /**
   * Returns a JSON1 feed
   */
  public json1 = (): string => renderJSON(this);
}
