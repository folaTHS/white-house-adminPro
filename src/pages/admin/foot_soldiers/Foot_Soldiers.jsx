import React from 'react'
import Style from './Foot_Soldiers.module.css'
import Total_Card from '../../../components/total_Card/Total_Card'
import Activity from '../../../assets/svg/Activity.svg'
import total_users from '../../../assets/svg/total_users.svg'
import Header from '../../../components/header/Header'
import arrow_down from '../../../assets/svg/arrow_down.svg'
import rise from '../../../assets/svg/rise.svg'
import flag from '../../../assets/svg/flag.svg'
import Stats_Card from '../../../components/stats_card/Stats_Card'
import amount from '../../../assets/svg/stats_capture.svg'
import clock from '../../../assets/svg/stats_clock.svg'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../../WhiteHouse_PopupContext'




const Foot_Soldiers = () => {

  const {updateRevenuePopup} = PopupContextHook()

  const showRevenue = ()=>{

    updateRevenuePopup(true)
  }


    const soldiers_card = [
        {
            image1: Activity,
            text: "All Soldiers",
            divText: "View all",
            price: "1,985",
            to: "/allFootSoldiers"
        },
        {
            image1: total_users,
            text: "Users From Soldiers",
            divText: "View All",
            price: "20K",
            to: "/usersFromSoldiers"
        },
        {
            image1: amount,
            text: "Amount Paid to Soldiers",
            divText: "View all",
            price: "345,000",
            to: "/amountPaid"
        },
        {
            image1: clock,
            text: "Pending Requests",
            divText: "View All",
            price: "23,000",
            to: "/pendingRequests"
        },
    ]


    const foot_soldiers_stats_card = [
        {
            img: rise,
            figure: "2k",
            text: "Transactions",
            to: "/AllTransaction"

        },
        {
            img: flag,
            figure: "14",
            text: "Reg Countries",
            to: "/footSoldiersCountries"
        }
    ]

    const arr = [

        {
            date: "23 Aug,2024",
            userID: "UA 123476689",
            footsoldiers: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug,2024",
            userID: "UA 123476689",
            footsoldiers: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug,2024",
            userID: "UA 123476689",
            footsoldiers: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug,2024",
            userID: "UA 123476689",
            footsoldiers: "John Doe",
            status: "Onboarded"
        },
        {
            date: "23 Aug,2024",
            userID: "UA 123476689",
            footsoldiers: "John Doe",
            status: "Onboarded"
        },
    ]


    return (
        <div id={Style.Foot_Soldiers_mainDiv}>
            <Header
                headerText={"Foot Soldiers"}
                headerInfo={"Here’s an information on all Foot Soldiers"} />


            <div id={Style.Foot_Soldiers_wrapperDiv}>

                <p id={Style.Foot_Soldiers_headerText}>Foot Soldier's Summary</p>

                <div id={Style.Foot_Soldiers_cardDiv}>
                    {
                        soldiers_card.map((obj) => {

                            return (
                                <Total_Card
                                    image1={obj.image1}
                                    text={obj.text}
                                    divText={obj.divText}
                                    price={obj.price}
                                    to={obj.to} />
                            )
                        })
                    }
                </div>
                <div id={Style.Foot_Soldiers_table_revenueDiv}>
                    <div id={Style.onboarded_users_wrapperDiv}>
                        <div id={Style.onboarded_users_headerDiv}>
                            <p>Recently Onboarded Users</p>
                            <Link to={"/recentOnboarderUsers"}> <p>See All</p></Link>
                        </div>

                        <table>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Date</th>
                                    <th>User ID</th>
                                    <th>FootSoldiers</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    arr.map((obj, index) => {
                                        return (

                                            <tr>
                                                <td style={{ color: "#000000" }}>{index + 1}</td>
                                                <td>{obj.date}</td>
                                                <td>{obj.userID}</td>
                                                <td>{obj.footsoldiers}</td>
                                                <td><button style={{ Width: "5.5rem", height: "1.62rem", backgroundColor: "#31c36433", color: "#31C364", display: "flex", alignItems: "center", justifyContent: "center", border: "none", fontSize: "0.8rem", borderRadius: "0.3rem" }}>{obj.status}</button></td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div id={Style.Revenue_StatsDiv}>
                        <div id={Style.Revenue_wrapperDiv}>
                            <div className={Style.Revenue_earningDiv}>

                                <div id={Style.Revenue_headerDiv}>

                                    <p className={Style.earningText}>Daily Payments</p>

                                    <p id={Style.dateText}>Today <img src={arrow_down} alt="" /></p>
                                </div>
                                <p id={Style.priceText}>3,000 WHC</p>

                                <div className={Style.btnDiv}><button onClick={showRevenue}>Details</button></div>

                            </div>

                            <div className={Style.Revenue_earningDiv}>

                                <div id={Style.Revenue_headerDiv}>

                                    <p className={Style.earningText}>Monthly Payments</p>

                                    <p id={Style.dateText}>Today <img src={arrow_down} alt="" /></p>
                                </div>
                                <p id={Style.priceText}>60,000 WHC</p>

                                <div className={Style.btnDiv}><button>Details</button></div>

                            </div>
                        </div>
                        <div id={Style.foot_soldiers_stats_cardDiv}>
                            {
                                foot_soldiers_stats_card.map((obj) => {

                                    return (
                                        <Stats_Card
                                            figure={obj.figure}
                                            img={obj.img}
                                            to={obj.to}
                                            text={obj.text} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Foot_Soldiers