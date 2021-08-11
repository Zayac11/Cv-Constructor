import React from 'react'
import s from './Container.module.scss'
import EditorContainer from './Editor/EditorContainer'
import ResultContainer from './Result/ResultContainer'

const Container = () => {
    return (
        <div className='outer'>
            <div className='container'>
                <div className={s.container}>
                    <EditorContainer />

                    <ResultContainer />
                </div>
            </div>
        </div>
    )
}

export default Container