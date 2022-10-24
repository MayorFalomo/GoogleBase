import React from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div>
      <div className="search">
        <Helmet>
          <script
            async
            src="https://cse.google.com/cse.js?cx=73c63e6cec9e54102"
          ></script>
        </Helmet>
        <div className="gcse-searchbox-only"></div>
      </div>
    </div>
  );
};

export default Index;
