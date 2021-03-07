import {productsActions} from "../reducer";
import {all, call, put, takeEvery} from "@redux-saga/core/effects";
import axios from "../../../utils/axios-config";

const fetchProducts = () => axios.get('api/todos')
const fetchLibraries = () => axios.get('opendata/7705851331-stat_library/data-2016-11-10T00-00-00-structure-2016-09-12T00-00-00.json')

function* productsListRequestSaga({payload = {}}) {
    try {
        const res = yield call(fetchProducts);
        const resp = yield call(fetchLibraries);
        if (res.data.error) {
            yield put(productsActions.getProductsList.fail(res.data.error))
        } else {
            yield put(productsActions.getProductsList.finish({data: res.data}))
        }
    } catch (error) {
        yield put(productsActions.getProductsList.fail(error))
    }
}

const readProduct = (productId) => axios.get(`api/todos/${productId}`)

function* productsReadRequestSaga({payload = {}}) {
    try {
        const {productId} = payload
        const res = yield call(readProduct, productId);
        if (res.data.error) {
            yield put(productsActions.read.fail(res.data.error))
        } else {
            yield put(productsActions.read.finish({...res.data}))
        }
    } catch (error) {
        yield put(productsActions.read.fail(error))
    }
}

function* productsFilterRequestSaga({payload = {}}) {
    try {
        yield put(productsActions.filter.filter())
    } catch (error) {
        yield put(productsActions.filter.fail(error))
    }
}

export const productsRead = function* () {
    yield all([
        yield takeEvery([productsActions.getProductsList.request().type], productsListRequestSaga),
        yield takeEvery([productsActions.read.request().type], productsReadRequestSaga),
    ])
}