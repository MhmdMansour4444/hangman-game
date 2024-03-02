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

const answerSection = document.getElementById("answer-section");

for (let i = 0; i < word.length; i++) {
  let divWrapper = document.createElement("div");
  divWrapper.style.display = "inline-block";
  let letterDiv = document.createElement("div");
  
  letterDiv.innerHTML = word[i];
  letterDiv.id = i;
  letterDiv.style.display = "inline-block";
  letterDiv.style.visibility = "hidden";

  let blineDiv = document.createElement("div");
  blineDiv.style.borderBottom = "2px solid black";
  blineDiv.style.width = "15px";
  divWrapper.appendChild(letterDiv);
  divWrapper.appendChild(blineDiv);

  answerSection.appendChild(divWrapper);
}

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
