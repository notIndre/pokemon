const allPokeUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=300';

fetch(allPokeUrl, { method: 'GET' })
  .then((response) => {
    response.json()
      .then((allPokemon) => {
        const results = allPokemon.results
        results.forEach((poke) => {
          fetch(poke.url, {method: 'GET'})
            .then((response) => {
              response.json()
                .then((result) => {
                
                const pokeDiv = document.getElementById('pokemons');
                
                const singlePoke = document.createElement('div');
                pokeDiv.appendChild(singlePoke);
                singlePoke.className = "singlePoke";
                
                const image = document.createElement('img');
                image.src = result.sprites.front_default;
                singlePoke.appendChild(image);
                
                const name = document.createElement('p');
                name.innerText = result.name;
                singlePoke.appendChild(name);
                
                const index = document.createElement('p');
                index.innerText = result.id;
                singlePoke.appendChild(index);
                
                const height = document.createElement('p');
                height.innerText = 'height: ' + result.height;
                height.className = "height";
                singlePoke.appendChild(height);
                
                const weight = document.createElement('p');
                weight.innerText = 'weight: ' + result.weight;
                weight.className = "weight";
                singlePoke.appendChild(weight);
                
                })
            })
            .catch((error) => {
              console.log('this is an error in calling each pokemon', error);
            })
        })
    })
  }).catch((error) => {
    console.log('this is an error in calling the whole lot', error);
  })