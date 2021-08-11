import React from 'react'
import s from './Result.module.scss'

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