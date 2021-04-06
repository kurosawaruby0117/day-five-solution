import React from "react";
import DetailPresenter from "./DetailPresenter";
import { API, getExchanges } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    exchanges_detail: []
  };
  exchanges = async () => {
    try {
        const link_id=window.location.href;
        const link_array=link_id.split("/");
        const { data: exchanges_detail } = await API.exchanges(link_array[5]);
        this.setState({ exchanges_detail });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
    this.exchanges();
  }
  render() {
    return <DetailPresenter {...this.state} />;
  }
}
