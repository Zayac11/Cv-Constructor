import React from 'react'
import s from './Editor.module.scss'
import EditTextarea from '../../common/sections/Textarea/EditTextarea'
import EditTitle from '../../common/sections/Title/EditTitle'
import EditSubtitle from '../../common/sections/Subtitle/EditSubtitle'

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
                                                <EditTextarea id={cv.id} message={cv.message} onUpdateSection={props.onUpdateSection} onDeleteSection={props.onDeleteSection} />
                                            ) : cv.type === 'title' ? (
                                                <EditTitle id={cv.id} message={cv.message} onUpdateSection={props.onUpdateSection} onDeleteSection={props.onDeleteSection} />
                                            ): cv.type === 'subtitle' ? (
                                                <EditSubtitle id={cv.id} message={cv.message} onUpdateSection={props.onUpdateSection} onDeleteSection={props.onDeleteSection} />
                                            )
                                                : <></>
                                        }
                                    </div>
                                )
                            })
                    }
                </div>

                <div className={s.buttons}>
                    <button className={s.button} onClick={() => props.addSection('text')}>Текст</button>
                    <button className={s.button} onClick={() => props.addSection('title')}>Заголовок</button>
                    <button className={s.button} onClick={() => props.addSection('subtitle')}>Подзаголовок</button>
                </div>
            </div>
        </>
    )
}

export default Editor