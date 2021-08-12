import React from 'react'

const Test = () => {

    return (
        <div>
            <svg width='500' height='500'
                 viewBox='0 0 500 500'
                 xmlns='http://www.w3.org/2000/svg'>

                <>
                    <text x='0' y='0' textAnchor='start'>
                        <tspan dominantBaseline="inherit" textAnchor='inherit' dy='1rem' x='0'>Текст</tspan>
                    </text>
                    <rect fill={'green'} x='0' y='20' width='50' height='50' onClick={() => {
                        window.location =
                            ('https://vk.com/alexgeniusman')
                    }} />
                    <path d="m 50 45 l 50 0" fill="transparent" stroke="black"/>
                </>

            </svg>

        </div>
    )
}

export default Test