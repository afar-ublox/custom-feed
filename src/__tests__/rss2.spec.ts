import { sampleFeed } from "./setup";

describe("rss 2.0", () => {
  it("should generate a valid feed", () => {
    const actual = sampleFeed.rss2();
    expect(actual).toMatchSnapshot();
  });
  it("should generate a valid feed", () => {
    sampleFeed.addItem({
      title: "Hello World",
      id: "https://example.com/hello-world2",
      url: "https://example.com/hello-world2",
      links: [
        {
          title: "My Link",
          id: "https://example.com/hello-world2",
          url: "https://example.com/hello-world2",
        },
      ],
    });
    const actual = sampleFeed.rss2();
    expect(actual).toMatchSnapshot();
  });
});
