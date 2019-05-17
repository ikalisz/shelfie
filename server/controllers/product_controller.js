

const controller = {
    get_products: (req, res) => {
        const database = req.app.get('db')
        database.get_products()
        .then(products => {
            res.status(200).send(products)
        })
    },
    add_product: (req, res) => {

    }
}

module.exports = controller