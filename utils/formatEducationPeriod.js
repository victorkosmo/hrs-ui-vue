// ./utils/formatEducationPeriod.js

export function formatEducationPeriod(period) {
    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    // Helper to format a single date
    function formatDate(dateStr) {
        if (!dateStr) return null; // Handle missing dates

        const [year, month] = dateStr.split("-");
        if (year && !month) {
            return `${year}`; // Only year is provided
        }
        return `${months[Number(month) - 1]} ${year}`;
    }

    const start = formatDate(period.start);
    const end = formatDate(period.end);

    // Handle different cases
    if (period.is_current) {
        return start ? `${start} — по настоящее время` : `По настоящее время`;
    }
    if (!start && end) {
        return `${end}`; // Only end date
    }
    if (start && !end) {
        return `${start}`; // Only start date
    }
    if (start && end) {
        return `${start} — ${end}`; // Both dates
    }

    return "Даты не указаны"; // Fallback if all are missing
}
