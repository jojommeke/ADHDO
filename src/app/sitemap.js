export default function sitemap() {
  return [
    {
      url: "https://jojommeke.github.io/ADHDO",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://github.com/jojommeke/ADHDO",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}
