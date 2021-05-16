import Slide from "./slide.js";

const slide = new Slide('.wrapper', '.slide')
console.log(slide)
slide.init()

slide.changeSlide(3)