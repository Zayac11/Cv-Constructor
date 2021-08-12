const SET_SECTION = 'SET_SECTION'
const UPDATE_SECTION = 'UPDATE_SECTION'
const DELETE_SECTION = 'DELETE_SECTION'
const ADD_LINE = 'ADD_LINE'
const DELETE_LINE = 'DELETE_LINE'

let initialState = {
    CV: [
        {id: 228, type: 'text', message: `| hobby | match |
| :------: | :-----------: |
| games | ✔ |
| sing song | ✔ |
| js | ✔ |`},
        {id: 322, type: 'title', message: 'Тайтлец!'},
        {id: 112, type: 'subtitle', message: 'Субботний Тайтлец!'},
        {id: 911, type: 'marked_list', list: [
                {message: 'Ммммм', name: 'list0'},
                {message: 'Геее ггггей', name: 'list1'}
            ]},
        {id: 633, type: 'link', list: [
                {link: 'https://vk.com/alexgeniusman', title: 'воконтактик', name: 'list0'},
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
                case 'link':
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
                                                    link: action.content.link,
                                                    title: action.content.title,
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
        case ADD_LINE:
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
        case DELETE_LINE:
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
export const addLine = (id) => ({type: ADD_LINE, id})
export const deleteLine = (content) => ({type: DELETE_LINE, content})

export const getProjectData = (projectId, private_or_union) => { //Получение информации о проекте
    return async (dispatch) => {
        try {

        }
        catch(error) {

        }
    }
}

export default editorReducer
