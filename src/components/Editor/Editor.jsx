import React from 'react'
import s from './Editor.module.scss'

const Editor = (props) => {


    return (
        <>
            <div className={s.editor}>
                <div>
                    {
                        props.CV && props.CV.length &&
                            props.CV.map((cv, index) => {
                                return (

                                        <div key={index}>
                                            {
                                                cv.type === 'text' ? (
                                                    <textarea id={cv.id} value={cv.message}
                                                              onChange={(e) => props.onUpdateSection({
                                                                  message: e.target.value,
                                                                  type:'text',
                                                                  id: cv.id
                                                              })}
                                                              name='text' />
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