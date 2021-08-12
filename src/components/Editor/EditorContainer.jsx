import React from 'react'
import Editor from './Editor'
import {useDispatch, useSelector} from 'react-redux'
import {addLine, deleteLine, deleteSection, setSection, updateSection} from '../../redux/editor-reducer'

const EditorContainer = () => {

    const dispatch = useDispatch()

    const CV = useSelector(state => state.editor.CV)

    const addSection = (content) => {
        dispatch(setSection(content))
    }
    const onAddLine = (id) => {
        dispatch(addLine(id))
    }
    const onDeleteLine = (content) => {
        dispatch(deleteLine(content))
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
                    onUpdateSection={onUpdateSection} onAddLine={onAddLine}
                    onDeleteLine={onDeleteLine}
            />
        </>
    )
}

export default EditorContainer