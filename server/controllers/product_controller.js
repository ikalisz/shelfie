

const controller = {
    get_products: (req, res) => {
        //Here this is just a basic 'Grab me all of the products from my database', if you want to know more about the sql code check out get_products.sql
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
        //this function grabs me only one product based on the id on req.params
        const database = req.app.get('db')
        const {id} = req.params
        database.get_product([id])
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    },
    add_product: (req, res) => {
        //this function adds a product to the table
        const database = req.app.get('db')
        const {name, price, img} = req.body
        console.log(name)
        console.log('here!')
        database.add_product({name, price, img})
        .then(response => {
            res.status(200).send(true)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    },
    delete_product: (req, res) => {
        //this function deletes a product from the table based on the id given in params.
        const database = req.app.get('db')
        const {id} = req.params
        database.delete_product({id})
        .then(inventory => {
            res.status(200).send(inventory)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    },
    update_product: (req, res) => {
        //this function updates a product based on the id given and also the info given on req.body
        const database = req.app.get('db')
        const {id} = req.params
        const {name, price, img} = req.body
        database.update_product([name, price, img, id])
        .then(response => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log(`We ran into error ${err}`)
            res.status(500)
        })
    }
}

module.exports = controller