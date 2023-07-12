import { useSearchParams } from "react-router-dom";
import {useState} from "react";

export default function Search() {
    const products = ["iphone 13 pro", "iphone 12", "Galaxy s22"];
    const [filter, setFilter] = useState("");

    const filteredProducts = products.filter(product => {
        const lowerCaseFilter = filter.toLowerCase();
        const lowerCaseProduct = product.toLowerCase();
        return lowerCaseProduct.includes(lowerCaseFilter);
    });

    const handleFilterChange = event => {
        const newFilter = event.target.value;
        setFilter(newFilter);
    };

    return (
        <div>
            <input
                value={filter}
                onChange={handleFilterChange}
            />
            {filteredProducts.map((product, index) => (
                <li key={index}>{product}</li>
            ))}
        </div>
    );
}
