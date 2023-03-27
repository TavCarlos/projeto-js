//const apiKey = https://www.omdbapi.com/?t=lord&page=1&apikey=618a1d4d;

let Btn = document.querySelector('#search-movie');
let MovieNameRef = document.querySelector('#movietxt')
let output = document.querySelector('div#container');

//DOM - elements
let erro = document.querySelector('#err');

let poster = document.querySelector('#poster-img');
let title = document.querySelector('#title');
let year = document.querySelector('#year');
let rated = document.querySelector('#rated');
let released = document.querySelector('#released');

let genre = document.querySelector('#genre');
let director = document.querySelector('#director');
let writer = document.querySelector('#writer');
let actor = document.querySelector('#actor');

let plot = document.querySelector('#plot');
let language = document.querySelector('#language');


//let teste = document.querySelector('#teste') //testando para update

//teste.innerHTML = `<img src="guardian-galaxy.jpg">` //testando para update

//function
let GetMovie = () =>{
  //  teste.innerHTML = "" //testando para update
    let movieName = MovieNameRef.value//MovieNameRef.value
    let url = `https://www.omdbapi.com/?t=${movieName}&page=1&apikey=618a1d4d`

    if(movieName.length == 0){
        window.alert(`Filme não encontrado. Por favor, tente novamente!`)
    } else {
    fetch(url)
    .then(response => response.json())
        .then(data =>{
            if(data.Title == undefined){
                window.alert(`Não foi possivel encontrar: ${movieName}!`);
            } else{
                if(data.Poster == 'N/A'){
                    poster.innerHTML = `<img src="404poster.jpg" alt="movie-poster">`
                }else{
                    poster.innerHTML = `<img src="${data.Poster}" alt="movie-poster">`
                }
                title.innerHTML = `${data.Title}`
                year.innerHTML = `<span>Year:</span>${data.Year}`
                rated.innerHTML = `<span>Rated:</span>${data.Rated}`
                released.innerHTML = `<span>Released:</span>${data.Released}`

                genre.innerHTML = `<span>Genre:</span>${data.Genre}</p>`
                director.innerHTML = `<p id="director"> <span>Director:</span>${data.Director}`
                writer.innerHTML = `<span>Writer:</span>${data.Writer}`
                actor.innerHTML = `<span>Actors:</span>${data.Actors}`

                plot.innerHTML = `<span>Plot: </span>${data.Plot}`
                language.innerHTML = `<span>Language:</span>${data.Language}`
            }
        })
    }
}

Btn.addEventListener('click', GetMovie)