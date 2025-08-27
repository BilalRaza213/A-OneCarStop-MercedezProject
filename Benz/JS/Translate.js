const translations = {
    en: {
        deutsch: "Deutsch",
        english: "English",
        provider_policy: "Provider/Policy",
        search: "Search",
        login: "Login",
        index: "Index",
        signup: "SignUp",
        vehicles: "Vehicles",
        contact: "Contact",
        impressum: "Impressum",
        defining_class: "DEFINING CLASS",
        discover_more: "Discover more >"
    },
    de: {
        deutsch: "Deutsch",
        english: "Englisch",
        provider_policy: "Anbieter/Policy",
        search: "Suche",
        login: "Anmeldung",
        index: "Startseite",
        signup: "Anmelden",
        vehicles: "Fahrzeuge",
        contact: "Kontakt",
        impressum: "Impressum",
        defining_class: "KLASSE DEFINIEREN",
        discover_more: "Mehr erfahren >"
    }
};

function setLanguage(language) {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        element.textContent = translations[language][key];
    });

    // Set header labels
    document.querySelector(".deutsch").textContent = translations[language].deutsch;
    document.querySelector(".English").textContent = translations[language].english;
    document.querySelector(".provider_policy").textContent = translations[language].provider_policy;
    document.querySelector(".search").textContent = translations[language].search;
    document.querySelector(".login a").textContent = translations[language].login;
}

// Set default language to English
setLanguage('en');
