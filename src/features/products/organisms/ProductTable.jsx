import React from 'react';
import {ProductRow} from "../molecules/ProductRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../reducer";

const ProductTable = () => {
    const dispatch = useDispatch()
    const getSearchText = state => state.productsStore.searchText;
    const getStocked = state => state.productsStore.stocked;
    const getItems = state => state.productsStore.list;

    const getFilteredItems = state => {
        const searchText = getSearchText(state);
        const stocked = getStocked(state);
        const items = getItems(state);

        return Object.values(items).filter((product) => {
            if (!stocked) {
                return product.name.includes(searchText)
            }
            return product.stocked && product.name.includes(searchText)
        })
    }

    const products = useSelector(getFilteredItems)

    React.useEffect(() => {
        dispatch(productsActions.getProductsList.request())
    }, [])

    let rows = products.map((product) => {
        return <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
            stocked={product.stocked}
        />
    })
    return (
        <table>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}
export default ProductTable;
