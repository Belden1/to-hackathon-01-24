const thankyouDiv = document.getElementById('thankyouid');
const howdidwedoId = document.getElementById('howdidwedoId');
const scoreId = document.getElementById('score');

thankyouDiv.style.display = 'none';
const ratingCircleOne = document.getElementById('one');
const ratingCircleTwo = document.getElementById('two');
const ratingCircleThree = document.getElementById('three');
const ratingCircleFour = document.getElementById('four');
const ratingCircleFive = document.getElementById('five');
const submitButton = document.getElementById('submit');

let rating = 0;

ratingCircleOne.addEventListener('click', function () {
  rating = 1;
});
ratingCircleTwo.addEventListener('click', function () {
  rating = 2;
});
ratingCircleThree.addEventListener('click', function () {
  rating = 3;
});
ratingCircleFour.addEventListener('click', function () {
  rating = 4;
});
ratingCircleFive.addEventListener('click', function () {
  rating = 5;
});

submitButton.addEventListener('click', function () {
  if (rating > 0) {
    howdidwedoId.style.display = 'none';
    scoreId.textContent = rating;
    thankyouDiv.style.display = 'flex';
  } else {
    return null;
  }
});
