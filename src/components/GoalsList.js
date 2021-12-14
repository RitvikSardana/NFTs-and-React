import React from 'react'
import Card from './Card'
import './GoalsList.css'


const GoalsList = ({goalsData,setSelectedGoal}) => {
    return (
        <div className='goalsList'>
            {
                goalsData.map(goal =>(
                    <div onClick={() => setSelectedGoal(goal.token_id)}>
                        <Card 
                            key = {goal.token_id}
                            id = {goal.token_id}
                            name = {goal.name}
                            traits = {goal.traits}
                            image = {goal.image_url}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default GoalsList
