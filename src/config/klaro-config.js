const klaroConfig = {
  version: 1, // Versionsnummer der Konfiguration
  elementID: "klaro-consent", // ID des HTML-Elements, in dem Klaro angezeigt wird
  storageMethod: "localStorage", // Speichermethode (localStorage oder cookie)
  cookieName: "klaro-consent", // Name des Cookies
  services: [
    {
      name: "google-analytics",
      title: "Google Analytics",
      purposes: ["analyse"], // Zweck des Dienstes
      cookies: ["_ga", "_gid", "_ga_2454YKWLW7"], // Cookies, die von Google Analytics gesetzt werden
      required: false, // Zustimmung ist nicht erforderlich
      optOut: true, // Nutzer können den Dienst ablehnen
    },
    {
      name: "marketo",
      title: "Marketo",
      purposes: ["marketing"], // Zweck des Dienstes
      cookies: ["_mkto_trk"], // Cookies, die von Marketo gesetzt werden
      required: false, // Zustimmung ist nicht erforderlich
      optOut: true, // Nutzer können den Dienst ablehnen
    },
    {
      name: "iub-cs",
      title: "IUB Consent Management",
      purposes: ["consent-management"], // Zweck des Dienstes
      cookies: ["_iub_cs-s3873356"], // Cookie von IUB CMP
      required: false, // Zustimmung ist nicht erforderlich
      optOut: true, // Nutzer können den Dienst ablehnen
    },
    {
      name: "google-maps",
      title: "Google Maps",
      purposes: ["maps"], // Zweck des Dienstes
      cookies: [], // Google Maps setzt keine eigenen Cookies
      required: false, // Zustimmung ist nicht erforderlich
      optOut: false, // Nutzer können den Dienst nicht ablehnen
    },
  ],
  translations: {
    en: {
      consentModal: {
        description: "Here you can decide which services you allow us to use.",
      },
    },
    de: {
      consentModal: {
        description:
          "Hier können Sie entscheiden, welche Dienste wir nutzen dürfen.",
      },
    },
  },
};

export default klaroConfig;
