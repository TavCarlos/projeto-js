//const apiKey = 'https://www.omdbapi.com/?s=run&page=1&apikey=618a1d4d'
//https://www.omdbapi.com/?i=tt1596343&apikey=618a1d4d

//DOM
    const movieSearchBox = document.querySelector('#id-movie-search')
    const submitBox = document.querySelector('#search-movie')

    

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
        findMovie(data.Search)
    }

    function findMovie(colecao){
        for(let pos in colecao){
            console.log(colecao[pos].imdbID)
        }
    }
