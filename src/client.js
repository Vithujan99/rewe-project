import client from "@sanity/client";
const sID = process.env.REACT_APP_SANITY_PROJECT_ID;

export default client({
  projectId: sID,
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-11-27",
});
