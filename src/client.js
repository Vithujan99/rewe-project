// contentfulClient.js
import { createClient } from "contentful";
const cID = process.env.CONTENTFUL_SPACE_ID;
const cAT = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: cID, // Dein Contentful Space ID
  accessToken: cAT, // Dein Contentful Access Token
});

export default client;
