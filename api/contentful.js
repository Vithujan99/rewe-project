// Vercel Serverless Function
const { createClient } = require("contentful");

module.exports = async (req, res) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, // Dein Contentful Space ID
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Dein Contentful Access Token
  });

  try {
    // Hier holen wir alle Jobs-Daten aus Contentful
    const response = await client.getEntries({
      content_type: "job", // Dein Content Type
      select: "fields.name,fields.beschreibung,sys.id", // Wähle nur die benötigten Felder
    });

    // Sende die abgerufenen Daten an das Frontend zurück
    res.status(200).json(response.items);
  } catch (err) {
    // Fehlerbehandlung
    res
      .status(500)
      .json({ error: "Fehler beim Abrufen der Daten von Contentful" });
  }
};
