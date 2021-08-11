const SET_SECTION = 'SET_SECTION'
const UPDATE_SECTION = 'UPDATE_SECTION'
const DELETE_SECTION = 'DELETE_SECTION'
const ADD_MARKED_LINE = 'ADD_MARKED_LINE'
const DELETE_MARKED_LINE = 'DELETE_MARKED_LINE'

let initialState = {
    CV: [
        {id: 322, type: 'title', message: 'Тайтлец!'},
        {id: 112, type: 'subtitle', message: 'Субботний Тайтлец!'},
        {id: 228, type: 'text', message: 'Всем ку!'},
        {id: 911, type: 'marked_list', list: [
                {message: 'Ммммм', name: 'list0'},
                {message: 'Геее ггггей', name: 'list1'}
            ]},
    ], //резюме

}

const editorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION:
            return {
                ...state,
                CV: [...state.CV, action.content]
            }
        case DELETE_SECTION:
            return {
                ...state,
                CV: state.CV.filter(cv => cv.id !== action.id)
            }
        case UPDATE_SECTION:
            switch (action.content.type) {
                case 'text':
                case 'subtitle':
                case 'title':
                    return {
                        ...state,
                        CV: state.CV.map(cv => action.content.id === cv.id //мапаем массив cv и ищем совпадение по айдишнику
                            ?
                            (
                                {
                                    ...cv,
                                    message: action.content.message, //Меняем мессадж
                                }
                            )
                            : ({
                                ...cv //иначе просто делаем копию объекта, без изменений
                            }) )
                    }
                case 'marked_list':

                    return {
                        ...state,
                        CV: state.CV.map(cv => action.content.id === cv.id //мапаем массив cv и ищем совпадение по айдишнику
                            ?
                            (
                                {
                                    ...cv,
                                    list: cv.list.map((list) => {
                                        return (
                                            action.content.name === list.name
                                                ?
                                                ({
                                                    ...list,
                                                    message: action.content.message
                                                })
                                                :
                                                ({
                                                    ...list
                                                })
                                        )
                                        }
                                    )
                                }
                            )
                            : ({
                                ...cv //иначе просто делаем копию объекта, без изменений
                            }) )
                    }

                default:
                    return state
            }
        case ADD_MARKED_LINE:
            return {
                ...state,
                CV: state.CV.map(cv => action.id === cv.id //мапаем массив cv и ищем совпадение по айдишнику
                    ?
                    (
                        {
                            ...cv,
                            list: [...cv.list, {message: '', name: Math.random() * (9999999 - 1) + 1}]

                        }
                    )
                    : ({
                        ...cv //иначе просто делаем копию объекта, без изменений
                    }) )
            }
        case DELETE_MARKED_LINE:
            return {
                ...state,
                CV: state.CV.map(cv => action.content.id === cv.id //мапаем массив cv и ищем совпадение по айдишнику
                    ?
                    (
                        {
                            ...cv,
                            list: cv.list.filter(item =>  item.name !== action.content.name)
                        }
                    )
                    : ({
                        ...cv //иначе просто делаем копию объекта, без изменений
                    }) )
            }
        default:
            return state;
    }
}

export const setSection = (content) => ({type: SET_SECTION, content})
export const updateSection = (content) => ({type: UPDATE_SECTION, content})
export const deleteSection = (id) => ({type: DELETE_SECTION, id})
export const addMarkedLine = (id) => ({type: ADD_MARKED_LINE, id})
export const deleteMarkedLine = (content) => ({type: DELETE_MARKED_LINE, content})

export const getProjectData = (projectId, private_or_union) => { //Получение информации о проекте
    return async (dispatch) => {
        try {

        }
        catch(error) {

        }
    }
}

export default editorReducer
