
const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

    numberOfCategories.forEach(category => {
    const name = category.querySelector('h2').textContent;
    const elements = category.querySelectorAll('ul>li');
    console.log(`Category: ${name}`);
    console.log(`Elements: ${elements.length}`);
    });