import React from 'react';
import { Link } from 'react-router-dom';
import chefCook from '../../onion-restaurent/ICON/Group 1133.png';
import deliveryImg from '../../onion-restaurent/ICON/Group 204.png';
import cart from '../../onion-restaurent/ICON/Group 245.png';
import burger from '../../onion-restaurent/Image/burger.png';


const DeliveryFood = () => {
    return (
      <div className="container mt-4">
        <div>
          <h4>Why you choose us</h4>
          <p>
            Red onion is most popular food in Bangladesh because of it's service
            and fastest delivery at any place.
          </p>
            </div>
            <div className='card'>
                <img src={burger} alt=''/>
                <div className='d-flex card-body'>
                    <div className='p-3'>
                        <img src={deliveryImg} alt=''/>
                    </div>
                    <div>
                        <h1>Fast Delivery</h1>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                        <Link>See more</Link>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={chefCook} alt=''/>
                <div className='d-flex card-body'>
                    <div className='p-3'>
                        <img src={deliveryImg} alt=''/>
                    </div>
                    <div>
                        <h1>Fast Delivery</h1>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                        <Link>See more</Link>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={cart} alt=''/>
                <div className='d-flex card-body'>
                    <div className='p-3'>
                        <img src={deliveryImg} alt=''/>
                    </div>
                    <div>
                        <h1>Fast Delivery</h1>
                        <p>Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future</p>
                        <Link>See more</Link>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default DeliveryFood;