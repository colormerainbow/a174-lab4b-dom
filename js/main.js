const baseURL = 'images/';
const nxt = document.querySelector('.nxt');
const slide = document.querySelector('.pic');
const album = ['dance1.jpg', 'dance2.jpg', 'dance3.jpg', 'dance4.jpg', 'dance5.jpg', 'dance6.jpg', 'dance7.jpg'];
let index = 0;

nxt.onclick = function (e) {
  e.preventDefault();
  index = index + 1;
  slide.src = baseURL + album[index];
  console.log(slide.src);

  //write a conditional so that the images wrap back to the beginning image.
  const lastImg = album.length - 1;
  if (index >= lastImg) {
    index = -1;
  }
}

//Add a previous button event listener
const prev = document.querySelector('.prev');
prev.onclick = function (e) {
  e.preventDefault();
  index = index - 1;
  if (index < 0) {
    index = album.length - 1;
  }
  slide.src = baseURL + album[index];
  console.log(slide.src);
}