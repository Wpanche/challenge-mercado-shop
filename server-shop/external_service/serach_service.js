var request = require('request');
var urlExternalService = "https://api.mercadolibre.com"




function proxyMercadoLibre(path) {
    return new Promise(function (resolve, reject) {
        var options = {
            'method': 'GET',
            'url': `${urlExternalService}/${path}`,
            'headers': {
            }
        };
        request(options, function (error, response, body) {

            if (error) return reject(error);
            try {

                resolve(JSON.parse(body));
            } catch (e) {
                reject(e);
            }
        });
    });
}

function ItemModel(item, description) {
    try {

        item.decimal = (item.price % 1).toString().replace("0.", "").substr(0, 2)


        return {

            "id": item.id,
            "title": item.title,
            "price": {
                "currency": item.currency_id,
                "amount": parseInt(item.price),
                "decimals": item.decimal,
            },
            "picture": item.thumbnail,
            "condition": item.condition,
            "free_shipping": item.shipping.free_shipping,
            "sold_quantity": item.sold_quantity,
            description


        }

    } catch (e) {
        return new Error(e.message)
    }
}

async function getSearchProduct(search) {


    try {

        var result = await proxyMercadoLibre(`sites/MLA/search?q=${search}`)
        var listItem = {}
        listItem.items = []
        var arrayCategories = []

        if (result.filters.find(item => item.id == "category")) {
            var categories = []
            categories = result.filters.find(item => item.id == "category").values.shift()
            arrayCategories = categories.path_from_root.map(path => path.name)
        }

        listItem.categories = arrayCategories


        result.results.slice(0, 4).forEach((item) => {

            listItem.items.push(ItemModel(item))
        })

        return listItem;

    } catch (e) {
        return new Error(e.message)
    }


}

async function getItem(id, callback) {
    try {

        var resultItem = await Promise.all([getItemMercadoLibre(id), getDescriptionItemMercadoLibre(id)])
        var itemResult = {}
        itemResult.item = ItemModel(resultItem[0], resultItem[1].plain_text || "")
        return itemResult;

    } catch (e) {
        return new Error(e.message)
    }

}

getItemMercadoLibre = (idItem) => proxyMercadoLibre(`items/${idItem}`);

getDescriptionItemMercadoLibre = (idItem) => proxyMercadoLibre(`items/${idItem}/description`);





module.exports = {
    searchProduct: getSearchProduct,
    Item: getItem
}

