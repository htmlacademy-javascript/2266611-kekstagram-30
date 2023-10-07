// Функция для проверки длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом

const isPalindrome = (string) => {
  string = string.replace(/[\W_]/g, '').toLowerCase();
  return string === string.split('').reverse().join('');
};

isPalindrome('А лис, он умён - крыса сыр к нему носила');

// -----------

const checkPalindrome = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  const halfString = Math.floor(string.length / 2);
  for (let i = 0; i < halfString; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

checkPalindrome('довод');
checkPalindrome('Анна');

// Дополнительное задание

const extractNumbers = (string) => {
  string = string.toString().replace(/\D/g, '');
  return parseInt(string, 10);
};

extractNumbers('ECMAScript 2022');
