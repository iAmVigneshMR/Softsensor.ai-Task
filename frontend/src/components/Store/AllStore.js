import React, { Fragment, useEffect, useState } from 'react'
import Axios from '../../Axios'
import Slider from './Slider';
import "./css/allStore.css";
import { Link } from 'react-router-dom';

const AllStore = () => {

    const [storeData, setstoreData] = useState([]);

    useEffect(() => {
        Axios.get('/product')
        .then(resdata => {
            console.log(resdata.data);
            setstoreData(resdata.data);
        }).catch(err => {
            console.log(err);
        });
    },[])

    return (
        <Fragment>
            <Slider />
            <div id="container3">
            <header className="contents">
                <h2 className="dealsHeading"><i class="fab fa-discourse"></i> All Deals</h2>
            </header>
            <div className="dealsContainer">
                {storeData && storeData.length > 0 ? storeData
                .map((val, i) => 
                <div key = {val.id} className="itemInfo">
                    <div className="cards">
                        <span className="dissec">50% off</span><br/><br/>
                        <div className="img1">
                        <img src={val.image} alt="img"/>
                        </div>
                        <p> {val.title.slice(0,10)}</p>
                        <p><i class="fas fa-star fil"></i><i class="fas fa-star fil"></i><i class="fas fa-star fil"></i><i class="far fa-star fil"></i><i class="far fa-star fil"></i> {val.rating.rate}</p>
                        <p><i class="fas fa-dollar-sign"></i> {val.price}</p> <br />
                        <Link className="btn2" to={ `/details/${val.id}` }>
                            View Details
                        </Link>
                    </div>
                </div>
                ) : null
            }
            </div>
            </div>
        </Fragment>
    )
}

export default AllStore
