import React from "react";
import "./Checkout.css";
 import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
          <div className="checkout__ad">
                          <img
                            
                            src="https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963__340.jpg"
                            alt=""
                          />
                          <img
                            
                            src="https://api.sourceofsupplements.com/banner/1636802047309__SOS_mobile_1.jpg"
                            alt=""
                          />

                  <img src="https://api.sourceofsupplements.com/slider/1636631962958__SOS08_mobile.jpg" />
                  <img src="https://api.sourceofsupplements.com/banner/1636802014362__SOS_mobile_2.jpg" />
             </div>
      
        <div>
          {/* <h3>Hello, {user?.email}</h3> */}
        
        {basket?.length ===0 ?(
          <div>
            <h2>Can't Find your Gains</h2>
            <p>Cardio? Is that Spanish?</p>

          </div>
        ) : (
          <div>

                  <h2 className="checkout__title">You are 1 Protein Shake Away</h2>
                  <p>I ate healthy and exercised today. I better wake up skinny tomorrow.</p>
                  

                  {basket.map( item => (
                    
                    <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />
                  ))}
          </div>
        )}
          

        </div>
      </div> 

      <div className="checkout__right">
     
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;