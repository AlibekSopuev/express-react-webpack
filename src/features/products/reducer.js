import {createSymbiote} from 'redux-symbiote'

const namespace = 'products'

const initialState = {
    list: [],
    readProduct: {},
    isLoading: false,
    error: ''
}

const commonRequest = (state, payload) => {
    return {
        ...state,
        payload,
        progress: true,
        isLoading: true
    }
}

const commonFinish = (state, payload) => {
    return {
        ...state,
        progress: false,
        isLoading: false
    }
}

const commonFail = (state, payload) => {
    return {
        ...state,
        error: payload.error,
        progress: false,
        isLoading: false
    }
}

const symbiotes = {
    getProductsList: {
        request: commonRequest,
        finish: (state, payload) => {
            return {
                ...state,
                list: [...payload.data],
                error: '',
                progress: false,
                isLoading: false
            }
        },
        fail: commonFail
    },
    create: {
        request: commonRequest,
        finish: commonFinish,
        fail: commonFail
    },
    read: {
        request: commonRequest,
        finish: (state, payload) => {
            return {
                ...state,
                readProduct: {...payload},
                error: '',
                progress: false,
                isLoading: false
            }
        },
        fail: commonFail
    },
    update: {
        request: commonRequest,
        finish: commonFinish,
        fail: commonFail
    },
    delete: {
        request: commonRequest,
        finish: commonFinish,
        fail: commonFail
    },
    filter: {
        filter: (state, payload) => {
            const {searchText, stocked} = payload;
            let filteredProducts = [...state.list].filter((product) => {
                if (!stocked) {
                    return product.name.includes(searchText)
                }
                return product.stocked && product.name.includes(searchText)
            })
            return {
                ...state,
                list: [...filteredProducts]
            }
        }
    },
}

export const {actions: productsActions, reducer: productsStore} = createSymbiote(initialState, symbiotes, namespace)
