const countCategories = document.querySelectorAll('.item');
console.log('Number of categories:', countCategories.length);

countCategories.forEach( value => {    
    console.log('Category:', value.firstElementChild.textContent);
    const countItem = value.querySelectorAll('li');
    console.log('Elements:', countItem.length);
});
