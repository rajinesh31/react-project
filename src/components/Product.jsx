const Product = () => {
    const product = {
        Name : "laptop",
        Price : 70000,
        available : "yes"
    };
    return (
        <div>
            <h1>Name={product.Name}</h1>
            <h1>Price={product.Price}</h1>
            <h1>Available={product.available}</h1>
        </div>
    )
};
export default Product;