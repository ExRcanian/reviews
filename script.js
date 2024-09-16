
async function getReviews() {
    const reviewCall = await fetch('https://places.googleapis.com/v1/places/ChIJvbUeW4ff3IARtBBlyoahCf8?fields=userRatingCount&key=AIzaSyB5mn9UxT6w8p1QgHnZRYJdJw2wIt1xaxQ')
    const reviewData = await reviewCall.json();
    const reviewNumber = Object.values(reviewData)[0];
    const smiirlNumber = {
        number: reviewNumber
    }
    const stringed = JSON.stringify(smiirlNumber);


    console.log(smiirlNumber);
    const numberVisual = document.querySelector('.value');
    numberVisual.innerHTML = `${stringed}`;
}

getReviews()



