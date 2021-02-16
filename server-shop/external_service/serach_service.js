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

function ItemModel(item, options = { description, categories }) {
    try {

        item.decimal = (item.price % 1).toString().replace("0.", "").substr(0, 2)
        var description = options.description
        var categories = options.categories

        return {

            "item": {
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
                description,
                categories

            }
        }

    } catch (e) {
        return {
            error: "resource not found",
            item: {}
        }
    }
}

function getSearchProduct(search, callback) {

    proxyMercadoLibre(`sites/MLA/search?q=${search}`).then((result) => {

        try {

            var listItem = {}
            listItem.items = []
            var arrayCategories = []

            if (result.filters.find(item => item.id == "category")) {
                var categories = []
                categories = result.filters.find(item => item.id == "category").values.shift()
                arrayCategories = categories.path_from_root.map(path => path.name)
            }


            result.results.slice(0, 4).forEach((item) => {

                listItem.items.push(ItemModel(item, { categories: arrayCategories }))
            })
            callback(listItem)
        } catch (error) {
            callback({ error })
        }
    })
}

function getItem(id, callback) {
    Promise.all([getItemMercadoLibre(id), getDescriptionItemMercadoLibre(id)]).then((result) => {

        itemResult = ItemModel(result[0], { description: result[1].plain_text || "" })
        callback(itemResult)
    }, (err) => {
        callback({
            error: err
        })
    })
}

getItemMercadoLibre = (idItem) => proxyMercadoLibre(`items/${idItem}`);

getDescriptionItemMercadoLibre = (idItem) => proxyMercadoLibre(`items/${idItem}/description`);





module.exports = {
    searchProduct: getSearchProduct,
    Item: getItem
}

