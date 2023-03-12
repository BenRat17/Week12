const testData = [
    {
        Name: 'Grimble, Irongore',
        Race: 'Dwarf',
        Class: 'Fighter',
        favorite: false
    },
    {
        Name: 'Silas, Fairweather',
        Race: 'Half-Elf',
        Class: 'Ranger',
        favorite: false

    },
    {
        Name: 'Desdemona, Grand-Heretic',
        Race: 'Human',
        Class: 'Warlock',
        favorite: false
    },
];

const liveData =[];

const characterContainer = $("#characterContainer");

function renderData() {
    characterContainer.empty()
    for(const character of testData) {
        const div = $("<div/>")
        div.text(character.Name)
        div.addClass("border p-3 m-3 mb-0 shadow")
        const button = $("<button/>")
        button.text("X")
        button.on("click", () => deleteCharacter(character.Name))
        button.addClass("btn btn-danger ms-2 me-2")
        div.append(button)
        const favButton =$("<button/>")
        favButton.text("Favorite")
        if(character.favorite){
            favButton.addClass("btn btn-success")
        }else {
            favButton.addClass("btn btn-outline-success")
        }
        favButton.on("click", () => toggleFavorite(character.Name))
        div.append(favButton)
        characterContainer.append(div)
    }
};

function createCharacter() {
    let newCharacter = {
    Name: prompt('What is your name?'),
    Race: prompt('What is your race?'),
    Class: prompt('What is your class?'),
    favorite: false
    }
    testData.push(newCharacter)
    $(renderData);
};

function deleteCharacter(characterToDelete) {
    const index = testData.findIndex(testData => testData.Name === characterToDelete)
    testData.splice(index, 1)
    renderData();
}
function toggleFavorite(idToToggle){
    const index = testData.findIndex(testData => testData.Name === idToToggle)
    const character = testData[index]
    character.favorite = !character.favorite
    renderData()
}
