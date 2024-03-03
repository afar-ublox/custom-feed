import { Feed } from "./feed";

/**
 * Returns a JSON feed
 * @param ins
 */
export default (ins: Feed) => {
  const { items } = ins;

  let feed: any = {
    items: items
  };

  return JSON.stringify(feed, null, 4);
};
