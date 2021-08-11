import React from 'react'
import s from './Editor.module.scss'
import Textarea from '../../common/sections/Textarea/Textarea'

const Editor = (props) => {


    return (
        <>
            <div className={s.editor}>
                <div>
                    {
                        props.CV && props.CV.length > 0 &&
                            props.CV.map((cv, index) => {
                                return (
                                    <div className={s.item} key={index}>
                                        {
                                            cv.type === 'text' ? (
                                                <Textarea id={cv.id} message={cv.message} onUpdateSection={props.onUpdateSection} />
                                            ) : <></>
                                        }
                                    </div>
                                )
                            })
                    }
                </div>

                <div className={s.buttons}>
                    <button name={'text'} onClick={() => props.addSection('text')}>текст</button>
                </div>
            </div>
        </>
    )
}

export default Editor