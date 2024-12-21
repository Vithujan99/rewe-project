import { createClient } from "contentful";

module.exports = async (req, res) => {
  const cID = process.env.CONTENTFUL_SPACE_ID;
  const cAT = process.env.CONTENTFUL_ACCESS_TOKEN;

  const client = createClient({
    space: cID,
    accessToken: cAT,
  });

  try {
    // Abrufen der Jobs-Daten
    const jobsResponse = await client.getEntries({
      content_type: "job", // Dein Content Type für Jobs
      select: "fields.name,fields.beschreibung,sys.id", // Wähle nur die benötigten Felder
    });

    // Abrufen der Mitarbeiter-Daten
    const employeesResponse = await client.getEntries({
      content_type: "mitarbeiter", // Dein Content Type für Mitarbeiter
      select:
        "fields.name,fields.position,fields.biotext,fields.profilbild,sys.id", // Wähle die Felder aus
    });

    // Abrufen der Bilder-Daten
    const imagesResponse = await client.getEntries({
      content_type: "webBild", // Dein Content Type für Bilder
      select: "fields.name,fields.bild", // Wähle die Felder aus
    });

    // Kombinierte Antwort mit allen Daten
    res.status(200).json({
      jobs: jobsResponse.items,
      employees: employeesResponse.items,
      images: imagesResponse.items,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
