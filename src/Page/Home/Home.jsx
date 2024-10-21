import { useEffect, useState } from "react";
import { api } from "../../Services/Api";
export const Home = () => {
    const [Product, setProduct] = useState([]);

    useEffect(() =>{
        async function loadProduct() {
            const response = await api.get("products/")
            setProduct(response.dat.products)
        }
        loadProduct();

    }, [])

    return ( 
       <div className="container">
        {products.map((product) => {
            return (
                <div key={product.id} className="products">
                    )
        })}
       </div>
     );
}