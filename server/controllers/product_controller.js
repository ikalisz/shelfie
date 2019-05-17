

const controller = {
    get_products: (req, res) => {
        const database = req.app.get('db')
        database.get_products()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    },
    get_product: (req, res) => {
        const database = req.app.get('db')
        const {id} = req.params
        database.get_products(id)
        .then(product => {
            res.status(200).send(products)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    },
    add_product: (req, res) => {

    }
}

module.exports = controller