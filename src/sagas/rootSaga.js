import {all} from "@redux-saga/core/effects";
import {productsRead} from "../features/products/sagas/productsRead";
import {productsUpdate} from "../features/products/sagas/productsUpdate";

export default function* rootSaga() {
    yield all([
        productsRead(),
        productsUpdate()
    ])
}
