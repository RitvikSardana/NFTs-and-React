import React, { useEffect, useState } from 'react'
import './Main.css'
import instagram from '../assets/owner/instagram.png'
import twitter from '../assets/owner/twitter.png'
import more from '../assets/owner/more.png'
const Main = ({selectedGoal,goalsData}) => {

    const [activeGoal,setActiveGoal] = useState(goalsData[0])
 
    useEffect( () =>{
        setActiveGoal(goalsData[selectedGoal])
        // console.log(activeGoal)
    },[goalsData,selectedGoal])

    return (
        <div className='main'>
            <div className="mainImageContainer">
                <img src={activeGoal.image_original_url} alt="" />
            </div>
            <div className="detailsContainer">
               <div className="nameContainer" style={{'color':'#fff'}}>
                   <div className="nameMain"> {activeGoal.name}
                   </div>
                   <span className="id"> •#{activeGoal.token_id}
                   </span>
                </div>
                <div className='handleContainer'>
                    <img src={activeGoal.owner.profile_img_url} alt="" />
                    <div className="handle">
                       <div className="address">{activeGoal.asset_contract.address}</div>
                       <div className="instaHandle">@ritvik</div> 
                    </div>
                </div>
            </div>
            <div className="socialMediaContainer">
                <img src={instagram} alt="" className="media" />
                <img src={twitter} alt="" className="media" />
                <img src={more} alt="" className="media" />
            </div>
        </div>
    )
}

export default Main
