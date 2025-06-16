import React, { useEffect, useState } from 'react'
import Style from '../countries/Countries.module.css'
import search from '../../../../assets/svg/Search.svg'
import InputField from '../../../../components/input/InputField'
import Button from '../../../../components/button/Button'
import Header from '../../../../components/header/Header'
import { Link } from 'react-router-dom'
import { PopupContextHook } from '../../../../WhiteHouse_PopupContext'
import { getRegCountriesProvider } from '../../api_detaills/provider/user_provider'
import logo from "../../../../assets/images/S_icon.png"
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../api_detaills/GlobalStates/Countries";




const Countries = () => {

    const dispatch = useDispatch();
    const [erorPopup, setErrorPopup] = useState(true);
      useEffect(() => {
            dispatch(fetchCountries());
        }, [dispatch]);
    const { updateErrorPopup, updateErrorText } = PopupContextHook()

    const [loading, setLoading ]= useState(true);
    const [countries, setCountries] = useState([])


    // Effect to fetch all countries when the component mounts
    useEffect(() => {

        getRegCountriesProvider(
        {
            updateCountries: (data) => {
                // Update the country state with the fetched data

                setCountries(data)
            },
            updateErrorPopup, // Function to update error popup
            updateErrorText // Function to update error text
        }
    )
    }, []) // Empty dependency array means this runs once on mount
    
  
    
    const {CountriesData, CountriesDataLoading, CountriesDataError } = useSelector(
        (state) => state.CountriesReducer
      );
//  console.log(CountriesDataError);
 
    useEffect(()=>{
        setTimeout(()=> countries ? setLoading(false): setLoading(true), 3000)
      }, [])

    return (
        <>
        
        {loading ? (
          <div className={Style.loadingContainer}>
            <motion.img
              src={logo}
              alt="Loading Object"
              className="speeding-object"
              initial={{
                // x: "-100vw",
                scale: 0.5,
              }} // Starts small off-screen
              animate={{
                // x: ["-100vw", "50vw", "100vw"], // Moves from left -> center -> right
                scale: [0.5, 1.2, 0.5], // Scales up in center, back down on exit
              }}
              transition={{
                times: [0, 0.5, 1],
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </div>
        ) : null}
        <div id={Style.Winner_loser_mainDiv}>

            <Header
                // headerText={"Total Countries"}
                // headerInfo={"Here’s an information on all Countries"}
            />
            {
                erorPopup && CountriesDataError?.includes('401')?
                <div className={Style.errorContainer} onClick={()=> setErrorPopup(false)}>
                <button
                    id={Style.closeErrorBtn}
                    onClick={() => setErrorPopup(false)}
                >
                    &times;
                </button>
                <DotLottieReact
                src="https://lottie.host/75c1ee26-7356-43d6-983b-f0c3e9ad86ad/H1VFgjJyzy.lottie"
                loop
                autoplay
                />
                <p style={{color:"black"}}>{CountriesDataError}: log in for valid token  </p>
                </div>
                : 
                <></>
            }

            <div id={Style.Winner_loser_wrapperDiv}>

                <div id={Style.searchDiv}>

                    <img src={search} alt="" />
                    <InputField
                        placeholder={"Search Countries"}
                    />
                </div>


                <div id={Style.Winner_loser_wrapper}>
                    <div id={Style.Winner_loser_tableDiv}>
                        <table>
                            <thead>
                                <tr id={Style.headerTable}>
                                    <th>S/N</th>
                                    <th>Countries</th>
                                    <th>Users</th>
                                    <th>Flag</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    countries.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td className={Style.number}>{index + 1}</td>
                                                <td>{obj.name}</td>
                                                <td>{obj.users}</td>
                                                <td><img src={obj.flag} alt="" /></td>
                                                <td>
                                                    <Link to={"/countryUsers"}>
                                                        <Button
                                                            text={"View Users"} />
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Countries