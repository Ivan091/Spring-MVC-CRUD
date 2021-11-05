import {titleAPI} from "../../api/title";

const UPDATE_ALL = 'titles/UPDATE_ALL'
const DELETE = 'titles/DELETE'

let initState = {
    titles: [],
}

const titlesReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ALL: {
            return {...state, titles: action.titles}
        }
        case DELETE: {
            return {...state, titles: state.titles.filter(t => t.titleId !== action.titleId)}
        }
        default :
            return state
    }
}

export const titleActionCreator = {
    updateAll: (titles) => ({type: UPDATE_ALL, titles}),
    delete: (titleId) => ({type: DELETE, titleId}),
}

const refresh = async (dispatch) => {
    const titles = await titleAPI.findAll()
    dispatch(titleActionCreator.updateAll(titles))
}

export const titleThunkCreator = {
    requestAll: () => async (dispatch) => {
        await refresh(dispatch)
    },
    delete: (id) => async (dispatch) => {
        await titleAPI.delete(id)
        dispatch(titleActionCreator.delete(id))
    },
    update: (title) => async (dispatch) => {
        await titleAPI.update(title)
        await refresh(dispatch)
    },
    add: (title) => async (dispatch) => {
        await titleAPI.add(title)
        await refresh(dispatch)
    },
    findById: (id) => async (dispatch) => await titleAPI.findById(id),
    findAllBetween: (firstDate, secondDate) => async (dispatch) => {
        const titlesBetween = await titleAPI.findAllBetween(firstDate, secondDate)
        dispatch(titleActionCreator.updateAll(titlesBetween))
    }
}

export default titlesReducer