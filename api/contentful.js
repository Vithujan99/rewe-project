// Vercel Serverless Function
const { createClient } = require("contentful");

module.exports = async (req, res) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID, // Dein Contentful Space ID
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Dein Contentful Access Token
  });

  try {
    // Abrufen der Daten für alle Content-Typen
    const jobsResponse = await client.getEntries({
      content_type: "job", // Content Type für Jobs
      select: "fields.name,fields.beschreibung,sys.id", // Wähle nur die benötigten Felder
    });

    const employeesResponse = await client.getEntries({
      content_type: "mitarbeiter", // Content Type für Mitarbeiter
      select:
        "fields.name,fields.position,fields.biotext,fields.profilbild,sys.id", // Wähle die benötigten Felder
    });

    const imagesResponse = await client.getEntries({
      content_type: "webBild", // Content Type für Bilder
      select: "fields.name,fields.bild", // Wähle die benötigten Felder
    });

    // Rückgabe der gesammelten Daten
    res.status(200).json({
      jobs: jobsResponse.items,
      employees: employeesResponse.items,
      images: imagesResponse.items,
    });
  } catch (err) {
    // Fehlerbehandlung
    res
      .status(500)
      .json({ error: "Fehler beim Abrufen der Daten von Contentful" });
  }
};
