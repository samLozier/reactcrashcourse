import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
    const onClick = () => {
        console.log("Click")
    }
    const location = useLocation()
    return (
        <header className={'header'}>
            <h1 s> {title}</h1>
            {location.pathname === '/' && (<Button
                color={showAdd ? 'red': 'green'}
                text={showAdd ? 'Close': 'Add'}
                onClick={onAdd}
            />)}

        </header>
    )
}

Header.defaultProps = {
    title: 'sams task tracker'
}

// Typecheck setup without typescript
Header.propTypes = {
    title: PropTypes.string
}
export default Header