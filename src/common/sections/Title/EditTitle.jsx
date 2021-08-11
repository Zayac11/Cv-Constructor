import React from 'react'
import s from './EditTitle.module.scss'

const EditTitle = (props) => {
    return (
        <>
            <input className={s.title} id={props.id} value={props.message} type='text'
                onChange={(e) => props.onUpdateSection({
                message: e.target.value,
                type:'title',
                id: props.id
            })} />
        </>
    )
}

export default EditTitle