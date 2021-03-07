import React from 'react';
import ProductTable from "../organisms/ProductTable.jsx";
import {SearchBar} from "../organisms/SearchBar.jsx";
import {CreateProductForm} from "../organisms/CreateProductForm.jsx";
import styled from "styled-components";
import {ThemeContext} from "../../../index";

export const FilterableProductTable = () => {
    let [isCreatePopupShown, setCreatePopupShown] = React.useState(false)
    const theme = React.useContext(ThemeContext);

    let handleToggleCreatePopup = () => {
        setCreatePopupShown(!isCreatePopupShown)
    };

    return (
        <>
            <StyledButton onClick={handleToggleCreatePopup} theme={theme}>
                Добавить новый продукт в список
            </StyledButton>

            <SearchBar/>

            <ProductTable/>

            {isCreatePopupShown && <CreateProductForm handleClosePopup={handleToggleCreatePopup}/>}
        </>
    )
}

const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  background: ${({theme}) => theme.background};
  color: ${({theme}) => theme.foreground};
`