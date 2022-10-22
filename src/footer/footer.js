import "./footer.css"

export default function footer() {
    const image = require("../img/logo_kasa_footer.png").default;

    return (
    <div className="main_footer">
        <div className="container">
                <img src={image} />
        <p className="footer_text">
        © 2020 Kasa. All rights reserverd
        </p>
        </div>
    </div>
    );
  }

