import React from 'react'
import Editor from './Editor'
import {useDispatch, useSelector} from 'react-redux'
import {setSection, updateSection} from '../../redux/editor-reducer'

const EditorContainer = () => {

    const dispatch = useDispatch()

    const CV = useSelector(state => state.editor.CV)

    const addSection = (section) => {
        dispatch(setSection({type: section, id: Math.random() * (9999999 - 1) + 1}))
    }

    const onUpdateSection = (content) => {
        dispatch(updateSection(content))
    }

    return (
        <>
            <Editor CV={CV} addSection={addSection} onUpdateSection={onUpdateSection} />
        </>
    )
}

export default EditorContainer