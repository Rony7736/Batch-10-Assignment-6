
// fetch load category button

//step 1
// create load categories 

const loadCategories = async() => {

    // fetch the data 
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    displayCategories(data.categories);
}

// step 2

// const obj = {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

// create display categories

const displayCategories = (categories) => {
    const categoryButtons = document.getElementById('categoryButtons')

    categories.forEach ((item) => {
        // create a button

        const button = document.createElement('button')
        button.classList = "btn px-32 h-16 lg:h-24 text-2xl font-bold"
        button.innerText = item.category

        // add button to category
        categoryButtons.append(button)

    })

}



loadCategories ()

