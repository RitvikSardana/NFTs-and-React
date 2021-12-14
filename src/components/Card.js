import React from 'react'
import wEth from '../assets/weth.png'
import './Card.css'

const Card = ({id,name,image,traits}) => {
    return (
        <div className='card'>
            <img src={image}alt="img" />
            <div className="details">
                <div className="name">
                    {name}
                    <div className='id'>•#{id}</div>
                </div>
                <div className="priceContainer">
                    <img src = {wEth} className='wEthImage'/>
                    <div className='price'>{traits[0].value}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
