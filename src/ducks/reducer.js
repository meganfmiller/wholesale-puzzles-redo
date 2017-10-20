import axios from 'axios';

const initialState = {
    user: {},
    filteredPuzzles: [],
    newHomePuzzles: [],
    saleHomePuzzles: [],
    homeAccessory: [],
    allNewPuzzles: [],
    allSalePuzzles: [],
    allAccessories: [],
    product: [],
    cart: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PUZZLES = 'GET_PUZZLES';
const GET_NEW_HOME_PUZZLES = 'GET_NEW_HOME_PUZZLES';
const GET_NEW_PUZZLES = 'GET_NEW_PUZZLES';
const GET_SALE_HOME_PUZZLES = 'GET_SALE_HOME_PUZZLES';
const GET_SALE_PUZZLES = 'GET_SALE_PUZZLES';
const GET_HOME_ACCESSORY = 'GET_HOME_ACCESSORY';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';



export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(response => {
            return response.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getPuzzles(category, value) {
    var puzzles;
    if (category && value) {
        puzzles = axios.get(`/api/results?${category}=${value}`)
            .then(response => {
                // console.log(response)
                return response.data
            })
    } else {
        puzzles = axios.get(`/api/results`)
            .then(response => {
                // console.log(response)
                return response.data
            })
    }
    return {
        type: GET_PUZZLES,
        payload: puzzles
    }

}

export function get3NewPuzzles() {
    var puzzles;
    puzzles = axios.get('/api/results/3new')
        .then(response => {
            // console.log(response.data)
            return response.data
        })

    return {
        type: GET_NEW_HOME_PUZZLES,
        payload: puzzles
    }
}

export function getNewPuzzles() {
    // console.log('hello please')
    var puzzles;
    puzzles = axios.get('/api/results/new')
    .then(response => {
        
        return response.data
    }).catch((err) => console.log(err))

    return {
        type: GET_NEW_PUZZLES,
        payload: puzzles
    }
}

export function get3SalePuzzles() {
    var puzzles;
    puzzles = axios.get('/api/results/3sale')
    .then(response => {
        return response.data
    })
    return {
        type: GET_SALE_HOME_PUZZLES,
        payload: puzzles
    }
}

export function getSalePuzzles() {
    var puzzles;
    puzzles = axios.get('/api/results/sale')
    .then(response => {
        return response.data
    })
    return {
        type: GET_SALE_PUZZLES,
        payload: puzzles
    }
}

export function get1Accessory() {
    var accessory;
    accessory = axios.get('/api/results/1accessory')
    .then(response => {
        return response.data
    })
    return {
        type: GET_HOME_ACCESSORY,
        payload: accessory
    }
}

export function getProduct(item) {
    var puzzle;
    puzzle = axios.get(`/api/results/${item}`)
    .then(response => {
        return response.data
    })

    return {
        type: GET_PRODUCT,
        payload: puzzle
    }
}

export function addtoCart(product) {
    console.log(product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { filteredPuzzles: action.payload })
        case GET_NEW_HOME_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { newHomePuzzles: action.payload })
        case GET_NEW_PUZZLES + '_FULFILLED':
        // console.log(action.payload)
            return Object.assign({}, state, {allNewPuzzles: action.payload})
        case GET_SALE_HOME_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, {saleHomePuzzles: action.payload})
        case GET_SALE_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, {allSalePuzzles: action.payload})
        case GET_HOME_ACCESSORY + '_FULFILLED':
            return Object.assign({}, state, {homeAccessory: action.payload})
        case GET_PRODUCT + '_FULFILLED':
            return Object.assign({}, state, {product: action.payload})
        case ADD_TO_CART:
            return Object.assign({}, state, {cart: action.payload})
        default:
            return state;
    }
}