import React from 'react';
import ProductTable from "../organisms/ProductTable.jsx";
import {FunctionalSearchBar} from "../organisms/FunctionalSearchBar.jsx";

export const FilterableProductTable = () => {
    let [filterText, setFilterText] = React.useState("")
    let [stocked, setStocked] = React.useState(false)

    let filterProducts = (searchText, checked) => {
        setFilterText(searchText)
        setStocked(checked)
    }

    return (
        <div>
            <FunctionalSearchBar
                filterText={filterText} // no need
                stocked={stocked} // no need
                filterProducts={filterProducts} // no need
            />
            <ProductTable
                filterText={filterText} // no need
                stocked={stocked} // no need
            />
        </div>
    )
}