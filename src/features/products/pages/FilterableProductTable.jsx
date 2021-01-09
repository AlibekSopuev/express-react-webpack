import React from 'react';
import ProductTable from "../organisms/ProductTable.jsx";
import {SearchBar} from "../organisms/SearchBar.jsx";
import {CreateProductForm} from "../organisms/CreateProductForm.jsx";

export const FilterableProductTable = () => {
    const [filterText, setFilterText] = React.useState("")
    const [stocked, setStocked] = React.useState(false)

    let filterProducts = (searchText, checked) => {
        setFilterText(searchText)
        setStocked(checked)
    }
    return (
        <>
            <SearchBar
                filterText={filterText}
                stocked={stocked}
                filterProducts={filterProducts}
            />
            <CreateProductForm/>
            <ProductTable
                filterText={filterText}
                stocked={stocked}
            />
        </>
    )
}