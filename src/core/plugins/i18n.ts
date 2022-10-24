import { createI18n } from "vue-i18n";

const messages = {
    en: {
        dashboard: "Dashboard",
        portfolio: "Portfolio",
    },
    es: {
        dashboard: "Tablero",
        portfolio: "Portfolioso ES",
    },
    de: {
        dashboard: "Instrumententafel",
        portfolio: "Portfolio DE",
    },
    ja: {
        dashboard: "ダッシュボード",
        portfolio: "レイアウトビルダー",
    },
    fr: {
        dashboard: "Générateur de mise",
        portfolio: "Portfolio FR",
    },
};

const i18n = createI18n({
    legacy: false,
    locale: "en",
    globalInjection: true,
    messages,
});

export default i18n;
