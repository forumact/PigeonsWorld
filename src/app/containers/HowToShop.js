import React from 'react';
import HeadLine from "../components/HeadLine";
import { useTitle } from "../helper/MainHelper";

const HowToShop = () => {
  const title = "How To Shop";
  useTitle(title);
  return (
    <div>
      <HeadLine title={title}></HeadLine>
    </div>
  );
}


export default HowToShop;