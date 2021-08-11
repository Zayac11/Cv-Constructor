import React from 'react'
import s from './ResultMarkedList.module.scss'

const ResultMarkedList = ({list}) => {
    return (
        <div className={s.marked}>
            {
                list && list.length > 0 &&
                    <ul className={s.list}>
                        {
                            list.map((item, index) => {
                                return (
                                    <li className={s.item} key={index}>
                                        {item.message}
                                    </li>
                                )
                            })
                        }
                    </ul>

            }
        </div>
    )
}

export default ResultMarkedList