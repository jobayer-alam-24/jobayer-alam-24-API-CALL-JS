const getPokemons = async () => {
    try {
        const input = document.querySelector('#user_input').value.toLowerCase();
        if (!input) {
            throw new Error('Please enter a Pokémon name or ID.');
        }

        if (!navigator.onLine) {
            throw new Error('You are offline. Please check your internet connection.');
        }
        const image = document.querySelector('.output-container img');
        const loadData = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
       if (!loadData.ok) {
            throw new Error(`Failed to fetch Pokémon. Status: ${loadData.status}`);
        }
        const mainData = await loadData.json();
        setTimeout(() => {
            image.src = mainData.sprites.front_default;
            image.style.display = 'block';
        }, 1500);
    }
    catch(err){
        alert(`Error: ${err.message}`);
    }
};

document.querySelector('button[type=button]').addEventListener('click', getPokemons);
document.body.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
        getPokemons();
    }
});
