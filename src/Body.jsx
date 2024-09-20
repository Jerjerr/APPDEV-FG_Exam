import PropTypes from 'prop-types'
export default function Body(props) {
    return(
        <div className="person">
        <p><strong>Model: KB X1000</strong> </p>
        <p>{(props.champs).toUpperCase()}</p>
        <p>The KB-X1000 is a high-performance mechanical keyboard designed 
            for gamers, professionals, and everyday users who demand precision and comfort. 
            It features customizable RGB backlighting, durable mechanical switches, and programmable 
            keys to enhance your typing and gaming experience.</p>
        </div>
        
    )
}

Body.propTypes = {
    name: PropTypes.string,
    champs: PropTypes.string,
    imgSrc: PropTypes.string
}

Body.defaultProps = {
    name: "Goat",
    champs: "unknown",
    age: 40
}