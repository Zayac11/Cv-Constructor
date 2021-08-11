import React from 'react'
import s from './Container.module.scss'
import Result from './Result/Result'
import EditorContainer from './Editor/EditorContainer'

const Container = () => {
    return (
        <div className='outer'>
            <div className='container'>
                <div className={s.container}>
                    <EditorContainer />

                    <Result />
                </div>
            </div>
        </div>
    )
}

export default Container