import React from 'react'
import s from './EditTextarea.module.scss'
import cross from '../../../assets/images/cross.svg'

const EditTextarea = (props) => {
    return (
        <div className={s.container}>
            <textarea className={s.textarea} id={props.id} value={props.message}
                      onChange={(e) => props.onUpdateSection({
                          message: e.target.value,
                          type:'text',
                          id: props.id
                      })}
                      name='text' />
            <button className={s.cross} onClick={() => props.onDeleteSection(props.id)}>
                <img src={cross} alt='cross' />
            </button>
        </div>
    )
}

export default EditTextarea