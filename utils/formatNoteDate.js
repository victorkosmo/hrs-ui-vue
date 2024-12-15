/* ./utils/formatNoteDate.js */

export function formatNoteDate(dateString) {
    const date = new Date(dateString);
    
    // Add leading zero if needed
    const addZero = (n) => n < 10 ? `0${n}` : n;

    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1); // Months are 0-based
    const year = date.getFullYear();
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}