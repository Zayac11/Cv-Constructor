import React from 'react'
import s from './Result.module.scss'
import ResultMarkedList from '../../common/sections/MarkedList/ResultMarkedList'

const Result = ({CV}) => {
    return (
        <>
            <div className={s.result}>

                {
                    CV && CV.length > 0 &&
                        CV.map((cv,index) => {
                            return (
                                <div key={index} className={s.item}>
                                    {
                                        cv.type === 'text' ? (
                                            <div className={s.text}>
                                                {cv.message}
                                            </div>
                                        ) : cv.type === 'title' ? (
                                            <div className={s.title}>
                                                {cv.message}
                                            </div>
                                        ) : cv.type === 'subtitle' ? (
                                            <div className={s.subtitle}>
                                                {cv.message}
                                            </div>
                                        ) : cv.type === 'marked_list' ? (
                                            <ResultMarkedList list={cv.list} />
                                        )
                                            : <></>
                                    }
                                </div>
                            )
                        })
                }

            </div>

        </>
    )
}

export default Result