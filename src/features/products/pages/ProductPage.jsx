import React, {useState, useEffect} from 'react';
import {useParams, useRouteMatch} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

export const ProductPage = (props) => {
    const dispatch = useDispatch()
    const { productsStore } = useSelector(state => {
        return {
            productsStore: state.productsStore,
        }
    })
    const {productId} = useParams();
    let {url} = useRouteMatch();
    let [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            let {data: productData} = await axios.get(`http://localhost:8080/api/todos/${productId}`)
            setProduct(productData)
        }
        fetchProduct()
    }, [productId])

    return (
        <div>
            <div>{product.name && product.name}</div>
            <div>{product.price && product.price}</div>
            <div>{product.stocked && 'В наличии'}</div>
            <div>{product.category && product.category}</div>
        </div>
    )
}
