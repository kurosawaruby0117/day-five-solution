import React, { lazy } from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const TitleOfComponent=styled.div`
    font-weight:600;
    margin-bottom:10px;
`

const SpanOfComponent=styled.span`
    font-weight:300;
`

const Div_Margin=styled.div`
    margin-bottom:10px;
`
var exchanges_arr=[]
const detailtoSHow=(markets)=>{
    var i=0;
    markets.map(exc=>{ 
 
        const arra_=(
            <Div_Margin key={i}>
               <a href={exc.market_url} target="_blank">{exc.exchange_name}</a> 
            </Div_Margin>
        )
        i=i+1;
        exchanges_arr.push(arra_);
    })
}
const MarketPresenter = ({markets,loading}) =>{
    if(!loading){
        detailtoSHow(markets);
    }
    if(loading){
        return(
            <Loader></Loader>
        )
    }  
   return(
    loading?<Loader/>:<div>{exchanges_arr}</div>
   )
   
  
};

export default MarketPresenter;
