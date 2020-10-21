const products = [
    { id: 1, title: 'Burger', price: 150, image: 'images/hamburger-3184108_640.png' },
    { id: 2, title: 'Cheeseburger', price: 80, image: 'images/cheeseburger-34315.svg' },
    { id: 3, title: 'Chicken burger', price: 100, image: 'images/hamburger-576419.svg'},
    { id: 4, title: 'Hamburger', price: 200, image: 'images/cheeseburger-155659_640.png' },
    { id: 5, title: 'Fish burger', price: 150, image: 'images/burger-31770_640.png'},
    { id: 6, title: 'Big burger', price: 200, image: 'images/burger-312704_640.png' },
    { id: 7, title: 'Coffee', price: 80, image: 'images/coffee-34251_640.png' },
    { id: 8, title: 'Tea', price: 150, image: 'images/tea-153336_640.png' },
    { id: 9, title: 'Lemonade', price: 40, image: 'images/caipi-377960_640.png' },
    { id: 10, title: 'Cola', price: 50, image: 'images/fizzy-4805335_640.png'},
]

const renderGoodsItem = (title = 'Product none', price = 0, image = 'https://placehold.it/200x150') => {
    return `<div class="product">
        <img class="product__image" src="${image}" alt="image">
        <h3>${title}</h3>
        <p class="product__price">${price}</p>
        <button class="product__button">Buy</button>
        </div>`;
};

const renderGoodsList = (list) => {
   /* let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.image)).join("");
    document.querySelector('.products').innerHTML = goodsList;*/
    document.querySelector('.products').insertAdjacentHTML('afterbegin', list.map(item => renderGoodsItem(item.title, item.price, item.image)).join(''));
}

renderGoodsList(products);
