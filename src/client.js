import { createClient } from "@sanity/client";

export default createClient({
  projectId: "0mdakb4k",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-09-14",
});
