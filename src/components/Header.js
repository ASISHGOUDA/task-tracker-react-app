import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
    const location = useLocation()
    
 return (
        <header className='haeder'>
            <h1>{title}</h1>
           {location.pathname === '/' && ( <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick= {onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS 
//const headingStyle = {
  //  color: 'red', 
  //  backgroundColor: 'black'
//}
export default Header
