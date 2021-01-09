import React from 'react';
import {useDispatch} from "react-redux";
import {productsActions} from "../reducer";

export const CreateProductForm = () => {
    const dispatch = useDispatch()
    let [productName, setProductName] = React.useState("")
    let [price, setPrice] = React.useState("")

    let createProductPrice = (event) => {
        setPrice(event.target.value)
    }
    let createProductName = (event) => {
        setProductName(event.target.value)
    }

    let createProduct = async (event) => {
        event.preventDefault();
        if (productName && price) {
            dispatch(productsActions.create.request({title: productName, price}))
        }
        setProductName("")
        setPrice("")
    }

    return (
        <form onSubmit={createProduct}>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={createProductName}
            />
            <input
                type="text"
                placeholder="Product price"
                value={price}
                onChange={createProductPrice}
            />
            <button type="submit">
                Добавить товар
            </button>
        </form>

    )
}