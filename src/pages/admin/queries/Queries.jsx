import React, { useState } from 'react'
import Style from './Queries.module.css'
import three_users from '../../../assets/svg/three_users.svg'
import issues from '../../../assets/svg/Issues.svg'
import resolve from '../../../assets/svg/resolved.svg'
import Header from '../../../components/header/Header'
import Total_Card from '../../../components/total_Card/Total_Card'
import rise from '../../../assets/svg/rise.svg'
import Stats_Card from '../../../components/stats_card/Stats_Card'
import recording from '../../../assets/svg/recording.svg'
import microphone from '../../../assets/svg/microphone.svg'
import search from '../../../assets/svg/Search.svg'
import InputField from '../../../components/input/InputField'
import filter_img from '../../../assets/svg/Complete_filter_img.svg'



const Reports = () => {

    const [toggleIndex, setToggleIndex] = useState(100);
    const [toggleStatsIndex, setToggleStatsIndex] = useState(100);

    const toggle = (index) => {
        setToggleIndex(index);
    }

    const toggleStats = (index) => {
        setToggleStatsIndex(index);
    }

    const stats_card4 = [
        {
            image1: three_users,
            price: "200",
            text: "In-app Message Queries",
            to: "/placebet",
            divText: "View All"
        },
        // {
        //     image1: issues,
        //     price: "200",
        //     text: "Mail Queries",
        //     to: "/placebet",
        //     divText: "View All"
        // },
        {
            image1: resolve,
            price: "180",
            text: "In-app call Queries",
            to: "/placebet",
            divText: "View All"
        },
        {
            image1: resolve,
            price: "20",
            text: "Toll Calls Queries",
            to: "/placebet",
            divText: "View All"
        },
    ]

    const stats_card3 = [
        {
            img: rise,
            figure: "Pending Queries",
            text: "20",
            to: ""

        },
        {
            img: rise,
            figure: "Resolved Queries",
            text: "180",
            to: ""
        }
    ]

    const genral_arr = [


        {
            date: "8/7/2024",
            queryType: "In-app Message",
            category: "Billing",
            username: "Lighty",
            headline: "Lorem ipsum dolo",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            // query:{
                // img: microphone,
                // img2: recording,
                // text: " 4:23",
                // text2: "Play Recording",
                // queryText:"Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate", 
            // },
       
            status: "Pending",
            action: "Review"
        },
        {
            date: "8/7/2024",
            queryType: "In-app Message",
            category: "Billing",
            username: "Lighty",
            headline: "Lorem ipsum dolo",
            query: "Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate",
            attachments: {
                img: microphone,
                img2: recording,
                text: " 4:23",
                text2: "Play Recording",
                queryText:"Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate", 
            },
            status: "Pending",
            action: "Review"
        }
    ]


    return (
        <div id={Style.Reports_mainDiv}>
            
            <Header
                headerText={"Welcome, Admin"}
                headerInfo={"Here’s an overview of White House"} />

            <div id={Style.Reports_WrapperDiv}>

                <p className={Style.ReportsText}>Queries Summary</p>

                <div id={Style.Total_Stats_CardWrapper}>

                    <div id={Style.Reports_mapDiv}>

                        {
                            stats_card4.map((obj, index) => {
                                let isBlack = index == toggleIndex ? true : false;
                                return (
                                        <div id={window.innerWidth < 480 ? Style.Cards : null }>
                                            <Total_Card
                                                key={index}
                                                text={obj.text}
                                                image1={obj.image1}
                                                divText={obj.divText}
                                                price={obj.price}
                                                isBlack={isBlack}
                                                onClick={() => toggle(index)}
                                            />
                                        </div>
                                    
                                )
                            })
                        }
                    </div>

                    <div id={Style.Query_Stats_MapCard}>
                        {
                            stats_card3.map((obj, index) => {
                                let colourChange = index + 4 == toggleIndex ? true : false
                                return (
                                    <Stats_Card
                                        img={obj.img}
                                        figure={obj.figure}
                                        text={obj.text}
                                        to={obj.to}
                                        colourChange={colourChange}
                                        onClick={() => toggle(index + 4)} />
                                )
                            })
                        }

                    </div>
                </div>


                <div id={Style.Query_header_filterDiv}>
                    {toggleIndex == 100 ? <p className={Style.ReportsText}>All Queries</p> : toggleIndex == 0 ? <p className={Style.ReportsText}>In-app Message Queries</p> : toggleIndex == 2 ? <p className={Style.ReportsText}>In-app Call Queries</p> : toggleIndex == 1 ? <p className={Style.ReportsText}>Mail Queries</p> : toggleIndex == 3 ? <p className={Style.ReportsText}>In-app Message Queries</p> : toggleIndex == 2 ? <p className={Style.ReportsText}>In-app Call Queries</p> : toggleIndex == 1 ? <p className={Style.ReportsText}>Mail Queries</p> : ""}
                   
                   
                    <div id={Style.Input_filterDiv}>
                        
                        <div id={Style.searchDiv}>
                            <img src={search} alt="" />
                            <InputField />
                        </div>

                        <img src={filter_img} alt="" />
                    </div>
                </div>

                <div id={Style.Reports_Table_WrapperDiv}>
                    <table>
                        <tr id={Style.headerTable}>
                            <th>S/N</th>
                            <th>Date</th>
                            <th>QueryType</th>
                            <th>Category</th>
                            <th>Username</th>
                            <th>Headline</th>
                            <th>Query</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>


                        {
                            toggleIndex == 100 ?

                                <tbody>
                                    {
                                        genral_arr.map((obj, index) => {

                                            let color = obj.status === "Pending" ? true : false

                                            return (

                                                <tr id={Style.Personal_Info_tr}>
                                                    <td>{index + 1}</td>
                                                    <td>{obj.date}</td>
                                                    <td className={Style.tableText}>{obj.queryType}</td>
                                                    <td className={Style.tableText}>{obj.category}</td>
                                                    <td className={Style.tableText}>{obj.username}</td>
                                                    <td className={Style.tableText}>{obj.headline}</td>
                                                    <td>
                                                        <div className={Style.QueryText}>
                                                            {/* <p className={Style.Media_query}><img src={obj.attachments.img} alt="" /></p>
                                                            <p className={Style.Media_query}><img src={obj.query.img2} alt="" />{obj.query.text2}</p> */}
                                                            {obj.query}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className={Style.statusText} style={{ backgroundColor: color ? "#fc9e2f33" : "#31c36433", color: color ? "#FC9E2F" : "#31C364" }}>{obj.status}</div>
                                                    </td>
                                                    <td>
                                                        <button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>
                                                            {obj.action}
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>3</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>In-app Call</td>
                                        <td className={Style.tableText}>Payment</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div id={Style.statusText2}>Resolved</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>4</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>Toll Call</td>
                                        <td className={Style.tableText}>Payment</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div id={Style.statusText2}>Resolved</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>
                                </tbody> : "what"
                        }


                        {toggleIndex === 0 || toggleIndex === 1 ?
                            <tbody>
                                <tr id={Style.Personal_Info_tr}>
                                    <td>1</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>In-app Message </td>
                                    <td className={Style.tableText}>Billing</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={Style.statusText}>Pending</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>
                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Mail</td>
                                    <td className={Style.tableText}>Account</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>

                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Mail</td>
                                    <td className={Style.tableText}>Account</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>


                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Mail</td>
                                    <td className={Style.tableText}>Account</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>

                            </tbody> : "what"
                        }

                        {toggleIndex === 2 || toggleIndex === 3 ?

                            <tbody>
                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Toll Call</td>
                                    <td className={Style.tableText}>Payment</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                            <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>

                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Toll Call</td>
                                    <td className={Style.tableText}>Payment</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                            <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>

                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Toll Call</td>
                                    <td className={Style.tableText}>Payment</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                            <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>

                                <tr id={Style.Personal_Info_tr}>
                                    <td>2</td>
                                    <td>8/7/2024</td>
                                    <td className={Style.tableText}>Toll Call</td>
                                    <td className={Style.tableText}>Payment</td>
                                    <td className={Style.tableText}>Lighty</td>
                                    <td className={Style.tableText}>Lorem ipsum dolo</td>
                                    <td>
                                        <div className={Style.ReportDiv}>
                                            <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                            <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div id={Style.statusText2}>Resolved</div>
                                    </td>
                                    <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                </tr>
                            </tbody> : "what"
                        }

                        {
                            toggleIndex === 4 ?
                                <tbody>
                                    <tr id={Style.Personal_Info_tr}>
                                        <td>1</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>In-app Message </td>
                                        <td className={Style.tableText}>Billing</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={Style.statusText}>Pending</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>
                                    <tr id={Style.Personal_Info_tr}>
                                        <td>2</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>Mail</td>
                                        <td className={Style.tableText}>Account</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                                <p>Lorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputateLorem ipsum dolor sit amet consectetur. Odio ornare id enim vulputate</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={Style.statusText}>Pending</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>3</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>In-app Call</td>
                                        <td className={Style.tableText}>Payment</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={Style.statusText}>Pending</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>

                                    <tr id={Style.Personal_Info_tr}>
                                        <td>4</td>
                                        <td>8/7/2024</td>
                                        <td className={Style.tableText}>Toll Call</td>
                                        <td className={Style.tableText}>Payment</td>
                                        <td className={Style.tableText}>Lighty</td>
                                        <td className={Style.tableText}>Lorem ipsum dolo</td>
                                        <td>
                                            <div className={Style.ReportDiv}>
                                                <p className={Style.Media_query}><img src={microphone} alt="" /> 4:23</p>
                                                <p className={Style.Media_query}><img src={recording} alt="" />Play Recording</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className={Style.statusText}>Pending</div>
                                        </td>
                                        <td><button style={{ backgroundColor: "#0E093C", border: "none", color: "#FFFFFF", fontSize: "0.7rem", width: "5.18rem", borderRadius: "8px", height: "1.37rem" }}>Review</button></td>
                                    </tr>
                                </tbody> : ""
                        }

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Reports