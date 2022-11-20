// Find Element by Content using JavaScript
// Borislav Hadzhiev, Jul 25, 2022

const searchFunction = () => {
    const keyword = document.getElementById('search_field').value;
    const matches = [];

    for (const div of document.querySelectorAll('figure')) {
        if (div.textContent.toLowerCase().includes(keyword.toLowerCase())) {
            matches.push(div);
        }
    }

    for (const div of document.querySelectorAll('figure')) {
        div.classList.add('hidden')
    }

    matches.forEach(element => {
        element.classList.remove('hidden')
    });
}

document.getElementById("search").addEventListener("click", searchFunction);
document.getElementById("search_field").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchFunction();
    }
});
