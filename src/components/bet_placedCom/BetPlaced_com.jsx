import React, { useEffect, useState } from 'react'
import Style from '../bet_placedCom/BetPlaced_com.module.css'
import winners_background from '../../assets/svg/winners_background.svg'
import arrow_down from '../../assets/svg/arrow_down-dark.svg'
import search from '../../assets/svg/Search.svg'
import filter_img from '../../assets/svg/Complete_filter_img.svg'
import download from '../../assets/svg/download_img.svg'
import InputField from '../../components/input/InputField'
import Date_Picker from '../date_picker/Date_Picker'
import {Link, useLocation} from 'react-router-dom'

import FilterModal from '../../popUps/filterPopUp/filterPopUp'

const BetPlaced_com = (props) => {
    
  const location = useLocation();
  const { source, extraData } = location.state || {}; // Destructuring the state

    const { arr, initialIndex , losingdata, winningdata} = props
    
    let array = [...arr]

    let activeFootbalBets, pendingFootbalBets, closedFootballBets, sortedArray, sortedArrayTwo;

    activeFootbalBets = array.filter(bet => bet.status === "active")
    console.log(activeFootbalBets);

    activeFootbalBets = array.filter(bet => bet.status === "active")
    console.log(activeFootbalBets);

    // activeDiceBets = array.filter(bet => bet.status === "active")
    // console.log(activeFootbalBets);

    // pendingDiceBets = array.filter(bet => bet.status === "pending")
    // console.log(pendingFootbalBets);

    closedFootballBets = array.filter(bet => bet.status === "closed")
    // console.log(closedFootballBets);
    
    source === 'Sports'? sortedArray = activeFootbalBets : sortedArray = array;
    source === 'Sports'? sortedArrayTwo = activeFootbalBets : sortedArray = array;
    
    // source === 'Dice Games'? sortedArray = activeFootbalBets : sortedArray = array;
    // source === 'Dice Games'? sortedArrayTwo = activeFootbalBets : sortedArray = array;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filters, setFilters] = useState(null);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleApplyFilters = (appliedFilters) => {
      setFilters(appliedFilters);
      console.log("Applied Filters:", appliedFilters);
    };


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

                        <button 
                        onClick={() => toggle(0)} 
                        className={toggleIndex == 0 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}
                        >All</button>

                        <button 
                        onClick={() => toggle(1)} 
                        className={toggleIndex == 1 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}
                        >Winning Bets</button>

                        <button 
                        onClick={() => toggle(2)} 
                        className={toggleIndex == 2 ? Style.toggleDiv_buttonActive : Style.Transaction_listDiv_button}
                        >Losing Bets</button>

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
                            <FilterModal
                            isOpen={isModalOpen}
                            onClose={handleCloseModal}
                            onApplyFilters={handleApplyFilters}
                            />
                            {filters && (
                                <div>
                                <h3>Active Filters</h3>
                                <pre>{JSON.stringify(filters, null, 2)}</pre>
                                </div>
                            )}
                            <img src={filter_img} onClick={handleOpenModal} alt="" />
                            <img src={download} alt="" />
                        </div>
                    </div>
                </div>
                <div id={window.innerWidth < 480 ? Style.BetPlacedTableDiv : Style.BetTables} >
                {/* {toggleIndex == 0 ? */}
                    <table >
                        <thead>
                            <tr id={Style.headerTable}>
                                <th>S/N</th>
                                {/* <th>User ID</th> */}
                                {/* <th>Bet ID</th> */}
                                { source == 'Sports' ? <th> Opponent ID</th> : null }
                                <th> {source} </th>
                                {/* <th> {GameTypeColumn} </th> */}
                                <th>  Bet Type </th>
                                <th>  Ticket ID </th> 
                                <th>  Match ID </th> 
                                <th>  Team </th> 
                                <th>  League </th>
                                <th>Amount Staked</th>
                                <th>Players</th>
                                {toggleIndex == 0 ? null : <th>Status</th>}
                                <th> Winners </th>
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
                                                    <td></td>
                                                    <td></td>
                                                    <td>{user.bet_id}</td>
                                                    <td>{user.game}</td>
                                                    <td>{user.bet_Type}</td>

                                                    { source == 'Sports' ? <td></td>: null}
                                                    <td></td>
                                                    <td>{user.amount_staked}</td>
                                                    <td>
                                                        <div id={Style.players_imgDiv}>
                                                            {/* <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" />
                                                            <img src={user.players} alt="" /> */}
                                                            {user.players_in_game}
                                                        </div>
                                                    </td>
                                                    {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                                                    <td>{user.Winners}</td>
                                                    <td>{user.win}</td>
                                                    <td>
                                                        <div id={Style.action_field}>
                                                            <button  style={{ backgroundColor:"#eb575733", borderRadius:10, border:"none" }}>View more...</button>
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
                                            sortedArrayTwo.map((user, index) => {
                                                // let lost = user.status == "Lost" ? true : false
                                                
                                                return (

                                                    // <tr key={index}>

                                                    //     <td>{index + 1}</td>
                                                    //     <td>{user.userID}</td>
                                                    //     <td>{user.BetID}</td>
                                                    //     <td>{user.game}</td>
                                                    //     <td>{user.amount}</td>
                                                    //     <td>
                                                    //         <div id={Style.players_imgDiv}>
                                                    //             <img src={user.players} alt="" />
                                                    //             <img src={user.players} alt="" />
                                                    //             <img src={user.players} alt="" />
                                                    //             <img src={user.players} alt="" />
                                                    //         </div>
                                                    //     </td>
                                                    //     {/* <td><div id={Style.statusText}>{user.status}</div></td> */}
                                                    //     <td>{user.win}</td>
                                                    //     <td>
                                                    //         <div id={Style.action_field}>
                                                    //             <img src={user.action.eye} alt="" />
                                                    //             <img src={user.action.warning} alt="" />
                                                    //             <img src={user.action.delete} alt="" />
                                                    //         </div>
                                                    //     </td>
                                                    // </tr>
                                                     <tr key={index}>

                                                     <td>{index + 1}</td>
                                                     {/* <td>{user.bet_id}</td> */}
                                                     <td>{user.opponent_id}</td>
                                                     <td>{user.game}</td>
                                                     <td>{user.type}</td>
                                                     <td>{user.ticket_id}</td>
                                                     <td>{user.matchid}</td>
                                                     <td>{user.team}</td>
                                                     <td>{user.leagueid}</td>
                                                     <td>{user.amount}</td>
                                                     <td>
                                                         <div id={Style.players_imgDiv}>
                                                             {user.players_in_game}
                                                         </div>
                                                     </td>
                                                     <td>
                                                        <div id={Style.statusText}>
                                                         {user.status}
                                                         </div>
                                                    </td> 
                                                     <td>{user.Winners}</td>
                                                     <td>{user.win}</td>
                                                     <td>
                                                         <div id={Style.action_field}>
                                                             {/* <img src={user.action.eye} alt="" />
                                                             <img src={user.action.warning} alt="" />
                                                             <img src={user.action.delete} alt="" /> */}
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
                                            sortedArray.map((user, index) => {
                                                let lost = user.status == "Lost" ? true : false
                                            
                                                return (

                                                    <tr key={index}>

                                                        <td>{index + 1}</td>
                                                        <td>{user.user_id}</td>
                                                        <td>{user.BetID}</td>
                                                        <td>{user.game}</td>
                                                        <td>{user.bet_Type}</td>
                                                        <td>{user.amount_staked}</td>
                                                        <td>
                                                            <div id={Style.players_imgDiv}>
                                                                {/* <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" />
                                                                <img src={user.players} alt="" /> */}
                                                                {user.players_in_game}
                                                            </div>
                                                        </td>
                                                        {/* <td><div id={Style.statusText} style={{ backgroundColor: lost ? "#eb575733" : "#31c36433", color: lost ? "#EB5757" : "#31C364" }}>{user.status}</div></td> */}
                                                        <td>{user.win}</td>
                                                        <td>
                                                            <div id={Style.action_field}>
                                                                {/* <img src={user.action.eye} alt="" />
                                                                <img src={user.action.warning} alt="" />
                                                                <img src={user.action.delete} alt="" /> */}
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

        </div>
    )
}

export default BetPlaced_com