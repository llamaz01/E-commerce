const Product = require("../model/product.model");

module.exports.createProduct =async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201);
        res.json(newProduct);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};

module.exports.findAllProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ productName: 1 });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.findProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ _id: id });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.updateProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await Product.deleteOne({ _id: id });
        res.status(200).json(deleteProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}
