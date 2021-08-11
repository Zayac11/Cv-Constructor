import React from 'react'
import s from './Editor.module.scss'
import EditTextarea from '../../common/sections/Textarea/EditTextarea'
import EditTitle from '../../common/sections/Title/EditTitle'
import EditSubtitle from '../../common/sections/Subtitle/EditSubtitle'
import EditMarkedList from '../../common/sections/MarkedList/EditMarkedList'

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
                                            ) : cv.type === 'subtitle' ? (
                                                <EditSubtitle id={cv.id} message={cv.message} onUpdateSection={props.onUpdateSection} onDeleteSection={props.onDeleteSection} />
                                            ) : cv.type === 'marked_list' ? (
                                                <EditMarkedList id={cv.id} list={cv.list} onUpdateSection={props.onUpdateSection} onDeleteSection={props.onDeleteSection} onAddMarkedLine={props.onAddMarkedLine} onDeleteMarkedLine={props.onDeleteMarkedLine} />
                                            )
                                                : <></>
                                        }
                                    </div>
                                )
                            })
                    }
                </div>

                <div className={s.buttons}>
                    <button className={s.button} onClick={() => props.addSection({
                        type: 'text', id: Math.random() * (9999999 - 1) + 1, message: ''
                    })}>Текст</button>
                    <button className={s.button} onClick={() => props.addSection({
                        type: 'title', id: Math.random() * (9999999 - 1) + 1, message: ''
                    })}>Заголовок</button>
                    <button className={s.button} onClick={() => props.addSection({
                        type: 'subtitle', id: Math.random() * (9999999 - 1) + 1, message: ''
                    })}>Подзаголовок</button>
                    <button className={s.button} onClick={() => props.addSection({
                        type: 'marked_list', id: Math.random() * (9999999 - 1) + 1,
                        list: [{message: '', name: 'list0'}]
                    })}>Список</button>
                </div>
            </div>
        </>
    )
}

export default Editor