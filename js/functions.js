const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('проверяемая строка', 20);

const isPalindrome = (string) => {
  string = string.replace(/[\W_]/g, '').toLowerCase();
  return string === string.split('').reverse().join('');
};

isPalindrome('А лис, он умён - крыса сыр к нему носила');

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

const extractNumbers = (string) => {
  if (typeof string === 'number') {
    return parseInt(string, 10);
  }
  string = string.replace(/\D/g, '');
  return parseInt(string, 10);
};

extractNumbers('ECMAScript 2022');
