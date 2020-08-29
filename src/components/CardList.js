import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import Images from '/.Images';

const CardList = (props) => {

  return(
 <>
   <label htmlFor="search">Search by name </label>
   <input type="text" value ={props.inputValue}  onChange={props.petFilterOnChange}/>
     <div className="dog-list">
        {
           props.pets.map(pet => {
           return <PetItem pet={pet} key={pet.id} handlePetView={props.handlePetView}/>
           })
        }
     </div>
  </>
    )
   }


export default CardList
