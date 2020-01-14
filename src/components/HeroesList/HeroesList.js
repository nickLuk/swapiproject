import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";
import "./HeroesList.css";
import HeroesItem from "./HeroesItem/HeroesItem";

const HeroesList = ({ HeroesList, onFoto, pageChangeHandler }) => {
   
    let i=1;
  const listItem = HeroesList.map(item => {

    return (
      <HeroesItem
        name={item.name}
        key={i++}
      
        height={item.height}
        mass={item.mass}
        hair_color={item.hair_color}
        skin_color={item.skin_color}
        eye_color={item.eye_color}
        birth_year={item.birth_year}
        gender={item.gender}
        homeworld={item.homeworld}
        onFoto={() => onFoto (item.name)}
       
      ></HeroesItem>
    );
  });

  return (
    <Fragment>
      
              <h1 className="row d-flex justify-content-center">Star Wars</h1>
           
      {listItem}
      

      


    
    </Fragment>
     
  );
};

export default HeroesList;
