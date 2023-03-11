import React from 'react'
import './Fixture.css'

function Fixtures({ loading, fixtures }) {
    if (loading) {
        return (
            <div className='loader'></div>
        )
    }
    return (
        <div className='container1'>
            {
                fixtures.map((match) => (
                    <div className='matchPanel'>
                        <div className='topContainer'>
                            <div className='topContainerLeft'>
                                <h4>{match.tournament.category.name}</h4>
                                <p>{match.tournament.category.slug}</p>
                            </div>
                            <div className='topContainerRight'>
                                <h4>{match.tournament.name}</h4>
                                <p>{match.tournament.slug}</p>
                            </div>
                        </div>
                        <div className='middleContainer'>
                            <div className='middleContainerLeft'>
                                <p>H</p>
                                <h3>{match.homeTeam.name}</h3>
                                <p>{match.homeTeam.slug}</p>
                            </div>
                            <div className='middleContainerCenter'>
                                <div className='midddleContainerCenterTop'>
                                    <h2>{match.homeScore.current}</h2>
                                    <p>-</p>
                                    <h2>{match.awayScore.current}</h2>
                                </div>
                                <div className='middleContainerCenterBottom'>
                                    <h5>{match.status.description}</h5>
                                    <h6>{match.status.type}</h6>
                                </div>
                            </div>
                            <div className='middleContainerRight'>
                                <p>{match.awayTeam.slug}</p>
                                <h3>{match.awayTeam.name}</h3>
                                <p>A</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Fixtures