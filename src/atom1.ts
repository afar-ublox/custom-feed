import * as convert from "xml-js";
import { Feed } from "./feed";
import { Item } from "./typings";
import { sanitize } from "./utils";

/**
 * Returns an Atom feed
 * @param ins
 */
export default (ins: Feed) => {
  const { items } = ins;

  const base: any = {
    _declaration: { _attributes: { version: "1.0", encoding: "utf-8" } },
    feed: {}
  };

  // icon

  base.feed.entry = [];

  /**************************************************************************
   * "entry" nodes
   *************************************************************************/
  items.map((item: Item) => {
    //
    // entry: required elements
    //

    let entry: convert.ElementCompact = {
      id: sanitize(item.url),
      title: { _attributes: { type: "html" }, _cdata: item.title },
      url: [{ _attributes: { href: sanitize(item.url) } }],
      links: item.links
    };

    base.feed.entry.push(entry);
  });

  return convert.js2xml(base, { compact: true, ignoreComment: true, spaces: 4 });
};
