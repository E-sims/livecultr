import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas"

export const config = {
  projectId: "nisyyjm0",
  dataset: "production",
  title: "Live Cultr",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
}
