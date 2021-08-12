import React from 'react'
import s from './EditLink.module.scss'
import cross from '../../../assets/images/cross.svg'
import cl from 'classnames'

const EditLink = (props) => {
    return (
        <div className={s.container}>

            <div className={'editTitle'}>
                Ссылки
            </div>

            {
                props.list && props.list.length > 0 &&
                props.list.map((item, index) => {

                    return (
                        <div className={s.inputContainer} key={index}>
                            <input className={s.input} type='text' value={item.title} name={item.name} placeholder={'Название'}
                                   onChange={(e) => props.onUpdateSection({
                                       title: e.target.value,
                                       link: item.link,
                                       name: item.name,
                                       type: 'link',
                                       id: props.id,
                                   })} />
                            <input className={s.input} type='text' value={item.link} name={item.name} placeholder={'Ссылка'}
                                   onChange={(e) => props.onUpdateSection({
                                       link: e.target.value,
                                       title: item.title,
                                       name: item.name,
                                       type: 'link',
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

export default EditLink