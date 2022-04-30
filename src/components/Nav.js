import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{ faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({setLibraryStatus, libraryStatus}) => {
    return(
        <nav>
            <h1>Tesi SUSY </h1>
               
            <button onClick={ () => setLibraryStatus(!libraryStatus)}>
                Libreria
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    );
}

export default Nav