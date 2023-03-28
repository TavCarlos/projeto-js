//DOM
let Btn = document.querySelector('#search-movie');
let MovieNameRef = document.querySelector('#movietxt')
let output = document.querySelector('div#container');
let result = document.querySelector('div#result');


//function
let GetMovie = () =>{
    let movieName = MovieNameRef.value
    let url = `https://www.omdbapi.com/?t=${movieName}&page=1&apikey=618a1d4d`

    if(movieName.length == 0){
        result.innerHTML = `<h1 class="movie-not-found">Movie not Found!</h1>`
    } else {

    //buscando dados da API
    fetch(url)
    .then(response => response.json())
        .then(data =>{
            if(data.Title == undefined){ //se o dado vir como undefined
                result.innerHTML = `<h1 class="movie-not-found">Movie not Found!</h1>`
            }else{
                result.innerHTML = `
                <div id="movie-info">
                    <div id="poster-photo">
                        <img src="${data.Poster}" onerror="this.src='404poster.jpg'" alt="">
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
        })
        
    } 
}

Btn.addEventListener('click', GetMovie)
//Pesquisando ao pressionar ENTER
MovieNameRef.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        GetMovie()
    }
})