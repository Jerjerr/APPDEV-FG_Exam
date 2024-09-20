import PropTypes from 'prop-types'
export default function BodyImg(props) {
    return(
        <div className="person">
        <img src={props.imgSrc} alt="profile-icon" />
        </div>
    )
}

BodyImg.propTypes = {
    imgSrc: PropTypes.string
}
