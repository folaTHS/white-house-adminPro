import React, { useEffect, useState } from 'react'
import Style from '../bet_placedCom/BetPlaced_com.module.css'
import winners_background from '../../assets/svg/winners_background.svg'
import arrow_down from '../../assets/svg/arrow_down-dark.svg'
import search from '../../assets/svg/Search.svg'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import download from '../../assets/svg/download_img.svg'
import InputField from '../../components/input/InputField'
import Date_Picker from '../date_picker/Date_Picker'

const BetPlaced_com = (props) => {

    const { arr, initialIndex } = props

    let array = [...arr]



    let [toggleIndex, setToggleIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState(new Date());  // Initialize with current date
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);  // Initialize with current date



    const toggle = (index) => {

        setToggleIndex(index)

    }


    useEffect(() => {

        setToggleIndex(initialIndex)
        // if(initialIndex == 0){
        //     diceTransactionProvider
        // }else if(initialIndex == 1){

        // }
    }, [])


    const handleDateChange = (newDate) => {

        setSelectedDate(newDate);  // Update selectedDate when newDate is received

        console.log("New selected date:", newDate);  // This should log the new date when clicked

        setIsCalendarOpen(false)
    };

    const toggleCalendar = () => {
        setIsCalendarOpen(true)
    }



    return (
        <div>

            <div>
                {
                    toggleIndex == 1 ?
                        <img id={Style.winners_background} src={winners_background} alt="" />
                        : " "
                }
            </div>

            <div id={Style.Total_BetPlaced_TableWrapperDiv}>
                <div id={Style.BetText}>Bet Lists <span>(1,355)</span></div>

                <div id={Style.Transaction_listCalendar_Div}>

                    <div id={Style.Transaction_listDiv}>

                        <button onClick={() => toggle(0)} className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>All</button>
                        <button onClick={() => toggle(1)} className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Winning Bets</button>
                        <button onClick={() => toggle(2)} className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}>Losing Bets</button>

                    </div>

                    <div id={Style.Amount_Paid_input_FilterDiv}>
                        <h1>{selectedDate.toDateString()} <img onClick={toggleCalendar} src={arrow_down} alt="" /></h1>

                        {
                            isCalendarOpen && (
                                <div id={Style.calendar_popup}>
                                    <Date_Picker onDateChange={handleDateChange} />
                                </div>
                            )
                        }

                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>
                        <div id={Style.imgDiv}>
                            <img src={filter_img} alt="" />
                            <img src={download} alt="" />
                        </div>
                    </div>
                </div>

                {/* {toggleIndex == 0 ? */}
                <table>

                    <thead>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>User ID</th>
                            <th>Bet ID</th>
                            <th>Game</th>
                            <th>Amount Staked</th>
                            <th>Players</th>
                            <th>Status</th>
                            <th>Amount Won</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {
                        toggleIndex == 0 ?

                            <tbody>
                                {
                                    array.map((user, index) => {
                                        let lost = user.status == "Lost" ? true : false
                                       
                                        return (

                                            <tr key={index}>

                                                <td>{index + 1}</td>
                                                <td>{user.userID}</td>
                                                <td>{user.BetID}</td>
                                                <td>{user.game}</td>
                                                <td>{user.amount}</td>
                                                <td>
                                                    <div id={Style.players_imgDiv}>
                                                        <img src={user.players} alt="" />
                                                        <img src={user.players} alt="" />
                                                        <img src={user.players} alt="" />
                                                        <img src={user.players} alt="" />
                                                    </div>
                                                </td>
                                                <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td>
                                                <td>{user.win}</td>
                                                <td>
                                                    <div id={Style.action_field}>
                                                        <img src={user.action.eye} alt="" />
                                                        <img src={user.action.warning} alt="" />
                                                        <img src={user.action.delete} alt="" />
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody> :
                            
                            toggleIndex == 1 ?



                                //winner Bet

                                <tbody>
                                    {
                                        array.filter((p) => p.status === "Won").map((user, index) => {
                                            // let lost = user.status == "Lost" ? true : false
                                            
                                            return (

                                                <tr key={index}>

                                                    <td>{index + 1}</td>
                                                    <td>{user.userID}</td>
                                                    <td>{user.BetID}</td>
                                                    <td>{user.game}</td>
                                                    <td>{user.amount}</td>
                                                    <td>
                                                        <div id={Style.players_imgDiv}>
                                                            <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" />
                                                        </div>
                                                    </td>
                                                    <td><div id={Style.statusText}>{user.status}</div></td>
                                                    <td>{user.win}</td>
                                                    <td>
                                                        <div id={Style.action_field}>
                                                            <img src={user.action.eye} alt="" />
                                                            <img src={user.action.warning} alt="" />
                                                            <img src={user.action.delete} alt="" />
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody> :

                                toggleIndex == 2 ?
                                    //Dice_Bet_Placed Lost screen

                                    <tbody>
                                        {
                                            array.filter((p) => p.status === "Lost").map((user, index) => {
                                                let lost = user.status == "Lost" ? true : false
                                               
                                                return (

                                                    <tr key={index}>

                                                        <td>{index + 1}</td>
                                                        <td>{user.userID}</td>
                                                        <td>{user.BetID}</td>
                                                        <td>{user.game}</td>
                                                        <td>{user.amount}</td>
                                                        <td>
                                                            <div id={Style.players_imgDiv}>
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                            </div>
                                                        </td>
                                                        <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td>
                                                        <td>{user.win}</td>
                                                        <td>
                                                            <div id={Style.action_field}>
                                                                <img src={user.action.eye} alt="" />
                                                                <img src={user.action.warning} alt="" />
                                                                <img src={user.action.delete} alt="" />
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody> : ""

                    }

                </table>
            </div>

        </div>
    )
}

export default BetPlaced_com