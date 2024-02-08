import React from "react";


const Details = () => {
    return (  <div class="row">
    <div class="col-xs-12 col-sm-6 col-md-6">
        
        <div class="flex product-img-slide">
            <div class="product-images">
                <div class="main-img js-product-slider">
                    <img src="img/single/nike1.jpg" alt="photo" class="img-reponsive"/>

                </div>
                <div class="e-product-button" data-toggle="modal" data-target="#my360"><span>360˚</span></div>
            </div>
            <div class="multiple-img-list-ver2 js-click-product">
                <div class="product-col">
                    <div class="img active">
                        <img src="img/single/nike1.jpg" alt="photo" class="img-reponsive"/>
                    </div>
                </div>
                <div class="product-col">
                    <div class="img">
                        <img src="img/single/nike2.jpg" alt="images" class="img-responsive"/>
                    </div>
                </div>
                <div class="product-col">
                    <div class="img">
                        <img src="img/single/nike3.jpg" alt="images" class="img-responsive"/>
                    </div>
                </div>
                <div class="product-col">
                    <div class="img">
                        <img src="img/single/nike4.jpg" alt="images" class="img-responsive"/>
                    </div>
                </div>
                <div class="product-col">
                    <div class="img">
                        <img src="img/single/nike4.jpg" alt="images" class="img-responsive"/>
                    </div>
                </div>
                <div class="product-col">
                    <div class="img">
                        <img src="img/single/nike4.jpg" alt="images" class="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
           
        
    </div>
    <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="single-flex">
            <div class="single-product-info product-info product-grid-v2 s-50">
                <p class="product-cate">Audio Speakers</p>
                <div class="product-rating">
                    <span class="star star-5"></span>
                    <span class="star star-4"></span>
                    <span class="star star-3"></span>
                    <span class="star star-2"></span>
                    <span class="star star-1"></span>
                    <div class="number-rating">( 896 reviews )</div>
                </div>
                <h3 class="product-title"><a href="#">Bang & Olufsen Beoplay</a></h3>
                <div class="product-price">
                    <span>$1,215.00</span>
                </div>
                <div class="availability">
                    <p class="product-inventory"> <label>Availability : </label><span> In stock</span></p>
                </div>
                <div class="product-brand">
                    <p>Brand :</p>
                    <img src="img/single/sony_brand.png" alt=""/>
                </div>
                <div class="product-sku">
                    <label>SKU :</label><span> 8900105789430</span>
                </div>
                <div class="short-desc">
                    <p class="product-desc">Uses a dictionary of over combined with a handful of model sentence structures, to generate lorem Ipsum which looks reasonable.</p>
                    <ul class="desc-list">
                       <li>Connects directly to Bluetooth</li> 
                       <li>Battery Indicator light</li> 
                       <li>DPI Selection:2600/2000/1600/1200/800</li> 
                       <li>Computers running Windows</li> 
                    </ul>
                </div>
                <div class="color-group">
                    <label>Color :</label>
                    <a href="#" class="circle black"></a>
                    <a href="#" class="circle red"></a>
                    <a href="#" class="circle gray"></a>
                </div>

                <div class="single-product-button-group">
                    <div class="e-btn cart-qtt btn-gradient">
                        <div class="e-quantity">
                          <input type="number" step="1" min="1" max="999" name="quantity" value="1" title="Qty" class="qty input-text js-number" size="4"/>
                          <div class="tc pa">
                             <a class="js-plus quantity-right-plus"><i class="fa fa-caret-up"></i></a>
                             <a class="js-minus quantity-left-minus"><i class="fa fa-caret-down"></i></a>
                          </div>
                       </div>
                       <a href="#" class="btn-add-cart">Add to cart <span class="icon-bg icon-cart v2"></span></a>
                    </div>
                    <a href="#" class="e-btn btn-icon">
                        <span class="icon-bg icon-wishlist"></span>
                    </a>
                    <a href="#" class="e-btn btn-icon">
                        <span class="icon-bg icon-compare"></span>
                    </a>
                </div>

                <div class="product-tags">
                    <label>Tags :</label>
                    <a href="#">Fast,</a>
                    <a href="#">Gaming,</a>
                    <a href="#">Strong</a>
                </div>
            </div>
            <div class="single-product-feature s-50 hidden-xs hidden-sm">
                <div class="bd-7">
                    <div class="single-feature-box">
                        <div class="single-feature-img">
                            <img src="img/feature/credit-card2.png" alt=""/>
                        </div>
                        <div class="single-feature-info">
                            <h3>Safe Payment</h3>
                            <p>Pay with the world’s most payment methods.</p>
                        </div>
                    </div>

                    <div class="single-feature-box">
                        <div class="single-feature-img">
                            <img src="img/feature/safety2.png" alt=""/>
                        </div>
                        <div class="single-feature-info">
                            <h3>Confidence</h3>
                            <p>Protection covers your purchase</p>
                        </div>
                    </div>

                    <div class="single-feature-box">
                        <div class="single-feature-img">
                            <img src="img/feature/truck2.png" alt=""/>
                        </div>
                        <div class="single-feature-info">
                            <h3>Worldwide Delivery</h3>
                            <p>Ship to over 200 countries & regions.</p>
                        </div>
                    </div>
                </div>
                <div class="hot-line e-gradient">
                    <p>Hotline</p>
                    <div class="flex align-center tele">
                        <img src="img/feature/hotline.png" alt=""/>
                        <div class="phone-number">
                            <p>(+123) 456 789 </p>
                            <p>(+123) 666 888</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>);
}

export default Details;