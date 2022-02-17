import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios'
import GoalsList from './components/GoalsList';
import Main from './components/Main';

function App() {

  const [goalsData,setGoalsData] = useState([])
  const [selectedGoal,setSelectedGoal] = useState(0)

  useEffect( () =>{
    const getMyNFTs = async () =>{
      const openSeaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x02dBc8D4A835670566aa7CD892f4B8B337357C5e&order_direction=asc')
      setGoalsData(openSeaData.data.assets)
      // console.log(openSeaData.data.assets)akakakaka
    }
    return getMyNFTs()
  },[])

  return (
    <div className="App">
      <Header />
      {goalsData.length>0 && (
        <>
          <Main goalsData={goalsData} selectedGoal={selectedGoal} />
          <GoalsList goalsData = {goalsData} setSelectedGoal = {setSelectedGoal} />
        </>
      )
      }
    </div>
  );
}

export default App;
