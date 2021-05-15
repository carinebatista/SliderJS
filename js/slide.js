export default class Slide{
	constructor(wrapper, slide){
		this.wrapper = document.querySelector('.wrapper')
		this.slide = document.querySelector('.slide')
		this.dist = { finalPosition:0, startX: 0, movement:0}  
	}

		moveSlide(distX){
			this.slide.style.transform  = `translate3d(${distX}px, 0, 0)`;
			this.dist.movePosition = distX
		}
	
		updatePosition(clientX){
			this.dist.movement = (this.dist.startX - clientX) * 1.6
			return this.dist.finalPosition - this.dist.movement
		}

		onStart(event){
			let movetype;
			if(event.type === 'mousedown'){
				event.preventDefault()
				this.dist.startX= event.clientX
				movetype='mousemove'
			} else {
				this.dist.startX = event.changedTouches[0].clientX
				movetype = 'touchmove'
			}
			this.wrapper.addEventListener(movetype, this.onMove)
		}

		onMove(event){
			const pointerPosition = (event.type === 'mousemove') ?
				event.clientX : event.changedTouches[0].clientX
			const finalPosition = this.updatePosition(pointerPosition)
			this.moveSlide(finalPosition)
		}

		onEnd(event){
			this.wrapper.removeEventListener('mousemove', this.onMove)
			this.dist.finalPosition = this.dist.movePosition
		}

		addSlideEvents(){
			this.wrapper.addEventListener('mousedown', this.onStart)
			this.wrapper.addEventListener('mouseup', this.onEnd)
			this.wrapper.addEventListener('touchstart', this.onStart)
			this.wrapper.addEventListener('touchend', this.onEnd)

		}
		
		bindEvents(){
			this.onStart = this.onStart.bind(this)
			this.onEnd = this.onEnd.bind(this)
			this.onMove= this.onMove.bind(this)
		}


		init(){
			this.bindEvents()
			this.addSlideEvents()
			return this
		}

}