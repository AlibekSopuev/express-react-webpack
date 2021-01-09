import React from 'react';
import ProductTable from "../organisms/ProductTable.jsx";
import {SearchBar} from "../organisms/SearchBar.jsx";
import {CreateProductForm} from "../organisms/CreateProductForm.jsx";
import styled from "styled-components";

export const FilterableProductTable = () => {
    const [filterText, setFilterText] = React.useState("")
    const [stocked, setStocked] = React.useState(false)
    let [isCreateProduct, setCreateProduct] = React.useState(false)

    let handleTogglePopup = () => {
        setCreateProduct(!isCreateProduct)
    };

    let filterProducts = (searchText, checked) => {
        setFilterText(searchText)
        setStocked(checked)
    }

    return (
        <>
            <StyledButton onClick={handleTogglePopup}>
                Добавить новый продукт в список
            </StyledButton>
            <SearchBar
                filterText={filterText}
                stocked={stocked}
                filterProducts={filterProducts}
            />
            <ProductTable
                filterText={filterText}
                stocked={stocked}
            />
            {isCreateProduct && <CreateProductForm handleClosePopup={handleTogglePopup}/>}
        </>
    )
}

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
`