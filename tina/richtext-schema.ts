import { Template, tinaTableTemplate } from "tinacms"

export const richTextComponents: Template[] = [
  tinaTableTemplate,
  {
    name: "VideoPlayer",
    label: "VideoPlayer",
    fields: [
      {
        name: "url",
        label: "Video URL",
        type: "string",
      },
    ],
    ui: {
      defaultItem: {
        url: "https://www.youtube.com",
      },
    },
  },
  {
    name: "CaptionedImage",
    label: "Label Image",
    fields: [
      {
        name: "imgUrl",
        label: "Image URL",
        type: "image",
      },
      {
        name: "caption",
        label: "Caption",
        type: "string",
      },
      {
        name: "alt",
        label: "Image alt text",
        type: "string",
      },
    ],
  },
  {
    name: "TextBox",
    label: "Text Box",
    fields: [
      {
        name: "text",
        label: "Text",
        type: "rich-text",
      },
    ],
  },
  {
    name: "PullQuote",
    label: "Pull Quote",
    ui: {
      defaultItem: {
        text: "Fly Like a Butterfly; Sting Like a Bee.",
        author: "Muhammad Ali",
      },
    },
    fields: [
      {
        name: "text",
        label: "Text",
        type: "string",
      },
      {
        name: "author",
        label: "Author",
        description: "Optional",
        type: "string",
      },
      {
        name: "authorLink",
        label: "Author Link",
        description: "Optional",
        type: "string",
      },
    ],
  },
]
