//:

for (let i = 0; i < 10; i++) {
  console.log("Hello World " + i);
}

//:

let numbersToTen: number[] = [];
for (let i = 0; i <= 10; i++) {
  numbersToTen.push(i);
}
console.log(numbersToTen);

//:

let counter = 0;
while (counter < 10) {
  console.log("Hello World " + counter);
  counter++;
}

//:

let number: number = 1;
const outputDiv = document.getElementById("level1-7") as HTMLDivElement;
do {
  if (outputDiv) {
    outputDiv.innerHTML += `Nummer: ${number} <br>`;
  }
  number++;
} while (number <= 5);

//:

let number2: number = 1;
const outputDiv2 = document.getElementById("level1-8") as HTMLDivElement;
do {
  if (outputDiv2 && number2 % 2 === 0) {
    outputDiv2.innerHTML += number2 + "<br>";
  }
  number2++;
} while (number2 <= 20);

//:

function createImageNames(): string[] {
  const returnArray: string[] = [];

  for (let i = 1; i <= 100; i++) {
    const imgNum = i.toString().padStart(3, "0");
    const imgName = `image_${imgNum}.jpg`;
    returnArray.push(imgName);
  }
  return returnArray;
}
const imageNames = createImageNames();
imageNames.forEach((el) => console.log(el));

//:

const inputLoop = document.getElementById("input-loop") as HTMLInputElement;
const btnLoop = document.getElementById("btn-loopme") as HTMLButtonElement;
const outputLoop = document.getElementById("output-loop") as HTMLDivElement;

btnLoop.addEventListener("click", () => {
  const numberOfOs = parseInt(inputLoop.value, 10);
  let result = "L";
  for (let i = 0; i < numberOfOs; i++) {
    result += "o";
  }
  result += "p";
  outputLoop.textContent = result;
});

// btnLoop.addEventListener("click", () => {
//   const numberOfOs = parseInt(inputLoop.value, 10);

//   if (isNaN(numberOfOs) || numberOfOs < 0) {
//     outputLoop.textContent = "Bitte gib eine positive Zahl ein!";
//     return;
//   }

//   if (numberOfOs === 0) {
//     outputLoop.textContent = "Die Eingabe darf nicht 0 sein!";
//     return;
//   }

//   let result = "L";

//   if (numberOfOs % 2 === 0) {
//     for (let i = 0; i < numberOfOs; i++) {
//       result += "o";
//     }
//   } else {
//     for (let i = 0; i < numberOfOs; i++) {
//       result += i % 2 === 0 ? "o" : "0";
//     }
//   }

//   result += "p";
//   outputLoop.textContent = result;
// });

//:

const text: string = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil",`;

function splitTextIntoBlocks(text: string): string[] {
  const textInBlocksOfHundred: string[] = [];
  const totalLines = Math.ceil(text.length / 100);

  for (let i = 0; i < totalLines; i++) {
    const block = text.slice(i * 100, (i + 1) * 100);
    const lineNumber = totalLines - i;
    textInBlocksOfHundred.push(`${block} - ${lineNumber} of ${totalLines}`);
  }
  return textInBlocksOfHundred;
}
const result = splitTextIntoBlocks(text);
console.log(result);

//:Bonus

const numbers: number[] = [5, 22, 15, 100, 55];
const output = document.getElementById("output") as HTMLDivElement;

function getDivisors(num: number): string {
  let divisors: number[] = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors.length > 0 ? divisors.join(", ") : "Keine anderen Teiler";
}
let res = "";
numbers.forEach((num) => {
  res += `<p>${num} ist teilbar durch: ${getDivisors(num)}</p>`;
});
output.innerHTML = res;
