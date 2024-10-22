
function GetJson() {
    fetch('./data.json')
        .then((response) => response.json())
        .then((json) => {
            let data = json;
            console.log(data);

            LoopTemplates(data);
        });
}

GetJson();


function LoopTemplates(data) {

    console.log(data);

    for (let index = 0; index < data.length; index++) {

        if ("content" in document.createElement("template")) {

            const productsSelector = document.querySelector("#products");
            const templateProducts = document.querySelector("#productsGrid");

            const clone = templateProducts.content.cloneNode(true);

            console.log(data[index].category);

            const imageSelector = clone.querySelector("#image");
            imageSelector.src = data[index].image.desktop;

            const categorySelector = clone.querySelector("#category");
            categorySelector.textContent = data[index].category;

            const titleSelector = clone.querySelector("#title");
            titleSelector.textContent = data[index].name;

            const priceSelector = clone.querySelector("#price");

            const getPricing = data[index].price;
            const convertPricing = getPricing.toFixed(2);

            priceSelector.textContent = `€ ${convertPricing}`;

            productsSelector.appendChild(clone);
        }
    }


}
