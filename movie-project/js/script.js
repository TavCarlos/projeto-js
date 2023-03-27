//const apiKey = https://www.omdbapi.com/?t=lord&page=1&apikey=618a1d4d

//DOM
    const movieSearchBox = document.querySelector('#id-movie-search')
    const submitBox = document.querySelector('#search-movie')
    const gerericInfo = document.querySelector('#generic-info')
    const poster = document.querySelector('#movie-poster')

    

    submitBox.addEventListener('click', (e)=>{
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        apifunction(options)
    })

    async function apifunction(opt){
        let response = await fetch (`https://www.omdbapi.com/?s=${movieSearchBox.value.trim()}&page=1&apikey=618a1d4d`, opt)
        let data = await response.json()
        
       poster.innerHTML = `<img src="${data.Search[0].Poster}" alt="movie poster">`
       
       findMovie(data.Search)
    }

    function findMovie(colecao){
            movieID = colecao[0].imdbID

        outputMovie(movieID)
    }

    async function outputMovie(movie){
        let url = `https://www.omdbapi.com/?i=${movie}&apikey=618a1d4d`
        let response = await fetch (url)
        let data = await response.json()
        
        gerericInfo.innerHTML = `<p><span>Year: </span> ${data.Year}</p>
        <p><span>Rated:</span> ${data.Rated}</p>
        <p> <span>Released:</span> ${data.Released} </p>
        <p> <span>Runtime:</span>${data.Runtime}</p>
        `
        
    } 
