import React from 'react'
import Result from './Result'
import {useSelector} from 'react-redux'

const ResultContainer = () => {

    const CV = useSelector(state => state.editor.CV)

    return (
        <>
            <Result CV={CV}/>
        </>
    )
}

export default ResultContainer