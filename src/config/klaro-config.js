const klaroConfig = {
  version: 1, // Versionsnummer der Konfiguration
  elementID: "klaro-consent", // ID des HTML-Elements, in dem Klaro angezeigt wird
  storageMethod: "localStorage", // Speichermethode (localStorage oder cookie)
  cookieName: "klaro-consent", // Name des Cookies
  lang: "de",
  langSwitcher: true,
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
      purposes: ["marketing"],
      cookies: ["_mkto_trk"],
      required: false,
      optOut: true,
    },
    {
      name: "iub-cs",
      title: "IUB Consent Management",
      purposes: ["consent-management"],
      cookies: ["_iub_cs-s3873356"],
      required: false,
      optOut: true,
    },
    {
      name: "google-maps",
      title: "Google Maps",
      purposes: ["maps"],
      cookies: [],
      required: false,
      optOut: false,
    },
    {
      name: "session-storage",
      title: "Session Storage",
      purposes: ["functional"], // Zweck des Dienstes
      cookies: [], // Keine Cookies, aber Klaro erwartet dieses Feld
      required: true, // Kann als notwendig markiert werden
      optOut: false, // Opt-out ist nicht möglich, da es für Funktionalität genutzt wird
    },
  ],
  translations: {
    en: {
      consentModal: {
        title: "Privacy Settings",
        description: "Here you can decide which services you allow us to use.",
      },
      services: {
        "google-analytics": {
          description: "Analytics service by Google.",
        },
        marketo: {
          description: "Marketing automation platform by Marketo.",
        },
        "google-maps": {
          description: "Map service by Google.",
        },
        "session-storage": {
          description: "Stores session data temporarily for functionality.",
        },
      },
    },
    de: {
      consentModal: {
        title: "Datenschutzeinstellungen",
        description:
          "Hier können Sie entscheiden, welche Dienste wir nutzen dürfen.",
      },
      services: {
        "google-analytics": {
          description: "Analysedienst von Google.",
        },
        marketo: {
          description: "Marketing-Automatisierungsplattform von Marketo.",
        },
        "google-maps": {
          description: "Kartendienst von Google.",
        },
        "session-storage": {
          description:
            "Speichert Sitzungsdaten vorübergehend für Funktionalität.",
        },
      },
    },
  },
};

export default klaroConfig;
