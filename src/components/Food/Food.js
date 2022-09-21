import React from 'react';
import './Food.css';


const Food = (props) => {
 const  {strDrink, strTags, strCategory, strDrinkThumb,dateModified }  = props.food;
//  dateModified = dateModified.substring(0, 10)
// let date = dateModified.substring(0, 7);
    return (  
        <div className='Food'>
            <h1>hello from food</h1>   
            <h3>name: {strDrink}</h3>
            {/* validati checking */}
           {/* {
            strTags? (
                <h4>tag: {strTags}</h4>
            )
            : <h4>no tag available</h4>
           } */}
           <h3>{strTags || 'no tag'}</h3>
            <h5>category: {strCategory}</h5> 
           <img src={strDrinkThumb} alt="" srcset="" style={{width: 200 }} />  
           {/* <p>Realseased date: {dateModified.substring(0, 10)}</p>  */}
           <p>Realseased date: {dateModified}</p> 
        </div>
    );
};

export default Food;