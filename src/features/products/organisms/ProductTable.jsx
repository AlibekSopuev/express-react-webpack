import React from 'react';
import ProductRow from "../molecules/ProductRow.jsx";
import {useDispatch, useSelector} from "react-redux";
import {productsActions} from "../reducer";

let ProductTable = (props) => {
    const dispatch = useDispatch()
    const {products} = useSelector(state => {
        return {
            products: state.productsStore.list,
        }
    })

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
