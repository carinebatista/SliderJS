import Slide from "./slide.js";

const slide = new Slide('.wrapper', '.slide')
slide.init()

slide.changeSlide(3)
slide.activePrevSlide()