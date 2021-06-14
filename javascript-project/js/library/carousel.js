export default class Carousel {
  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.currentIndex = 1;
	this.showSlide(this.currentIndex)
  }
  showSlide(n) {
    var allSlides = document.getElementsByClassName("img");
    if(n > allSlides.length){n= 1; this.currentIndex=1;}
    if(n < 1) {n = allSlides.length; this.currentIndex= allSlides.length;}
    for(let i= 0; i < allSlides.length; i++){
      allSlides[i].style.display="none";
    }
    allSlides[n-1].style.display = "block";
  }
  plusSlide(n){
    this.showSlide(this.currentIndex = this.currentIndex + n);
  }
}
