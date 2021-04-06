import React from "react";
import CoinsDetailPresenter from "./CoinsDetailPresenter";
import { getExchanges } from "../../api";
import { API } from "../../Components/Api";
import { useParams } from "react-router";

export default class extends React.Component {

  state = {
    loading: true,
    detail: null
  };
  getDetail = async () => {
    const link_id=window.location.href;
    const link_array=link_id.split("/");
    console.log(link_array);
    try {
      const { data: detail } = await API.detail(link_array[5]);
      console.log(detail)
      this.setState({ detail });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  componentDidMount() {
       this.getDetail();
  }
  render() {
    return <CoinsDetailPresenter {...this.state} />;
  }
}
