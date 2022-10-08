//  let arr = Array.from(document.querySelectorAll(".hove"));

let secss = document.querySelector(".secs");
let arr = Array.from(secss.children);
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let gen = document.querySelector(".omn");
let image = Array.from(gen.children);
let firstdot = document.getElementsByClassName("b");
let dots = Array.from(firstdot);



arr.map((ar)=>{
        ar.addEventListener("mouseover", () => {
          ar.classList.add("line");

        });
 })

 arr.map((ar) => {
   ar.addEventListener("mouseout", () => {
     ar.classList.remove("line");
   });
 });

 
  
    let x = image.length;
    console.log(x);
    let gr = 25;
    let tr = 5;
    let dr = 4;
    
      forward.addEventListener("click", () => {
        if (dr >= 4 && dr <= 8) {
          dr++;
          dots.forEach((dot) => {

            dot.nextElementSibling.style.background
          });

          b.nextElementSibling
           console.log("strge");
          gen.style.left = -gr + "vw";
          let boss = gr + 22;
          gr=boss

        } else {
          console.log("strange");
        }

        
      })
//       backward.addEventListener("click", () => {
//         if (dr >= 4 && dr <= 9) {
//           dr--;
//           let bosss = -tr - 25;
// console.log("strge");
//           gen.style.left = tr + "vw";
          
//           tr = bosss;
//         } else {
//           console.log("strange");
//         }
//       });
    


  
 
  