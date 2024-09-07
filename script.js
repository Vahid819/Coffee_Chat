// import { useState } from 'react';

window.onload = () => {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector(".loding").style.display = "none";
  document.querySelector(".web_contenar").style.display = "block";
  document.querySelector(".inverted-3").classList.add("inverted-2");
  document.querySelector("body").style.scrollBehavior = "smooth";
};

let image = document.querySelector("#laptop_image");

// const [color, setColor] = useState(false)
let color = false;
let fritst_div = document.querySelector(".one");
let second_div = document.querySelector(".two");
let threed_div = document.querySelector(".three");
let fourth_div = document.querySelector(".four");
fritst_div.addEventListener("click", () => {
  if (color == false) {
    fritst_div.style.backgroundColor = "#ace1af";
    second_div.style.backgroundColor = "#e3fdfd";
    threed_div.style.backgroundColor = "#e3fdfd";
    fourth_div.style.backgroundColor = "#e3fdfd";
    fritst_div.style.transition = "0.7s";
    color = true;
  } else {
    fritst_div.style.backgroundColor = "#e3fdfd";
    fritst_div.style.transition = "0.7s";
    color = false;
  }
});
second_div.addEventListener("click", () => {
  if (color == false) {
    second_div.style.backgroundColor = "#ace1af";
    fritst_div.style.backgroundColor = "#e3fdfd";
    threed_div.style.backgroundColor = "#e3fdfd";
    fourth_div.style.backgroundColor = "#e3fdfd";
    second_div.style.transition = "0.7s";
    color = true;
  } else {
    second_div.style.backgroundColor = "#e3fdfd";
    second_div.style.transition = "0.7s";
    color = false;
  }
});
threed_div.addEventListener("click", () => {
  if (color == false) {
    threed_div.style.backgroundColor = "#ace1af";
    fritst_div.style.backgroundColor = "#e3fdfd";
    second_div.style.backgroundColor = "#e3fdfd";
    fourth_div.style.backgroundColor = "#e3fdfd";
    threed_div.style.transition = "0.7s";
    color = true;
  } else {
    threed_div.style.backgroundColor = "#e3fdfd";
    threed_div.style.transition = "0.7s";
    color = false;
  }
});
fourth_div.addEventListener("click", () => {
  if (color == false) {
    fourth_div.style.backgroundColor = "#ace1af";
    fritst_div.style.backgroundColor = "#e3fdfd";
    second_div.style.backgroundColor = "#e3fdfd";
    threed_div.style.backgroundColor = "#e3fdfd";
    fourth_div.style.transition = "0.7s";
    color = true;
  } else {
    fourth_div.style.backgroundColor = "#e3fdfd";
    fourth_div.style.transition = "0.7s";
    color = false;
  }
});

let i = 1;
setInterval(() => {
  //   console.log(ans);
  if (i <= 4) {
    slides_text(i);
    console.log(i);
    i += 1;
  } else {
    i = 1;
  }
}, 4000);

function slides_text(i) {
  if (i <= 2) {
    // console.log( "vahid")
    if (i == 2) {
      document.querySelector(".sub_meet").style.marginTop = "-165px";
      // document.querySelector(".sub_meet").style.transition =
      //   "marginTop 1.7s easy-in-out";
    } else {
      document.querySelector(".sub_meet").style.marginTop = "-80px";
      // document.querySelector(".sub_meet").style.transition =
      //   "all 1.7s easy-in-out";
    }
    //   console.log(i);
  } else if (i >= 2 && i <= 4) {
    // console.log("aksa")
    if (i != 4) {
      document.querySelector(".sub_meet").style.marginTop = "-75px";
      // document.querySelector(".sub_meet").style.transition =
      // "marginTop 1.7s easy-in-out";
    } else {
      document.querySelector(".sub_meet").style.marginTop = "0px";
      // document.querySelector(".sub_meet").style.transition =
      // "all 1.7s easy-in-out";
    }
    //   console.log(i);
  }
}

// setInterval(()=>{console.log("va")})

window.scrollTo({
  top: 100,
  behavior: "smooth",
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1200) {
    image.classList.add("scale_animation");
    document
      .querySelector(".frist_instruction")
      .classList.add("opposite_slied");
    document
      .querySelector(".three_instruction")
      .classList.add("opposite_slied");
    document
      .querySelector(".four_instructions")
      .classList.add("slieds_animation");
    document
      .querySelector(".second_instructions")
      .classList.add("slieds_animation");
    image.style.display = "block"
    // document.querySelector(".navbar").style.backgroundColor = "red"
  }
});

window.addEventListener("scroll", ()=>{
  if(window.scrollY >=1400){
    document.querySelector(".laptop2").classList.add("up_img")
    document.querySelector(".laptop1").classList.add("down_img")
    document.querySelector(".laptop1").style.display ="block"
    document.querySelector(".laptop2").style.display = "block"
  }
})
