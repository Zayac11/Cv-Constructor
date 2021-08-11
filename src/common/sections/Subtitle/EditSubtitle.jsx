import React from 'react'
import s from './EditSubtitle.module.scss'
import cross from '../../../assets/images/cross.svg'

const EditSubtitle = (props) => {
    return (
        <div className={s.container}>
            <input className={s.title} id={props.id} value={props.message || ''} type='text'
                onChange={(e) => props.onUpdateSection({
                message: e.target.value,
                type:'subtitle',
                id: props.id
            })} />
            <button className={s.cross} onClick={() => props.onDeleteSection(props.id)}>
                <img src={cross} alt='cross' />
            </button>
        </div>
    )
}

export default EditSubtitle