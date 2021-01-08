import React from 'react';
import ProductRow from "../molecules/ProductRow.jsx";

let ProductTable = (props) => {
    let filteredProducts = props.goods.filter((good) => {
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
            deleteProduct={props.deleteProduct}
            editProduct={props.editProduct}
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
