//DOM
const Btn = document.querySelector('#search-movie');
const MovieNameRef = document.querySelector('#movietxt')
const result = document.querySelector('div#result');


//functions
const DisplayMovie = (movieName) =>{
    const url = `https://www.omdbapi.com/?t=${movieName}&page=1&apikey=618a1d4d`

    //getting data from API
    fetch(url)
    .then(response => response.json())
        .then(data =>{
                if(data.Title === undefined){ //checking some errors
                    result.innerHTML = `<h1 class="movie-not-found">Movie not Found!</h1>`
                } else{
                    const posterUrl = data.Poster === 'N/A'? '404poster.jpg' : data.Poster
                    renderMovieInfo(data, posterUrl)
                }
            })
        .catch(error =>{
            console.error(error)
            result.innerHTML = `<h1 class="movie-not-found">Error connecting to the API</h1>`
        })
    }

//Adding data to the movie info on screen
const renderMovieInfo = (data, posterUrl) =>{
        result.innerHTML = `
        <div id="movie-info">
            <div id="poster-photo">
                <img src="${posterUrl}">
            </div>
                 <div id="details">
                <div id="title">
                    <h3>${data.Title}</h3>
                </div>
                <span>Year:</span>${data.Year}
                <span>Rated:</span>${data.Rated}
                <span>Released:</span>${data.Released}
                <div id="genre">
                    <span>Genre: </span>${data.Genre}
                </div>
                <p><span>Director: </span>${data.Director}</p>
                <p><span>Writer: </span>${data.Writer}</p>
                <p><span>Actor: </span>${data.Actors}</p>
                <div id="plot">
                    <span>Plot: </span>${data.Plot}
                </div>
                <span>Language: </span>${data.Language}
            </div>
        </div>`
    }


//Event Listeners
Btn.addEventListener('click', () => {
    const movieName = MovieNameRef.value.trim() //remove all blanks in front of or at the end of a string
    if(movieName){
        DisplayMovie(movieName)
        MovieNameRef.value = ""
    } else{
        result.innerHTML = `<h1 class="movie-not-found">Movie name is required!</h1>`
    }
})


//Event listener ENTER
MovieNameRef.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){
        const movieName = MovieNameRef.value.trim()
        if(movieName){
            DisplayMovie(movieName)
            MovieNameRef.value = "" //Clean input:text after pressing to search
        } else{
            result.innerHTML = `<h1 class="movie-not-found">Movie name is required!</h1>`
        }
    }
})