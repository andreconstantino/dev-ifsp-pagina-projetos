import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const CardComment = ({ description, img, name, role }) => {
    return (
        <div className='comment-container'>
            <p className='comment-description'>{description}</p>
            <div className='comment-info'>
                <img src={img} className='comment-img' />
                <div>
                    <p className='dev-name'>{name}</p>
                    <p className='dev-function'>{role}</p>
                </div>
            </div>
        </div>
    )
}

CardComment.PropTypes = {
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
}

export default CardComment

