module.exports={
    getAllShoes:(req, res)=>{
        const db = req.app.get('db')
        db.get_allShoes().then(shoes=>{
            res.status(200).send(shoes)
        })
    },

    addShoes: (req, res) => {
        const db = req.app.get('db')
        const {shoe_image, description, price} = req.body
        db.add_shoe([shoe_image, description, price]).then(shoes =>{
            res.status(200).send(shoes)
        })
    },
    getOneShoe: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_shoe(id).then(shoe => {
            res.status(200).send(shoe)
        })
    }
}


