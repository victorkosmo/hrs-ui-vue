// ./utils/formatWorkExperience.js

// Declension helper for Russian words
function declension(number, titles) {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]
    ];
  }
  
  // Function to format work experience in "X года Y месяца" format
  export function formatWorkExperience(totalMonths) {
    const years = Math.floor(totalMonths / 12); // Calculate years
    const months = totalMonths % 12; // Remaining months
  
    // Construct the result string
    const yearsPart = years > 0 ? `${years} ${declension(years, ['год', 'года', 'лет'])}` : '';
    const monthsPart = months > 0 ? `${months} ${declension(months, ['месяц', 'месяца', 'месяцев'])}` : '';
  
    // Combine both parts with a space if both exist
    return [yearsPart, monthsPart].filter(Boolean).join(' ');
  }
  