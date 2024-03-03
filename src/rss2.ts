import * as convert from "xml-js";
import { Feed } from "./feed";
import { Item } from "./typings";

/**
 * Returns a RSS 2.0 feed
 */
export default (ins: Feed) => {
  const { items } = ins;
  let isAtom = false;
  let isContent = false;

  const base: any = {};

  items.map((entry: Item) => {
    let item: any = entry;
    base.rss.channel.item.push(item);
  });

  if (isContent) {
    base.rss._attributes["xmlns:dc"] = "http://purl.org/dc/elements/1.1/";
    base.rss._attributes["xmlns:content"] = "http://purl.org/rss/1.0/modules/content/";
  }

  if (isAtom) {
    base.rss._attributes["xmlns:atom"] = "http://www.w3.org/2005/Atom";
  }
  return convert.js2xml(base, { compact: true, ignoreComment: true, spaces: 4 });
};
