import React, { lazy } from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Coin from "../../Components/Coin";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailsDetail from "../DetailsDetail"
import DetailMarkets from "../DetailMarkets"

const TitleOfComponent=styled.div`
    font-weight:600;
    margin-bottom:10px;
`

const SpanOfComponent=styled.span`
    font-weight:300;

`
const ButtonforSelect=styled.button`
    height:50px;
    width:100px;
    background-color:green;
    color:white;
`
const Buttonfor=styled.button`
height:50px;
width:100px;
    color:green;
`
const DetailBlock=({detail})=>{
    const exchangesLink=`${detail.id}/exchanges`
    const marketLink=`${detail.id}/market`
    const link_id=window.location.href;
    const link_array=link_id.split("/");
    return(
        <>
        <h1>{detail.name} / {detail.symbol}</h1>
        <TitleOfComponent><SpanOfComponent>{detail.description}</SpanOfComponent></TitleOfComponent>
        <TitleOfComponent>Rank:<SpanOfComponent>{detail.rank}</SpanOfComponent></TitleOfComponent>
        <TitleOfComponent>Open Sourece:{detail.open_source?<SpanOfComponent>Yes</SpanOfComponent>:<SpanOfComponent>No</SpanOfComponent>}</TitleOfComponent>
        <TitleOfComponent>Proof Type:<SpanOfComponent>{detail.proof_type}</SpanOfComponent></TitleOfComponent>
        <TitleOfComponent>Structure:<SpanOfComponent>{detail.org_structure}</SpanOfComponent></TitleOfComponent>
        {
            link_array.length>6 && link_array[6]==="exchanges"?<><Link to={marketLink}><Buttonfor t={true}>Markets</Buttonfor></Link><Link to={exchangesLink}><ButtonforSelect t={false}>exchanges</ButtonforSelect></Link></>:(
                link_array.length>6 && link_array[6]==="markets"?<><Link to={marketLink}><ButtonforSelect t={true}>Markets</ButtonforSelect></Link><Link to={exchangesLink}><Buttonfor t={false}>exchanges</Buttonfor></Link></>:
                <><Link to={marketLink}><Buttonfor t={true}>Markets</Buttonfor></Link><Link to={exchangesLink}><Buttonfor t={false}>exchanges</Buttonfor></Link></>
            )
        }
        {
            link_array.length>6 && link_array[6]==="exchanges"?<DetailsDetail/>:<DetailMarkets/>
        }
       </>
    )
}
const CoinsDetailPresenter = ({detail,loading}) =>{
   return(
        loading?<Loader/>:(<DetailBlock detail={detail}/>)
        
    )
  
};

export default CoinsDetailPresenter;
