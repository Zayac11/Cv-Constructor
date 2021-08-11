import React from 'react'
import s from './EditSubtitle.module.scss'

const EditSubtitle = (props) => {
    return (
        <>
            <input className={s.title} id={props.id} value={props.message} type='text'
                onChange={(e) => props.onUpdateSection({
                message: e.target.value,
                type:'subtitle',
                id: props.id
            })} />
        </>
    )
}

export default EditSubtitle