import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

const Test = () => {

    const [value, setValue] = useState('')
    let history = useHistory()

    return (
        <div>
            {/*<textarea name='name1' value={value} onChange={(e) => setValue(e.target.value)} />*/}
            {/*<hr/>*/}
            {/*<ReactMarkdown remarkPlugins={[gfm]} children={value} />*/}

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

                </>

            </svg>

        </div>
    )
}

export default Test