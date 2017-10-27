import axios from 'axios';

const initialState = {
    user: {},
    filterOpen: false,
    puzzleFinder: [],
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
const SLIDE = 'SLIDE'
const GET_PUZZLES = 'GET_PUZZLES';
const GET_NEW_HOME_PUZZLES = 'GET_NEW_HOME_PUZZLES';
const GET_NEW_PUZZLES = 'GET_NEW_PUZZLES';
const GET_SALE_HOME_PUZZLES = 'GET_SALE_HOME_PUZZLES';
const GET_SALE_PUZZLES = 'GET_SALE_PUZZLES';
const GET_HOME_ACCESSORY = 'GET_HOME_ACCESSORY';
const GET_ACCESSORIES = 'GET_ACCESSORIES';
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const SUBMIT = 'SUBMIT';



export function getUserInfo() {
    // console.log('sup dude')
    const userData = axios.get('/auth/me')
        .then(response => {
            console.log(response.data)
            return response.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function slide(flag) {
    return {
        type: SLIDE,
        payload: !flag
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

export function getAccessories() {
    var accessories;
    accessories = axios.get('/api/results/accessories')
        .then(response => {
            return response.data
        })
    return {
        type: GET_ACCESSORIES,
        payload: accessories
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

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}

export function submit(obj) {
    var filter = [obj].map((e) => {
        console.log(e.brand)
        var arr = [];
        e.pieces ? arr.push(e.pieces) : arr.push(false);
        e.theme ? arr.push(e.theme) : arr.push(false);
        e.brand ? arr.push(e.brand) : arr.push(false);
        e.artist ? arr.push(e.artist) : arr.push(false);
        // console.log(arr);
        return arr;
    })
    // console.log(filter[0])
    var keys = Object.keys(obj)
    // console.log(keys)
    var baseURL = '/api/finder';
    var acc = '';
    var count = 0
    filter[0].map((e, i) => {
        
        if (e && i === 0 && count) {
            return acc += `&pieces=${filter[0][0]}`
        } else if (e && i === 0) {
            count++
            return acc += `?pieces=${filter[0][0]}`
        }
        if (e && i === 1 && count) {
            return acc += `&theme=${filter[0][1]}`
        } else if (e && i === 1){
            count++
            return acc += `?theme=${filter[0][1]}`
        }
        if (e && i === 2 && count) {
            return acc += `&brand=${filter[0][2]}`
        } else if (e && i === 2){
            count++
            return acc += `?brand=${filter[0][2]}`
        }
        if (e && i === 3 && count) {
            return acc += `&artist=${filter[0][3]}`
        } else if (e && i === 3){
            count++
            return acc += `?artist=${filter[0][3]}`
        }
    })
    // console.log(acc)
    var thing = `${baseURL}${acc}`
    // console.log(thing)
    var submit;
    submit = axios.get(`${baseURL}${acc}`)
        .then(response => {
            console.log(response.data)
            return response.data
        })
    return {
        type: SUBMIT,
        payload: submit
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, { user: action.payload })
        case SLIDE:
            return Object.assign({}, state, { filterOpen: action.payload })
        case GET_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { filteredPuzzles: action.payload })
        case GET_NEW_HOME_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { newHomePuzzles: action.payload })
        case GET_NEW_PUZZLES + '_FULFILLED':
            // console.log(action.payload)
            return Object.assign({}, state, { allNewPuzzles: action.payload })
        case GET_SALE_HOME_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { saleHomePuzzles: action.payload })
        case GET_SALE_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { allSalePuzzles: action.payload })
        case GET_HOME_ACCESSORY + '_FULFILLED':
            return Object.assign({}, state, { homeAccessory: action.payload })
        case GET_ACCESSORIES + '_FULFILLED':
            return Object.assign({}, state, { allAccessories: action.payload })
        case GET_PRODUCT + '_FULFILLED':
            return Object.assign({}, state, { product: action.payload })
        case ADD_TO_CART:
            var newCart = state.cart.slice();
            newCart.push(action.payload);
            return Object.assign({}, state, { cart: newCart });
        case REMOVE_FROM_CART:
            newCart = state.cart.slice();
            newCart.splice(action.payload, 1);
            return Object.assign({}, state, { cart: newCart });
        case SUBMIT:
            return Object.assign({}, state, { puzzleFinder: action.payload });
        default:
            return state;
    }
}