import React from 'react'

export default function card(props) {
  return (
  <>
   <div  className="card">
{/*     
        <div className="card__overlay"> */}
          {/* <div className="card__header"> */}
            {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg> */}
            <h3 className="card__title">{props.title}</h3>
            
            <div className="card__header-text">
           
              <span className="card__price">{props.price}</span>
            </div>
            <p className="card__description">{props.desc}</p>
            <p>{props.category}</p>
          
            <div>
            <img src={props.image} className="card__image" alt="" />
            </div>
         
          {/* </div> */}
          
        {/* </div> */}
      </div>
  </>
  )
}
