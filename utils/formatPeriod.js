/**
 * Formats a period object into a string.
 * @param {Object} period - The period object.
 * @param {string} period.start - The start date in "YYYY-MM" format.
 * @param {string} [period.end] - The end date in "YYYY-MM" format (optional).
 * @param {boolean} period.is_current - Whether the period is ongoing.
 * @returns {string} - The formatted period string.
 */
export function formatPeriod(period) {
    if (!period || !period.start) return '';

    const start = parseDate(period.start);
    const end = period.is_current ? new Date() : parseDate(period.end);

    const monthsDifference = getMonthsDifference(start, end);

    // Get year and month difference
    const years = Math.floor(monthsDifference / 12);
    const months = monthsDifference % 12;

    // Format strings
    const formattedStart = formatMonthYear(start);
    const formattedEnd = period.is_current
        ? 'по настоящее время'
        : formatMonthYear(end);

    const duration = [];
    if (years > 0) duration.push(`${years} ${declineWord(years, 'год', 'года', 'лет')}`);
    if (months > 0) duration.push(`${months} ${declineWord(months, 'месяц', 'месяца', 'месяцев')}`);

    // Return formatted string with <br> tag
    return `${formattedStart} — ${formattedEnd}<br>${duration.join(' ')}`;
}


/**
 * Parses a date string in "YYYY-MM" format into a Date object.
 * @param {string} dateString - The date string in "YYYY-MM" format.
 * @returns {Date} - The parsed Date object.
 */
function parseDate(dateString) {
    const [year, month] = dateString.split('-').map(Number);
    return new Date(year, month - 1); // Month is zero-based in JS Date
}

/**
 * Calculates the total number of months between two dates.
 * @param {Date} start - The start date.
 * @param {Date} end - The end date.
 * @returns {number} - The total number of months.
 */
function getMonthsDifference(start, end) {
    const yearsDiff = end.getFullYear() - start.getFullYear();
    const monthsDiff = end.getMonth() - start.getMonth();
    return yearsDiff * 12 + monthsDiff;
}

/**
 * Formats a Date object into "Месяц Год" (e.g., "Сентябрь 2022") in Russian.
 * @param {Date} date - The Date object.
 * @returns {string} - The formatted date string.
 */
function formatMonthYear(date) {
    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

/**
 * Declines a Russian word based on a numeric value.
 * @param {number} value - The numeric value.
 * @param {string} singular - The singular form of the word.
 * @param {string} few - The form used for 2-4.
 * @param {string} many - The form used for 5 and above.
 * @returns {string} - The declined word.
 */
function declineWord(value, singular, few, many) {
    const mod10 = value % 10;
    const mod100 = value % 100;
    if (mod100 >= 11 && mod100 <= 14) return many;
    if (mod10 === 1) return singular;
    if (mod10 >= 2 && mod10 <= 4) return few;
    return many;
}
