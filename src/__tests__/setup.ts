import { Feed } from "../feed";

export const sampleFeed = new Feed();


sampleFeed.addItem({
  title: "Hello World",
  id: "https://example.com/hello-world?id=this&that=true",
  url: "https://example.com/hello-world?link=sanitized&value=2",
  links: [
    {
      title: "My Link",
      id: "https://example.com/hello-world?link=sanitized&value=2",
      url: "https://example.com/hello-world?link=sanitized&value=2",
    },
  ],
});

