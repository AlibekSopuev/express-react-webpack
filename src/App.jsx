import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {FilterableProductTable} from "./features/products/pages/FilterableProductTable.jsx";
import {ProductPage} from "./features/products/pages/ProductPage.jsx";

export const App = () => {
    return (
        <>
            <Link to={'/products'}>Посмотреть продукты</Link>
            <Switch>
                <Route exact path={'/products'}>
                    <FilterableProductTable/>
                </Route>
                <Route path={'/products/:productId'}>
                    <ProductPage/>
                </Route>
            </Switch>
        </>
    );
};