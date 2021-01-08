import React from 'react';
import {useDispatch} from "react-redux";
import {productsActions} from "../reducer";

export const FunctionalSearchBar = props => {
    const dispatch = useDispatch()
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
            dispatch(productsActions.create.request({title: productName, price}))
        }
        setProductName("")
        setPrice("")
    }

    let filterProducts = () => {
        dispatch(productsActions.filter.filter({
            searchText: filterTextInput.current.value,
            stocked: checkbox.current.checked
        }))

    }

    return (
        <>
            <form>
                <input
                    style={{marginTop: '10px'}}
                    type="text"
                    placeholder="Поиск товара"
                    ref={filterTextInput}
                    onChange={filterProducts}
                />
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <input
                        type="checkbox"
                        ref={checkbox}
                        onChange={filterProducts}
                        defaultChecked={false}
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
        </>
    )
}