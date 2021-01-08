import React from 'react';
import ProductRow from "../molecules/ProductRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../reducer";

let ProductTable = (props) => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => {
        return {
            products: state.productsStore.list,
        }
    })

    React.useEffect(() => {
        dispatch(productsActions.getProductsList.request())
    }, [])

    let filteredProducts = products.filter((good) => {
        if (!props.stocked) {
            return good.name.includes(props.filterText)
        }
        return good.stocked && good.name.includes(props.filterText)
    })
    let rows = filteredProducts.map((good) => {
        return <ProductRow
            key={good.id}
            name={good.name}
            price={good.price}
            id={good.id}
            stocked={good.stocked}
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
