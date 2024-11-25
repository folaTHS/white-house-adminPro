import React from 'react'
import Style from '../Dice.module.css'
import { AreaChart, Area, XAxis, YAxis, Bar, BarChart, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Header from '../../../../components/header/Header'
import Total_Card from '../../../../components/total_Card/Total_Card'
import rise from '../../../../assets/svg/rise.svg'
import person from '../../../../assets/svg/person.svg'
import flag from '../../../../assets/svg/flag.svg'
import smiley from '../../../../assets/svg/gray_smiley.svg'
import arrow_down from '../../../../assets/svg/arrow_down-dark.svg'
import Stats_Card from '../../../../components/stats_card/Stats_Card';
import winner from '../../../../assets/svg/winner.svg'
import loosers from '../../../../assets/svg/loosers.svg'
import Activity from '../../../../assets/svg/Activity.svg'
import three_users from '../../../../assets/svg/three_users.svg'
import sports from '../../../../assets/svg/sport.svg'





const Sports = () => {

  const customTickFormatter = (tick) => {
    return `${tick}k`;
  }



  const total_Card2 = [
    {
      image1: Activity,
      text: "Total Bet Placed",
      divText: "View all",
      price: "$25,052,985",
      to: `/totalBetPlaced/${0}`

    },
    {
      image1: three_users,
      text: "Total Players",
      divText: "View all",
      price: "2m"
    },
    {
      image1: winner,
      text: "Winners",
      divText: "View all",
      price: "345,000",
      to: `/totalBetPlaced/${1}`
    },
    {
      image1: loosers,
      text: "Loosers",
      divText: "View all",
      price: "23,000",
      to: `/totalBetPlaced/${2}`
    },
  ]

  const data = [
    {
      name: "Mon",
      month: "Jan",
      uv: 50,
      pv: 40,
      amt: 2400,
    },
    {
      name: "Tue",
      month: "Feb",
      uv: 70,
      pv: 60,
      amt: 2210,
    },
    {
      name: "Wed",
      month: "Mar",
      uv: 80,
      pv: 40,
      amt: 2290,
    },
    {
      name: "Thur",
      month: "Apr",
      uv: 65,
      pv: 20,
      amt: 2000,
    },
    {
      name: "Fri",
      month: "May",
      uv: 84,
      pv: 50,
      amt: 2181,
    },
    {
      name: "Sat",
      month: "Jun",
      uv: 100,
      pv: 60,
      amt: 2500,
    },
    {
      name: "Sun",
      month: "Jul",
      uv: 60,
      pv: 40,
      amt: 2100,
    },
  ]


  const stats_card2 = [
    {
      img: person,
      figure: "2m",
      text: "All Users",
      to: "/gameUsers"
    },
    {
      img: flag,
      figure: "14",
      text: "Reg Countries",
      to: "/"
    },
  ]



  const all_Users_arr = [
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online",
        to: "/userDetails"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
    {
        img: person,
        name: "John Doe",
        position: "Nigeria",
        status: "Online"
    },
  ]




  return (
    <div id={Style.DiceGame_mainDiv}>
      <Header
        headerText={"Sports"}
        headerInfo={"Here’s an information on Sports"}
        image2={sports} />

      <div id={Style.DiceGame_wrapperDiv}>

        <div id={Style.Sports_selection_wrapperDiv}>

          <button className={Style.Sports_selectionDiv}>Football</button>
          
          <div className={Style.Sports_selectionDiv}>Basketball</div>
          <div className={Style.Sports_selectionDiv}>Tennis</div>
          <div className={Style.Sports_selectionDiv}>8 balls</div>
          <div className={Style.Sports_selectionDiv}> 9 balls</div>
          {/* <div className={Style.Sports_selectionDiv} id={Style.basket}>Basketball</div> */}
       
        </div>

        <p className={Style.PlaceBet_headerText}>Today's Summary</p>
        
        <div id={Style.DiceGame_Card_mapDiv}>
          {
            total_Card2.map((object) => {
              return (
                <Total_Card
                  image1={object.image1}
                  text={object.text}
                  divText={object.divText}
                  price={object.price}
                  to ={object.to}
                />
              )
            })
          }
        </div>
        <p className={Style.PlaceBet_headerText}>Overview</p>
        <div id={Style.DiceGame_cardGraph_wrapper}>
          <div id={Style.DiceGame_Card_wrapper}>
            {
              stats_card2.map((obj) => {
                return (
                  <Stats_Card
                    img={obj.img}
                    figure={obj.figure}
                    text={obj.text}
                    to={obj.to} />
                )
              })
            }
          </div>
          <div id={Style.Revenue_total_EarningDiv}>

            <div className={Style.Revenue_earningDiv}>

              <p className={Style.earningText}>Daily Revenue</p>
              <p className={Style.priceText}>$3,000</p>

              <div id={Style.Revenue_progressDiv}>
                <div className={Style.Revenue_progressBar}></div>
                <div id={Style.SmileyImg_Div}>
                  <img id={Style.Revenue_smileyImg} src={smiley} alt="" />
                </div>
              </div>
              <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                watching to find out more</p>
            </div>

            <div className={Style.Revenue_earningDiv}>

              <p className={Style.earningText}>Earnings this month</p>
              <p className={Style.priceText}>$23,000</p>

              <div id={Style.Revenue_progressDiv}>
                <div className={Style.Revenue_progressBar}></div>
                <p id={Style.Revenue_percentText}>45%</p>
              </div>
              <p className={Style.Revenue_infoText}>70% more earning than last month, keep
                watching to find out more</p>
            </div>

          </div>
        </div>

        <div id={Style.DiceGame_lastline_graphDiv}>

          <div id={Style.AreaChartDiv}>
            <div id={Style.AreaChart_TextDiv}>
              <p id={Style.AreaChart_weeklyText}>Weekly Revenue Report</p>
              <p id={Style.AreaChart_dateText}>Week One October, 2024 <img src={arrow_down} alt="" /></p>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <AreaChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 0,
                  right: 0,
                  left: -20,
                  bottom: 0,
                }}

              >
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} tickFormatter={customTickFormatter} />
                <Tooltip />
                <Area type="normal" dataKey="uv" dot={true} stroke="#332D5B" fill="#332d5b80" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div id={Style.BarChart_TextWrapperDiv}>

            <div id={Style.Chart_mainDiv}>
              <div id={Style.PayoutsText}>Bet Placed</div>
              <ResponsiveContainer
                width="100%"
                height="100%">
                <BarChart
                  width={300}
                  height={100}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: -20,
                    bottom: 10,
                  }}
                >

                  <XAxis dataKey="name" fontSize={"0.8rem"} axisLine={false} tickLine={false}></XAxis>
                  <YAxis fontSize={"0.7rem"} axisLine={false} tickLine={false}></YAxis>
                  <Tooltip></Tooltip>
                  <Bar dataKey="uv" stroke='none' stackId='a' fill='#332D5B'></Bar>
                  <Bar dataKey="pv" stackId='a' fill='#736EA0'></Bar>
                </BarChart>
              </ResponsiveContainer>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sports                  