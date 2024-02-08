import React from "react";

const Header = () => {
    return(
    <header id="header" className="header-v3 bg-w">
        <div className="header-center">
            <div className="container container-240">
                <div className="row flex">
                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 v-center header-logo">
                        <a href="#"><img src="img/logo.png" alt="" className="img-reponsive"/></a>
                    </div>
                    <div className="col-lg-7 col-md-7 v-center header-search hidden-xs hidden-sm">
                        <form method="get" className="searchform ajax-search" action="/search" role="search">
                            <input type="hidden" name="type" value="product"/>
                            <input type="text" onBlur={() => {}} onFocus={() => {}} name="q" className="form-control" placeholder="i’m shoping for..."/>
                            <ul className="list-product-search hidden-xs hidden-sm">
                                <li></li>
                            </ul>
                            <div className="search-panel"></div>
                            <span className="input-group-btn">
                                <button className="button_search" type="button"><i className="ion-ios-search-strong"></i></button>
                            </span>
                        </form>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 v-center header-sub">
                        <div className="right-panel">
                            <div className="header-sub-element hidden-xs hidden-sm"></div>
                            <div className="header-sub-element row">
                                <a className="hidden-xs hidden-sm" href=""><img src="img/icon-user.png" alt=""/></a>
                                <a href="#"><img src="img/icon-heart.png" alt=""/></a>
                                <a href="#" className="hidden-md hidden-lg icon-pushmenu js-push-menu"><i className="fa fa-bars f-15"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom hidden-xs hidden-sm">
            <div className="container container-240">
                <div className="row">
                    <div className="col-lg-3 widget-verticalmenu">
                        <div className="navbar-vertical"></div>
                        <div className="vertical-wrapper">
                            <ul className="vertical-group">
                                <li className="vertical-item level1 mega-parent"><a href="#">New Arrivals</a></li>
                                <li className="vertical-item level1 vertical-drop"><a href="#">Electronics Showcase</a>
                                    <div className="menu-level-1 dropdown-menu vertical-menu">
                                        <ul className="vertical-menu1">
                                            <li><a href="#">Car Audio</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <div className="menu-level-1 dropdown-menu vertical-menu v2 pd">
                                    <div className="row"></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}

export default Header;