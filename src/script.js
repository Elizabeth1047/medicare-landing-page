let pointer = document.querySelector(".menuline");
let secsss = document.querySelector(".tie");
let bodyss = document.querySelector(".header");
let bodys = document.querySelector("body");
let point = document.querySelector(".upr");
let droper = document.querySelector(".dropdown");
console.log(point);
console.log(droper);

pointer.addEventListener("click", () => {
  // console.log("lizzy");
  secsss.classList.toggle("shown");
  bodys.classList.toggle("fixed");
});

point.addEventListener("click", () => {
  console.log("lizzy");
  // droper.style.display=("block")
  droper.classList.toggle("show");
  bodys.classList.toggle("fixed");
  console.log("lizzysss");
});

let secss = document.querySelector(".secs");
let arr = Array.from(secss.children);
let forward = document.getElementById("forward");
let forward2 = document.getElementById("for");
// console.log(forward2);
let backward = document.getElementById("backward");
let backward2 = document.getElementById("back");
// console.log(backward2);
let gen2 = document.querySelector(".myc");

// console.log(gen2);
let gen = document.querySelector(".omn");

let image = Array.from(gen.children);
let firstdot = document.getElementsByClassName("b");
let seconddot = document.getElementsByClassName("l");
// console.log(seconddot);
let spots = 0;
let spotss = 0;

let dots = Array.from(firstdot);
let dotes = Array.from(seconddot);
function enterspot(ele) {
  ele[spots].classList.add("blues");
  spots += 1;
}

function removespot(ele) {
  spots -= 1;
  ele[spots].classList.remove("blues");
}

function enterspot1(eles) {
  eles[spotss].classList.add("blues");
  spotss += 1;
}

function removespot2(eles) {
  spotss -= 1;
  eles[spotss].classList.remove("blues");
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
let imagex = image.length;
// console.log(imagex);
let drr = 3;

function forwar(c) {
  gen.style.left = -count + "vw";
  count += c;
}
function backwar(c) {
  count += -c;
  gen.style.left = -count + "vw";
  
}
function forwar2(d) {
  gen2.style.left = -count2 + "vw";
  count2 += d;
  
}
function backwar2(d) {
  count2 += -d;
  gen2.style.left = -count2 + "vw";
  
}
forward.addEventListener("click", () => {
  if (count >= 25 && count < 135) {
    // console.log("lizzy");
    forwar(22)
    enterspot(dots);
  }
});

backward.addEventListener("click", () => {
  if (count > 25) {
    // console.log("bat");
    backwar(47);
    removespot(dots);
    count += 25;
  }
});

forward2.addEventListener("click", () => {
  if (count2 >= 32 && count2 < 92) {
    forwar2(30);
    enterspot1(dotes);

  }
});

backward2.addEventListener("click", () => {
  if (count2 > 32) {
    backwar2(62);
    count2 += 32;
    removespot2(dotes);
  }
});
