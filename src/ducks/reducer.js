import axios from 'axios';

const initialState = {
    user: {},
    filteredPuzzles: [],
    newHomePuzzles: [],
    saleHomePuzzles: [],
    homeAccessories: [],
    allNewPuzzles: [],
    allSalePuzzles: [],
    allAccessories: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const GET_PUZZLES = 'GET_PUZZLES';
const GET_NEW_HOME_PUZZLES = 'GET_NEW_HOME_PUZZLES';
const GET_NEW_PUZZLES = 'GET_NEW_PUZZLES';



export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            return res.data
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
                console.log(response)
                return response.data
            })
    } else {
        puzzles = axios.get(`/api/results`)
            .then(response => {
                console.log(response)
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


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { filteredPuzzles: action.payload })
        case GET_NEW_HOME_PUZZLES + '_FULFILLED':
            return Object.assign({}, state, { newHomePuzzles: action.payload })
        default:
            return state;
    }
}