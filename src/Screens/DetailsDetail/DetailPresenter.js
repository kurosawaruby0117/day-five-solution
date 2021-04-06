import React, { lazy } from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const TitleOfComponent=styled.div`
    margin-bottom:10px;
`

const SpanOfComponent=styled.span`
    font-weight:300;
`
var exchanges_arr=[]
const detailtoSHow=(exchanges_detail)=>{
    exchanges_detail.map(exc=>{ 
       var flats_stirng="Pay on ";
       if(exc.fiats.length!==0){
         exc.fiats.map(fiat=>{
             flats_stirng+=fiat.symbol+" "
         })
       }
        const arra_=(
            <TitleOfComponent key={exc.id}>
                <h3>{exc.name}</h3>
                {
                    exc.fiats.length===0?<></>:<span>{flats_stirng}</span>
                }
                    
            </TitleOfComponent>
        )
        exchanges_arr.push(arra_);
    })
}
const DetailPresenter = ({exchanges_detail,loading}) =>{
    if(!loading){
        detailtoSHow(exchanges_detail)
    }
    
   return(
        loading?<Loader/>:<div>{exchanges_arr}</div>
       )
       
   
   
  
};

export default DetailPresenter;
