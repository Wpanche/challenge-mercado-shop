function firmaJson(req, res, next) {

    res.firmarJson = (datos) => {
        datos.author = {
            "name": "Wilmar",
            "lastname": "Panche"
        }
        res.json(datos)
    }
    next()
}

module.exports = firmaJson