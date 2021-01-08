import React from 'react';
import axios from "axios";
import ProductTable from "../organisms/ProductTable.jsx";
import {FunctionalSearchBar} from "../organisms/FunctionalSearchBar.jsx";

export const FilterableProductTable = props => {
    let [products, setProducts] = React.useState([])
    let [filterText, setFilterText] = React.useState("")
    let [stocked, setStocked] = React.useState(false)
    let [promiseResult, setPromiseResult] = React.useState([])

    React.useEffect(() => {
        let fetchData = async () => {
            let result = await axios.get(
                'api/todos',
            );
            setProducts(result.data)
        };
        fetchData();
        editRequest().then((result) => {
            setPromiseResult(result.data)
        })
    }, [])

    let editRequest = () => {
        return new Promise(() => {
            axios.get(
                'api/todos',
            );
        })
    }
    let editProduct = async (id, title, price) => {
        let {data: editedProduct} = await axios.put(`api/todos/${id}`, {
            title,
            price
        })
        let editedProducts = products.map(product => {
            if (product.id !== editedProduct.id) {
                return product
            }
            return editedProduct
        })
        setProducts(editedProducts)
    }


    let deleteProduct = async (id) => {
        await axios.delete(`api/todos/${id}`)
        let filteredProducts = products.filter(product => id !== product.id)
        setProducts(filteredProducts)
    }

    const addProduct = async (title, price) => {
        let {data: newProduct} = await axios.post('api/todos',
            {
                title,
                price
            }
        )
        setProducts([...products, newProduct])
    }

    let filterProducts = (searchText, checked) => {
        setFilterText(searchText)
        setStocked(checked)
    }
    // все функции и состояния можно удалить

    return (
        <div>
            <FunctionalSearchBar
                filterText={filterText} // no need
                filterProducts={filterProducts} // no need
                stocked={stocked} // no need
                addProduct={addProduct} // no need
            />
            <ProductTable
                goods={products} // no need
                filterText={filterText} // no need
                stocked={stocked} // no need
                deleteProduct={deleteProduct} // no need
                editProduct={editProduct} // no need
            />
        </div>
    )
}