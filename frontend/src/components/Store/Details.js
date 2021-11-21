import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Axios from '../../Axios';
import "./css/details.css";

const Details = () => {
    
    const [allStore, setallStore] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        Axios.post(`/sigleProduct`,{id})
        .then(resdata => {
            console.log(resdata.data);
            setallStore(resdata.data);
        }).catch(err => {
            console.log(err);
        });
    },[id])

    let discountPrize = allStore.price * 2;
    // let count = allStore.rating.count;

    return (
        <Fragment>
            <div id="container4">
                <div className="category">Category : {allStore.category}</div>
                <div className="contents">
                    <div className="lft-contents">
                        <img src={allStore.image} alt="img" />
                        <span className="dissec">50% off</span><br/><br/>
                    </div>
                    <div className="rgt-contents">
                        <span className="p1">Brand Name : {allStore.title}</span><br/><br/>
                        <span className="p2">Description : {allStore.description}</span> <br/>
                        {/* <p>Total Buys : {count}</p>
                        <p>Rating : <i class="fas fa-star fil"></i><i class="fas fa-star fil"></i><i class="fas fa-star fil"></i><i class="far fa-star fil"></i><i class="far fa-star fil"></i> {allStore.rating.rate}/{count}</p> */}
                    </div>
                    <div className="buy-contents">
                        <p className="p5">OriginalPrice : <i class="fas fa-rupee-sign"></i><span className="p4">{discountPrize} </span></p>
                        <p className="p3">Todays Deal : <i class="fas fa-rupee-sign"></i><span className="p6">{allStore.price} </span></p>
                        <button className="btn1">Add To Cart</button><br/>
                        <button className="btn1">Buy</button> <br/><br/>
                        <Link className="btn2" to={ `/` }>
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Details
