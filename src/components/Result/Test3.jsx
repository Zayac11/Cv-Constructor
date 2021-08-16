import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import akm from '../../assets/Подольский_ИНБО-04-19_трпп_4.pdf'

const Test3 = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const nextPage = (e) => {
        e.preventDefault()
        setPageNumber(pageNumber + 1)
    }
    const prevPage = (e) => {
        e.preventDefault()
        setPageNumber(pageNumber - 1)
    }

    return (
        <div style={{paddingBottom: '200px', width: '100%', height: '1000px'}}>
            <Document
                file={akm}
                height={700}
                renderMode={'canvas'}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page height={700} pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            <button disabled={pageNumber === numPages} onClick={nextPage}>Вперед</button>
            <button disabled={pageNumber === 1} onClick={prevPage}>Назад</button>
        </div>
    )
}

export default Test3