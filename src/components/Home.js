import React, { useEffect, useState } from 'react'
import Fixtures from './Fixtures'

function Home() {
    const [matchDetails, setMatchDetails] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const getMatchdetails = async () => {
            try {
                setLoading(true)
                const data = await fetch(`https://footapi7.p.rapidapi.com/api/matches/live`, {
                    headers: {
                        'X-RapidAPI-Key': '24afc5024emsh1ead0122c6f8d11p156a11jsn2961efecb2b1',
                        'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
                    }
                })
                await data.json().then((d)=>{
                    console.log(d)
                    const dummyArray = Object.values(d.events)
                    setMatchDetails((prev)=>dummyArray)
                });
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMatchdetails()
    }, [])

    console.log(matchDetails);

    return (
        <div>
           <Fixtures loading={loading} fixtures={matchDetails}/>
        </div>
    )
}

export default Home