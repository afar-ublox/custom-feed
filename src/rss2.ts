import * as convert from "xml-js";
import { Feed } from "./feed";
import { Item } from "./typings";

/**
 * Returns a RSS 2.0 feed
 */
export default (ins: Feed) => {
  const { items } = ins;

  const base: any = {
    rss: {
      _attributes: {
        version: "2.0",
      },
      channel: {
        item: [],
      },
    },
  };

  items.map((entry: Item) => {
    let item: any = entry;
    base.rss.channel.item.push(item);
  });
  return convert.js2xml(base, { compact: true, ignoreComment: true, spaces: 4 });
};
