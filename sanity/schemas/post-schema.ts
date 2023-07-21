const post = {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      title: "Feature Image",
      name: "feature_image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Author",
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    },
  ],
}

export default post
