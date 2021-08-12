import React from 'react'
import s from './EditTitle.module.scss'
import cross from '../../../assets/images/cross.svg'

const EditTitle = (props) => {
    return (
        <>
            <div className={'editTitle'}>
                Заголовок
            </div>
            <div className={s.container}>
                <input className={s.title} id={props.id} value={props.message || ''} type='text'
                    onChange={(e) => props.onUpdateSection({
                    message: e.target.value,
                    type:'title',
                    id: props.id
                })} />
                <button className={s.cross} onClick={() => props.onDeleteSection(props.id)}>
                    <img src={cross} alt='cross' />
                </button>
            </div>
        </>
    )
}

export default EditTitle