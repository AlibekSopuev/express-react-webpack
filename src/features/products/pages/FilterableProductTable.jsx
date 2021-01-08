import React from 'react';
import ProductTable from "../organisms/ProductTable.jsx";
import {FunctionalSearchBar} from "../organisms/FunctionalSearchBar.jsx";

export const FilterableProductTable = () => {
    return (
        <>
            <FunctionalSearchBar/>
            <ProductTable/>
        </>
    )
}