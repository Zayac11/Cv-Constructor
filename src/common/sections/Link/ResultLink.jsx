import React from 'react'
import s from './ResultLink.module.scss'

const ResultMarkedList = ({list}) => {
    return (
        <div className={s.marked}>
            {
                list && list.length > 0 &&
                    <div className={s.list}>
                        {
                            list.map((item, index) => {
                                return (
                                    <a href={item.link} target={'_blank'} rel={'noreferrer noopener'} className={s.item} key={index}>
                                        {item.title}
                                    </a>
                                )
                            })
                        }
                    </div>

            }
        </div>
    )
}

export default ResultMarkedList