import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="FooterContainer">
      <p>Nigeria </p>
      <footer>
        <ul>
          <li>
            <a href="https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1">
              {" "}
              About
            </a>{" "}
          </li>
          <li>
            <a href="https://ads.google.com/intl/en_ng/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
              {" "}
              Advertising
            </a>{" "}
          </li>
          <li>
            <a href="https://smallbusiness.withgoogle.com/intl/en-ssa/?subid=ng_en-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google&utm_medium=ep&utm_campaign=google_hpbfooter&utm_content=google_hpbfooter&gmbsrc=ng-en_GB-et-gs-z-gmb-s-z-u~sb-g4sb_srvcs-u#!/">
              {" "}
              Business
            </a>{" "}
          </li>
          <li>
            <a href="https://www.google.com/search/howsearchworks/?fg=1">
              {" "}
              How Search Works
            </a>{" "}
          </li>
        </ul>
        <div>
          <li>
            <a href="https://sustainability.google/carbon-free/?utm_source=googlehpfooter&utm_medium=housepromos&utm_campaign=bottom-footer&utm_content=#home">
              Carbon neutral since 2007
            </a>{" "}
          </li>
        </div>
        <ul>
          <li>
            {" "}
            <a href="https://policies.google.com/privacy?hl=en-NG&fg=1">
              Privacy{" "}
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/terms?hl=en-NG&fg=1">Terms </a>
          </li>
          <li>
            {" "}
            <a href="https://policies.google.com/privacy?hl=en-NG&fg=1">
              Settings{" "}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
