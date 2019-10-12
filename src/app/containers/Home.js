import React from 'react';
import HomeBanner from "../components/HomeBanner";
import OurServices from "../components/OurServices";
import ProductShowcase from "../components/ProductShowcase";
import SubscribeBanner from "../components/SubscribeBanner";
import { useTitle } from "../helper/MainHelper";

const Home = () => {
  const title = "Home";
  useTitle(title);
  return (
    <div>
      <HomeBanner></HomeBanner>
      <OurServices></OurServices>
      <ProductShowcase></ProductShowcase>
      <div className="clearfix"></div>
      <SubscribeBanner></SubscribeBanner>
    </div>
  );

}

export default Home;