import React from "react";
import BaseStyles from "../base.jsx";

const Footer = () => {
    return (
        <footer>
            <BaseStyles />
            <div className="f-top">
                <div className="container container-240">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <div className="footer-block footer-about">
                                <div className="f-logo">
                                    <a href="#"><img src="img/logo.png" alt="" className="img-reponsive"/></a>
                                </div>
                                <ul className="footer-block-content">
                                    <li className="address">
                                        <span>45 Grand Central Terminal New York,NY 1017 United State USA</span>
                                    </li>
                                    <li className="phone">
                                        <span>(+123) 456 789 - (+123) 666 888</span>
                                    </li>
                                    <li className="email">
                                        <span>Contact@yourcompany.com</span>
                                    </li>
                                    <li className="time">
                                        <span>Mon-Sat 9:00pm - 5:00pm  &nbsp;&nbsp;&nbsp;  Sun : Closed</span>
                                    </li>
                                </ul>
                                <div className="footer-social social">
                                    <h3 className="footer-block-title">Follow us</h3>
                                    <a href="#" className="fa fa-twitter"></a>
                                    <a href="#" className="fa fa-dribbble"></a>
                                    <a href="#" className="fa fa-behance"></a>
                                    <a href="#" className="fa fa-instagram"></a>
                                </div>
                            </div>
                        </div>
                        {/* Остальная часть вашего компонента */}
                    </div>
                </div>
            </div>
            <div className="f-bottom">
                <div className="container container-240">
                    <div className="row flex lr">
                        <div className="col-xs-6 f-copyright"><span>© 2010-2018 EngoTheme. All rights reserved.</span></div>
                        <div className="col-xs-6 f-payment hidden-xs">
                            <a href="#"><img src="img/payment/mastercard.png" alt="" className="img-reponsive"/></a>
                            <a href="#"><img src="img/payment/paypal.png" alt="" className="img-reponsive"/></a>
                            <a href="#"><img src="img/payment/visa.png" alt="" className="img-reponsive"/></a>
                            <a href="#"><img src="img/payment/american-express.png" alt="" className="img-reponsive"/></a>
                            <a href="#"><img src="img/payment/western-union.png" alt="" className="img-reponsive"/></a>
                            <a href="#"><img src="img/payment/jcb.png" alt="" className="img-reponsive"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;