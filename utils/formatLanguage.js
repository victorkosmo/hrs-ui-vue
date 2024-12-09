// ./utils/formatLanguage.js

export function formatLanguage({ code, level }) {
    // Map language codes to human-readable names
    const languageMap = {
        EN: "Английский",
        RU: "Русский",
        CN: "Китайский",
        FR: "Французский",
        DE: "Немецкий",
        ES: "Испанский",
        KZ: "Казахский"
        // Add more languages as needed
    };

    // Map proficiency levels to descriptions
    const levelMap = {
        A1: "Начальный",
        A2: "Элементарный",
        B1: "Средний",
        B2: "Средне-продвинутый",
        C1: "Продвинутый",
        C2: "В совершенстве",
        Native: "Родной"
    };

    // Get language name and description
    const languageName = languageMap[code] || code; // Fallback to code if not in map
    const levelDescription = levelMap[level] || level; // Fallback to level if not in map

    // Format the result
    if (level === "Native") {
        return `${languageName} — Родной`;
    }
    return `${languageName} — ${level} — ${levelDescription}`;
}
