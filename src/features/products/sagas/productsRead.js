import {productsActions} from "../reducer";
import {call, put, takeEvery} from "@redux-saga/core/effects";
import axios from "axios";

const fetchProducts = () => axios.get('api/todos')

function* productsListRequestSaga({payload = {}}) {
    try {
        const {params} = payload
        const res = yield call(fetchProducts);
        yield put(productsActions.getProductsList.finish({data: res.data}))

    } catch (error) {
        yield put(productsActions.getProductsList.fail(error))
    }
}

const readProduct = (productId) => axios.get(`api/todos/${productId}`)

function* productsReadRequestSaga({payload = {}}) {
    try {
        const {params} = payload
        const {productId} = params
        const res = yield call(readProduct, productId);
        yield put(productsActions.read.finish({...res.data}))

    } catch (error) {
        yield put(productsActions.read.fail(error))
    }
}

export const productsRead = function* () {
    yield takeEvery([productsActions.getProductsList.request().type], productsListRequestSaga),
        yield takeEvery([productsActions.read.request().type], productsReadRequestSaga)
}