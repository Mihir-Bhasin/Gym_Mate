import React from 'react'
import  Slider  from './Slider';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">

            <Slider />
            
            <br></br>
           <br></br>
            <h1 >DEALS OF THE DAY </h1>

             {/* product id,title ,price, rating,image */}
             <div className="home__row">
                        <Product
                        id="1"
                        title="IN2 Isolate 100% 3lbs/1.5kgs"
                        price={7999}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637826760957__IN2-300x300.gif"
                    />
                    <Product
                        id="2"
                        title="Scivation Xtend BCAA 30 servings"
                        price={2499}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1638261960679__300x300.gif"
                    />
                    <Product
                        id="3"
                        title="SuperFit Effecvescent Tablets-MultiVitamins"
                        price={699}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1638262141032__300x300(2).gif"
                    />
                    <Product
                        id="4"
                        title="Apple Cider Vinegar with Mother"
                        price={750}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-pic/1638262170162__600x600(1).gif"
                    />
           </div>
           <br></br>
           <br></br>
           <br></br>
           <h1 >PROTEIN</h1>

           <div className="home__row">
                        <Product
                        id="5"
                        title="1UP Nutrition Whey Protein Blend 5lbs"
                        price={5949}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637763739091__1.webp"
                    />
                    <Product
                        id="6"
                        title="Optimum Nutrition ON Gold Standard 5 lbs"
                        price={6499}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1625469499604__1300.webp"
                    />
                    <Product
                        id="7"
                        title="IN2 Whey Protein 2.3kgs + Free IN2 Omega 3"
                        price={4444}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637916205535__Whey%20Protein+Combo-2.webp"
                    />
                   
           </div>
           <div className="home__row">
                        <Product
                        id="8"
                        title="Mutant Iso Surge Isolate Whey 5lbs"
                        price={11999}
                        rating={3}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1638178634115__Iso%20Surge%20Isolate-1.webp"
                    />
                    <Product
                        id="9"
                        title="Evogen Nutrition Greentein 1.62lbs"
                        price={5500}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1638178846022__Greentein-1.webp"
                    />
                    <Product
                        id="10"
                        title="Scitron Series Premium Whey 2kg + Aesthetic Indian Slevless"
                        price={6985}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1624088609499__scitron05.webp"
                    />
                   
           </div>
           <br></br>
           <br></br>
           <br></br>
           <h1 >GAINERS</h1>
           <div className="home__row">
                        <Product
                        id="11"
                        title="IN2 Mass Gainer 1.2kgs"
                        price={1300}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637237857246__1.webp"
                    />
                    <Product
                        id="12"
                        title="Labrada Muscle Mass Gainer 5 kgs"
                        price={4555}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1638986014883__Gainer%205kg-1.webp"
                    />
                    <Product
                        id="13"
                        title="Mutant Mass Gainer 6.8kgs"
                        price={10500}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/17-16-1_300x300.webp"
                    />
                   
           </div>
           <br></br>
           <br></br>
           <br></br>
           <h1 >PERFORMANCE</h1>
           <div className="home__row">
                        <Product
                        id="14"
                        title="Muscletech Essential Series Platinum 100% Glutamine 302gms"
                        price={1300}
                        rating={2}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1628926334543__37-38-1_300x300.webp"
                    />
                    <Product
                        id="15"
                        title="1UP Nutrition BcaaS, Glutamine & Joint Support Plus Hydration Complex"
                        price={1600}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637763633804__1.webp"
                    />
                   
                   
           </div>
           {/* image peanut */}
        <div className="home__peanut">
          <img src="https://api.sourceofsupplements.com/banner/1638106602036__Alpino-Banner-Mobile.gif" alt="" />
         
        </div>

        <h1 >HEALTHY SNACKS</h1>
        <div className="home__row">
                        <Product
                        id="16"
                        title="Alpino Chocolate Peanut Butter 1kgs"
                        price={459}
                        rating={3}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1637764665421__Chocolate%20Peanut%20Butter-1.webp"
                    />
                    <Product
                        id="17"
                        title="My Fitness Peanut Butter 1250gms Smooth"
                        price={589}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1621348120734__OPB12501%20-%201.webp"
                    />
                   <Product
                        id="18"
                        title="Grainic Rice Cakes - Pack Of 6"
                        price={888}
                        rating={5}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1598465720250__Graininc%20rice%20Pack%20of%206%20300x300.webp"
                    />
                    <Product
                        id="19"
                        title="Habbit Super Shake 20serving"
                        price={1060}
                        rating={4}
                        image="https://api.sourceofsupplements.com/product-variant-thumbnail/1627832749930__habbit%20super%20shake0.webp"
                    />
                   
           </div>


        </div>
    )
}

export default Home
