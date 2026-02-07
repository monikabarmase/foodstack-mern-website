import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className='container'>
        <div className='heading_section'>
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>oven-baked ribs, roast chicken, lasagna, and pasta,
             alongside global favorites such as pizza, tacos, sushi, 
             and curry. Indian cuisine highlights include biryani,
              butter chicken, dosa, and samosas.</p>
        </div>
        <div className='dishes_container'>
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className='card' key={element.id}>
                            <img src={element.image} alt={element.title} />
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                         </div>   
                    );
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Menu