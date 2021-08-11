import './App.scss'
import './common/style.scss'
import {Switch} from 'react-router-dom'
import Container from './components/Container'

const App = () => {
    return (
        <>
            <Switch>
                <Container />
            </Switch>
        </>
    )
}

export default App
