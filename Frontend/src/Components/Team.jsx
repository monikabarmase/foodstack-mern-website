import React from 'react'
import { data } from "../restApi.json";

const Team = () => {
  return  <section className='team' id='team'>
          <div className='container'>
          <div className='heading_section'>
                <h1 className='heading'>Our Team</h1>
                <p>"Our team is more than just staff—we are a family
                  dedicated to providing the best service and a comfortable,
                 welcoming environment. Whether it's crafting the perfect 
                 coffee, cooking a signature dish, or serving you with a 
                 smile, we focus on making every visit special. </p>
            </div>
            <div className='team_container'>
                {
                    data[0].team.map(element=>{
                        return(
                            <div className ='card' key = {element.id}>
                                <img src = {element.image} alt = {element.name}/>
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
  
}

export default Team;