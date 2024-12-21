// api/contentful.js für Vercel Serverless Function
import { createClient } from "contentful";

module.exports = async (req, res) => {
  const cID = process.env.CONTENTFUL_SPACE_ID; // Direkt ohne `REACT_APP_` Präfix
  const cAT = process.env.CONTENTFUL_ACCESS_TOKEN; // Access Token nur im Backend
  console.log("CONTENTFUL_SPACE_ID:", process.env.CONTENTFUL_SPACE_ID);
  console.log("CONTENTFUL_ACCESS_TOKEN:", process.env.CONTENTFUL_ACCESS_TOKEN);
  const client = createClient({
    space: cID,
    accessToken: cAT,
  });

  try {
    const entries = await client.getEntries();
    res.status(200).json(entries.items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
