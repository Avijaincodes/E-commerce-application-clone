import React from 'react'
import Carousel from './Carousel';
import HomePageCard from './HomePageCard';
import CarouselCategory from './CarouselCategory';
import CarouselProduct from './CarouselProduct';
import Navbar from './Navbar';


const HomePage = () => {
  return (
    <div className="bg-amazon-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto ">
          <Navbar/>
         
            
            <Carousel/>
            <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80" >
                <HomePageCard title={"We have a surprise for you"}
                img={"../images/home_grid_1.jpg"}
                link={"see terms and conditions"}/>
                <HomePageCard title={"Watch The Rings of Power"}
                img={"../images/home_grid_2.jpg"}
                link={"see terms and conditions"}/>

                <HomePageCard title={"Unlimited Streaming"}
                img={"../images/home_grid_3.jpg"}
                link={"Find out more here "}/>

                <HomePageCard title={"More titles to explore "}
                img={"../images/home_grid_4.jpg"}
                link={"Unimited kindle Browse"}/>

                <HomePageCard title={"Shop Pet Supplies"}
                img={"../images/home_grid_5.jpg"}
                link={"See More"}/>

                <HomePageCard title={"Spring Sales"}
                img={"../images/home_grid_6.jpg"}
                link={"See the Details"}/>

                <HomePageCard title={"Echo Buds"}
                img={"../images/home_grid_7.jpg"}
                link={"See More"}/>

                <HomePageCard title={"Family Plan : 3 Months Free"}
                img={"../images/home_grid_8.jpg"}
                link={"Learn More"}/>

                <div className="m-3 pt-8"> 
                  <img className="xl:hidden"  src= {"../images/banner_image_2.jpg"}/>  
                </div>


                

            </div>
            <CarouselProduct/>
            <CarouselCategory/>
        </div>
        <div className="h-[200px]">
          <img className="h-[100%] m-auto" src="../images/banner_image.jpg"/>
        </div>
     
    </div>
  )
}

export default HomePage
