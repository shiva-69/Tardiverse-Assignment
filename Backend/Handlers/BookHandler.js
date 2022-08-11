const Books = require("../Database/Books");

const AddBook = async (req, res, next) => {
    let body = req.body;
    await Books.create(body);
    return res.status(200).send({message:"Book Added"});
}

const FindAllBooks = async (req, res, body) => {
    let book = await Books.find();
    return book != [] ?  res.status(200).send({list : book}) : res.status(404).send({error: "Books not found"})
}


module.exports = {
AddBook,
FindAllBooks
}