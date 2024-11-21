import React, { useEffect, useState } from 'react'
import Style from '../totalBet/Total_BetPlaced.module.css'
import Header from '../../../components/header/Header'
import person from '../../../assets/images/person_img.png'
import green_eyes from '../../../assets/svg/green_eyes.svg'
import warning from '../../../assets/svg/yellow_warning.svg'
import delete_list from '../../../assets/svg/product_delete.svg'
// import InputField from '../../../components/input/InputField'
import { useParams } from 'react-router-dom'
import BetPlaced_com from '../../../components/bet_placedCom/BetPlaced_com'




const Total_BetPlaced = () => {

  let [toggleIndex, setToggleIndex] = useState(0);

  let { indexParams } = useParams()

  let paramIndex = JSON.parse(indexParams)



  const arr = [
    {
      SN: "1",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "2",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "4",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Lost",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }

    },
    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }
    },

    {
      SN: "3",
      userID: "5466FH",
      BetID: "6458575RFG",
      game: "DiceRoom344",
      amount: "1000",
      players: person,
      status: "Won",
      win: "5000",
      action: {
        eye: green_eyes,
        warning: warning,
        delete: delete_list
      }
    }
  ]

  return (
    <div id={Style.Total_BetPlaced_mainDiv}>

      <Header
        headerText={"Total Bet Placed"}
        headerInfo={"Here’s an information on all placed bets"} />

      <div id={Style.TotalBet_wrapperDiv}>
      

        <BetPlaced_com arr={arr} initialIndex = {paramIndex} />

      </div>


    </div>
  )
}

export default Total_BetPlaced