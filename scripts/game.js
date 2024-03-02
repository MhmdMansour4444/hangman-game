const words = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Tesla",
  "Nissan",
  "Volvo",
  "Subaru",
  "Lexus",
  "Jeep",
  "Hyundai",
  "Kia",
  "Mazda",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Bugatti",
];

const rand = Math.floor(Math.random() * words.length);
const word = words[rand].toUpperCase();
console.log(word);

let divs = document.querySelectorAll(".letter");
divs.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    console.log(index);
    letterClick(index);
  });
});
const letterClick = (index) => {
  let letters = document.getElementsByClassName("letter");
  let letter = letters[index].innerHTML;
};

document.addEventListener("keypress", (event) => {
    const key = event.key.toUpperCase();
    console.log(key);
    if (/^[a-zA-Z]$/.test(key)) {
      const alphabetPosition = key.charCodeAt(0) - 65;
      console.log(alphabetPosition);
      letterClick(alphabetPosition);
    }
  });
  
