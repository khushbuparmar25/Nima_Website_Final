import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="Footer__heading" style={{textAlign:"left"}}>Office Add.</div>
      <div className="Footer__subheading" style={{textAlign:"left"}}>
        <div>G/2, Mohan Kunj, M.J.</div>
        <div> Phule Road, Naigon, Dadar(East),</div>
        <div>Mumbai - 400014</div>
        <div>Ph : 022-24123407</div>
        <div>3:00pm - 5:00pm</div>
        <div>Sunday closed</div>
      </div>
      <div className="footer_upcloud">
        {/* <p>Powered by Upcloud Technology Pvt Ltd</p> */}
      </div>
    </div>
  );
}


export default Footer;
