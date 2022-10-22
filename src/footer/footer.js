import "./footer.css"

export default function footer() {
    const image = require("../img/logo_kasa_footer.png").default;

    return (
    <div className="footer">
        <img src={image} />
        <p className="footer_text">
        © 202 Kasa. All rights reserverd
        </p>
   </div>
    );
  }

