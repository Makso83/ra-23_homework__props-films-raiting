import React from 'react'
import PropTypes from 'prop-types'
import Star from '../Star/Star'
import shortid from 'shortid'

const Stars = (props) => {
    const isValid = () => ((props.count >0) && (props.count < 6));
    const starArray = [];
    if (isValid) {
        for (let i = 0; i < props.count; i ++) {
            starArray.push(<Star key={shortid.generate()}/>)
        }
    }

    return (
        <ul className="card-body-stars u-clearfix">
            {isValid && starArray}
        </ul>
    )
}

// Значение по умолчанию

Stars.defaultProps = {
    count: 0
}

Stars.propTypes = {

    count: PropTypes.number,
}

export default Stars;
