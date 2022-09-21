import React from 'react';
import './Food.css'

const Food = (props) => {
 const  {strDrink, strTags, strCategory, strDrinkThumb} = props.food;
    return (  
        <div className='Food'>
            <h1>hello from food</h1>   
            <h3>name: {strDrink}</h3>
            {/* validati checking */}
           {
            strTags? (
                <h4>tag: {strTags}</h4>
            )
            : <h4>no tag available</h4>
           }
            <h5>category: {strCategory}</h5> 
           <img src={strDrinkThumb} alt="" srcset="" style={{width: 200 }} />  
        </div>
    );
};

export default Food;