import React from 'react'
import { Link } from 'react-router-dom';

import {heroImg} from '../../helpers/heroImg'

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => 
{
    // const imgPath = `/assets/${id}.jpg`; //Path para assets estaticos

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-md-4'>
                        <img src={heroImg(`./${id}.jpg`)} alt={superhero} className='card-img'/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-tittle'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                    <p className='text-muted'>{characters}</p>
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`}>
                                More info..
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard