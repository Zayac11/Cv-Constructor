import React from 'react'
import s from './Container.module.scss'
import EditorContainer from './Editor/EditorContainer'
import ResultContainer from './Result/ResultContainer'
import Test from './Result/Test'
import Test2 from './Result/Test2'
import Test3 from './Result/Test3'


const Container = () => {
    return (
        <div className='outer'>
            <div className='container'>
                <div className={s.container}>
                    {/*<EditorContainer />*/}

                    <ResultContainer />
                </div>
                {/*<Test />*/}
                {/*<Test2 />*/}
                <Test3 />
            </div>
        </div>
    )
}

export default Container