import React from 'react'
import s from './EditMarkedList.module.scss'
import cross from '../../../assets/images/cross.svg'
import cl from 'classnames'

const EditMarkedList = (props) => {
    return (
        <div className={s.container}>

            <div className={'editTitle'}>
                Маркированный список
            </div>

            {
                props.list && props.list.length > 0 &&
                    props.list.map((item, index) => {
                        return (
                            <div className={s.inputContainer} key={index}>
                                <input className={s.input} type='text' value={item.message} name={item.name}
                                       onChange={(e) => props.onUpdateSection({
                                    message: e.target.value,
                                    name: item.name,
                                    type:'marked_list',
                                    id: props.id,
                                })} />

                                <button className={cl(s.cross, s.inputCross)} onClick={() => props.onDeleteLine({name: item.name, id: props.id})}>
                                    <img src={cross} alt='cross' />
                                </button>
                            </div>
                        )
                    })
            }

            <div className={s.footer}>
                <button className={s.addBtn} onClick={() => props.onAddLine(props.id)}>Добавить еще</button>

                <button className={s.cross} onClick={() => props.onDeleteSection(props.id)}>
                    <img src={cross} alt='cross' />
                </button>
            </div>

        </div>
    )
}

export default EditMarkedList