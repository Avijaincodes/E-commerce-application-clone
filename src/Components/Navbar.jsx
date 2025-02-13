import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import  Search from './Search'

const Navbar = () => {
    const cart= useSelector((state)=>state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
        <div className="flex bg-black text-white h-[60px]">
        <div className="flex items-center m-4">
            <Link to={"/"}>
            <img className="h-[35px] w-[100px] m-2" src={"../images/amazon.png"}/>
            </Link>
           
            <div className="pl-4 pr-4">
                <div className="text-xs xl:text-sm">Deliver to</div>
                <div className="text-xs xl:text-base font-bold">India</div>
            </div>
           
        </div>
        <div className="flex grow relative items-center">
         <Search/>
        </div>  
        <div className="flex items-center m-4">
        <div className="pl-4 pr-4">
                <div className="text-xs xl:text-sm">Hello, Sign In</div>
                <div className="text-xs xl:text-base font-bold">Accounts & Lists</div>
            </div>
            <div className="pl-4 pr-4">
                <div className="text-xs xl:text-sm">Returns</div>
                <div className="text-xs xl:text-base font-bold">& Orders</div>
            </div>
            <Link to={"/checkout"}>
           
            <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]"/>
            <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400">
                    {
                        cart
                    }

                </div>

            </div>
            <div className=" mt-6 text-xs xl:text-sm font-bold">Cart
            </div>
           
        </div>
        </Link>
        
        </div>
        </div>
        
        
        <div className="flex bg-amazon-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
            <div>Today's Deals</div>
            <div>Customer Service</div>
            <div>Registry</div>
            <div>Gift Cards</div>
            <div>Sells</div>
            </div>
    </header>
    
  )
}

export default Navbar
