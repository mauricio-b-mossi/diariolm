export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [
        Rule.required()
          .min(10)
          .error("A title of min. 10 characters is required"),
        Rule.max(100).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "subject",
      title: "Subject",
      type: "string",
      options: {
        list: [
          { title: "News", value: "news" },
          { title: "Arts", value: "arts" },
          { title: "Sports", value: "sports" },
          { title: "Pop culture", value: "pop" },
          { title: "Food and Travel", value: "food" },
        ],
        layout: "radio",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required().min(50).max(250),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
