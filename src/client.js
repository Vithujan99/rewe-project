// contentfulClient.js
import { createClient } from "contentful";

// Überprüfe, ob du lokal entwickelst oder auf Vercel bist
const isLocal = process.env.REACT_APP_ENV === "development";

const cID = isLocal ? process.env.REACT_APP_CONTENTFUL_SPACE_ID : undefined;
const cAT = isLocal ? process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN : undefined;

const client = createClient({
  space: cID,
  accessToken: cAT, // Nur für Backend, nicht im Frontend verwenden
});

export default client;
