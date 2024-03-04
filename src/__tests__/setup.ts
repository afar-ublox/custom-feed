import { Feed } from "../feed";

export const sampleFeed = new Feed();

sampleFeed.addItem({
  title: "Hello World",
  url: "https://example.com/hello-world?link=sanitized&value=2",
  links: [
    {
      title: "My Link",
      url: "https://example.com/hello-world?link=sanitized&value=2",
    },
  ],
});

