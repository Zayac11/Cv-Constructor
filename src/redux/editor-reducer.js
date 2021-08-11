const SET_SECTION = 'SET_SECTION'
const UPDATE_SECTION = 'UPDATE_SECTION'

let initialState = {
    CV: [
        {id: 322, type: 'title', message: 'Тайтлец!'},
        {id: 112, type: 'subtitle', message: 'Субботний Тайтлец!'},
        {id: 228, type: 'text', message: 'Всем ку!'},
    ], //резюме

}

const editorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECTION:
            return {
                ...state,
                CV: [...state.CV, action.content]
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
                // case 'title':
                //     return {
                //         ...state,
                //         CV: state.CV.map(cv => action.content.id === cv.id //мапаем массив cv и ищем совпадение по айдишнику
                //             ?
                //             (
                //                 {
                //                     ...cv,
                //                     message: action.content.message, //Меняем мессадж
                //                 }
                //             )
                //             : ({
                //                 ...cv //иначе просто делаем копию объекта, без изменений
                //             }) )
                //     }
                default: return state
            }
        default:
            return state;
    }
}

export const setSection = (content) => ({type: SET_SECTION, content})
export const updateSection = (content) => ({type: UPDATE_SECTION, content})

export const getProjectData = (projectId, private_or_union) => { //Получение информации о проекте
    return async (dispatch) => {
        try {

        }
        catch(error) {

        }
    }
}

export default editorReducer
