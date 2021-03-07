import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../reducer";

export const SearchBar = () => {
    const dispatch = useDispatch()
    let filterTextInput = React.useRef()
    let checkbox = React.useRef()
    const {searchText, stocked} = useSelector(state => {
        return {
            searchText: state.productsStore.searchText,
            stocked: state.productsStore.stocked,
        }
    })

    let filterProducts = () => {
        dispatch(productsActions.filter.request({
            searchText: filterTextInput.current.value,
            stocked: checkbox.current.checked
        }))
    }

    return (
        <form>
            <input
                style={{marginTop: '10px'}}
                type="text"
                placeholder="Поиск товара"
                ref={filterTextInput}
                onChange={filterProducts}
                value={searchText}
            />
            <div style={{marginTop: '10px', marginBottom: '10px'}}>
                <input
                    type="checkbox"
                    ref={checkbox}
                    onChange={filterProducts}
                    checked={stocked}
                />
                {" "}Товары в наличии
            </div>
        </form>
    )
}