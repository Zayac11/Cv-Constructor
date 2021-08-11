import React from 'react'
import Editor from './Editor'
import {useDispatch, useSelector} from 'react-redux'
import {addMarkedLine, deleteMarkedLine, deleteSection, setSection, updateSection} from '../../redux/editor-reducer'

const EditorContainer = () => {

    const dispatch = useDispatch()

    const CV = useSelector(state => state.editor.CV)

    const addSection = (content) => {
        dispatch(setSection(content))
    }
    const onAddMarkedLine = (id) => {
        dispatch(addMarkedLine(id))
    }
    const onDeleteMarkedLine = (content) => {
        dispatch(deleteMarkedLine(content))
    }

    const onUpdateSection = (content) => {
        dispatch(updateSection(content))
    }
    const onDeleteSection = (id) => {
        dispatch(deleteSection(id))
    }

    return (
        <>
            <Editor CV={CV} onDeleteSection={onDeleteSection} addSection={addSection}
                    onUpdateSection={onUpdateSection} onAddMarkedLine={onAddMarkedLine}
                    onDeleteMarkedLine={onDeleteMarkedLine}
            />
        </>
    )
}

export default EditorContainer