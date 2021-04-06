import React from "react";
import MarketPresenter from "./MarketPresenter";
import { API, getExchanges } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    markets: []
  };
  markets = async () => {
    try {
        const link_id=window.location.href;
        const link_array=link_id.split("/");
        const { data: markets } = await API.markets(link_array[5]);
        const newMarkets=markets.slice(0,50);
        this.setState({ markets:newMarkets });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.markets();
  }
  render() {
    return <MarketPresenter {...this.state} />;
  }
}
