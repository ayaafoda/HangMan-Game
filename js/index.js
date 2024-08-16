let alphabet = document.querySelector(".alphabet");
let letters = "abcdefghijklmnopqrstuvwxyz";
let lett = Array.from(letters);
let man = document.querySelectorAll(".theMan .all");

// the word
let word = document.getElementsByClassName("theword")[0];
console.log(Array.from(man));
console.log(man);

let myWords = ["boy", "girl", "snack"];

let randomWord = Math.floor(Math.random() * myWords.length);
let thecurrentWord = myWords[randomWord];
// let dashed = Array.from("_".repeat(myWords[randomWord].length));

Array.from(thecurrentWord).forEach(() => {
  let span = document.createElement("span");
  span.innerHTML = "_";
  word.appendChild(span);
});
// console.log(Array.from(dashed));
// dashed.join(" ");
let theTrueLwtter = [];
// word.innerHTML = dashed;

lett.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter";
  span.innerHTML = letter;
  alphabet.appendChild(span);
});

let spans = Array.from(document.querySelectorAll(".theword span"));
console.log(spans)
let lives = 8;
let worrdIndex = myWords[randomWord].length;
let wordnum = 0
document.addEventListener("click", (e) => {
  let statue = false;
  if (e.target.className == "letter") {
    e.target.style.pointerEvents = "none";
    e.target.style.backgroundColor = "#eda4a9";
    theTrueLwtter.unshift(e.target.innerHTML);
    Array.from(thecurrentWord).forEach((letterr, index) => {
      if (e.target.innerHTML == letterr) {
        statue = true;
        console.log(statue);
        spans.forEach((spanletter, spanindex) => {
          if (spanindex == index) {
            spanletter.innerHTML = e.target.innerHTML;
          }
        });
      }
    });
    if (statue !== true ) {
      lives--;
      console.log(lives);
      console.log(statue);
    }else if (statue == true) {
      wordnum++;
      console.log(statue);
      console.log("this is thw number" + wordnum);
      console.log("length" + worrdIndex);
      if (wordnum == worrdIndex) {
        document.querySelector(".win").style.display = "block";
      }
    }
  }
  switch (lives) {
    case 7:
      man[7 - lives].style.display = "block";

      break;
    case 6:
      man[0].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 5:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 4:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[2].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 3:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[2].style.display = "block";
      man[3].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 2:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[2].style.display = "block";
      man[3].style.display = "block";
      man[4].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 1:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[2].style.display = "block";
      man[3].style.display = "block";
      man[4].style.display = "block";
      man[5].style.display = "block";
      man[7 - lives].style.display = "block";

      break;
    case 0:
      man[0].style.display = "block";
      man[1].style.display = "block";
      man[2].style.display = "block";
      man[3].style.display = "block";
      man[4].style.display = "block";
      man[5].style.display = "block";
      man[6].style.display = "block";
      man[7 - lives].style.display = "block";
      document.querySelector(".popup").style.display = "block"
      break;
  }
});

console.log(thecurrentWord);
