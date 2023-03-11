import React, { useEffect, useState } from 'react'

function Tournament() {
  const [tournamentNames, setTournamentNames] = useState([]);
  const tournamentId = [1, 2, 3, 4, 5, 6, 7]
  function Call(i) {
    useEffect(() => {
      const getTournamentName = async () => {
        const data = await fetch(`https://footapi7.p.rapidapi.com/api/tournament/${i}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '24afc5024emsh1ead0122c6f8d11p156a11jsn2961efecb2b1',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
          }
        })
        await data.json().then((d)=>{
          const arr =  Object.values(d.uniqueTournament);
          setTournamentNames(prev=>arr)
        })
      }
      getTournamentName()
    }, [])
  }
  tournamentId.map((i) => (
    Call(i)
  ))
  return (
    <div className='container2'>
      {/* {
        tournamentNames.map((c)=>(
          <div>{c.name}</div>
        ))
      } */}
      Hello world
    </div>
  )
}

export default Tournament