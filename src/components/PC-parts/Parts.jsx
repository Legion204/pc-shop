import { useEffect } from "react";
import { useState } from "react";
import Part from "../PC-part/Part";


const Parts = () => {

    const [parts,setParts]=useState([]);

    useEffect(() => {
        fetch('pc-parts.json')
        .then((res)=>res.json())
        .then((data)=> setParts(data))
    }, []);

    const [cart,setCart]=useState([]);

    const handelAddToCart = part=>{
        const newCart=[...cart,part]
        setCart(newCart)

    }

    return (
        <div>
            <h1 className=" font-bold ">Parts: {parts.length}</h1>
            <h3>cart: {cart.length}</h3>
            <div className="flex justify-center gap-2">
                {
                    cart.map(cart=><img className="w-28" key={cart.id} src={cart.image_url}></img>)
                }
            </div>
            <div className="grid grid-cols-3 gap-5">
            {
                parts.map(part=><Part 
                    key={part.id}
                    part={part}
                    handelAddToCart={handelAddToCart}
                    ></Part>)
            }
            </div>

        </div>
    );
};

export default Parts;