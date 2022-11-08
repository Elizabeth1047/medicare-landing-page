let pointer = document.querySelector(".upst");
let secsss = document.querySelector(".secs");
console.log(secsss);

pointer.addEventListener("click", () => {
  secsss.classList.toggle("shown");
  }
);

let secss = document.querySelector(".secs");
let arr = Array.from(secss.children);
let forward = document.getElementById("forward");
let forward2 = document.getElementById("for");
console.log(forward2);
let backward = document.getElementById("backward");
let backward2 = document.getElementById("back");
console.log(backward2);
let gen2 = document.querySelector(".myc");
console.log(gen2);
let gen = document.querySelector(".omn");
let image = Array.from(gen.children);
let firstdot = document.getElementsByClassName("b");
let seconddot = document.getElementsByClassName("l");
 console.log(seconddot);
let spots = 0;
let spotss = 0;
let respot = 6;
let respotss=3;


function enterspot() {
  let dots = Array.from(firstdot);
  dots[spots].classList.add("blues");
  spots += 1;

}
function enterspot1() {
  let dotes = Array.from(seconddot);
  dotes[spotss].classList.add("blues");
  spotss += 1;
}

function removespot() {
  let dots = Array.from(firstdot);
  respot -= 1;
  console.log(respot);
  dots[respot].classList.remove("blues");
}
function removespot2() {
  let dotes = Array.from(seconddot);
  respotss -= 1;
  console.log(respot);
  dotes[respotss].classList.remove("blues");
}

arr.map((ar) => {
  ar.addEventListener("mouseover", () => {
    ar.classList.add("line");
  });
});

arr.map((ar) => {
  ar.addEventListener("mouseout", () => {
    ar.classList.remove("line");
  });
});
let count = 25;
let count2 = 32;
let dr = 4;
let imagex=image.length
console.log(imagex)
let drr = 3;



 function forwar() {
   gen.style.left = -count + "vw";
   count += 22;
  enterspot();
   
 }

 function forwar2() {
   gen2.style.left = -count2 + "vw";
   count2 += 30;
   enterspot1();
 }

function backwar() {
  console.log(count);
  count += -22;
  gen.style.left = -count + "vw";
  removespot();
} 


function backwar2() {
  console.log(count2);
  count2 += -30;
  gen2.style.left = -count2 + "vw";
  removespot2();
}

forward.addEventListener("click", () => {
  if ( dr <= 8) {
    dr++;
    forwar(gen,count,22);
  }
});
forward2.addEventListener("click", () => {
  if ( drr <= 4) {
    drr++;
    forwar2(gen2, count2, 30);
  }
});

backward.addEventListener("click", () => {
  if (dr >= 4 ) {
    dr--;
    backwar();
  }
});
backward2.addEventListener("click", () => {
  if (drr >= 3 ) {
    drr--;
    backwar2();
  }
});
