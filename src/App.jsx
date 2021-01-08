import React from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {productsActions, productsStore} from "./features/products/reducer";
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import {FilterableProductTable} from "./features/products/pages/FilterableProductTable.jsx";
import {ProductPage} from "./features/products/pages/ProductPage.jsx";

export const App = () => {
    let [products, setProducts] = React.useState([])
    const dispatch = useDispatch()
    const { productsStore } = useSelector(state => {
        return {
            productsStore: state.productsStore,
        }
    })
    React.useEffect(() => {
        // let fetchData = async () => {
        //     let result = await axios.get(
        //         'utils/todos',
        //     );
        //     setProducts(result.data)
        // };
        // fetchData();
        dispatch(productsActions.getProductsList.request())
        dispatch(productsActions.update.request({params: {id: 1, title: 'Ball', price: '25'}}))
    }, [])

    React.useEffect(() => {
        setProducts(productsStore?.list)
    }, [productsStore])

    let renderProds = products?.map(item => <div>{item.name}</div>)

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