import React from 'react';
import axios from "axios";

export const FunctionalSearchBar = props => {
    let [productName, setProductName] = React.useState("")
    let [price, setPrice] = React.useState("")
    let filterTextInput = React.useRef()
    let checkbox = React.useRef()

    let createNewPrice = (event) => {
        setPrice(event.target.value)
    }
    let createNewProduct = (event) => {
        setProductName(event.target.value)
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        if (productName && price) {
            props.addProduct(productName, price)
        }
        setProductName("")
        setPrice("")
    }

    let handleChange = () => {
        props.filterProducts(filterTextInput.current.value, checkbox.current.checked)
    }

    return (
        <div>
            <form>
                <input
                    style={{marginTop: '10px'}}
                    type="text"
                    placeholder="Поиск товара"
                    ref={filterTextInput}
                    onChange={handleChange}
                    value={props.filterText}
                />
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <input
                        type="checkbox"
                        ref={checkbox}
                        onChange={handleChange}
                        checked={props.stocked}
                    />
                    {" "}Товары в наличии
                </div>
            </form>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={productName}
                    onChange={createNewProduct}
                />
                <input
                    type="text"
                    placeholder="Product price"
                    value={price}
                    onChange={createNewPrice}
                />
                <button type="submit">
                    Добавить товар
                </button>

            </form>
        </div>
    )
}