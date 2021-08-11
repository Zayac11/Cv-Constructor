import React from 'react'
import s from './EditTextarea.module.scss'

const EditTextarea = (props) => {
    return (
        <>
            <textarea className={s.textarea} id={props.id} value={props.message}
                      onChange={(e) => props.onUpdateSection({
                          message: e.target.value,
                          type:'text',
                          id: props.id
                      })}
                      name='text' />
        </>
    )
}

export default EditTextarea