const words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"];

const pattern = /^(?!.*a).{6,}$/i;

const result = words.filter(function(word) {
  return pattern.test(word);
});

console.log(result);