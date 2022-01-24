import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

  
const name = 'David'


const Welcome = ({name, dodo}) => {
    return (
        <div>
            Welcome, {name} + {dodo}
            <FontAwesomeIcon icon="check-square" />
            <FontAwesomeIcon icon={["fab", "microsoft"]} />

        </div>
    )
}

Welcome.defaultProps={
    name: `Shlomo Ben Chaim`
}

Welcome.propTypes={
    name:propTypes.string
}
export {Welcome} 

export let firstName = 'Yossef';
