import { deskTool } from "sanity/desk"

export const config = {
  projectId: "nisyyjm0",
  dataset: "production",
  title: "Live Cultr",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [
      {
        name: "project",
        title: "Projects",
        type: "document",
        fields: [
          {
            name: "name",
            title: "Name",
            type: "string",
          },
          {
            name: "description",
            title: "Description",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "name",
            },
          },
          {
            name: "image",
            title: "Image",
            type: "image",
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: "alt",
                title: "Alt Text",
                type: "string",
              },
            ],
          },
          {
            name: "content",
            title: "Content",
            type: "array",
            of: [{ type: "block" }],
          },
        ],
      },
    ],
  },
}
