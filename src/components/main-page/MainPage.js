import React from "react";
import "./main.css"

class Main extends React.Component {
    render() {
        return (

            <React.Fragment>
           
                <div id="carouselExampleIndicators" className="carousel slide page-changes" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="slide-show-img" src="https://static.onecms.io/wp-content/uploads/sites/35/2015/06/19163438/running-on-the-beach-sand-workout.jpg" class="d-block w-100" alt="BeacRunning" />
                            <div className="carousel-caption black-text-color">
                                <h1>Don't WAIT The TIME will never be just right!</h1>

                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="slide-show-img d-block w-100" src="https://www.fossil.com/on/demandware.static/-/Library-Sites-FossilSharedLibrary/default/dw86b5ca8a/2021/SP21/set_0117/hp/0117_Homepage_Hero4_Desktop@2x.jpg" alt="girl" />
                            <div className="carousel-caption black-text-color">
                                <h1>Watch your Dreams come TRUE!</h1>

                            </div>
                        </div>

                        <div className="carousel-item">
                            <img className="slide-show-img d-block w-100" src="https://i0.wp.com/manyfaces.armitron.com/wp-content/uploads/2017/12/BlogHeader12_05.jpg?resize=1140%2C660" alt="person typing on" />
                            <div className="carousel-caption black-text-color">
                                <h2>Having the GREATEST times of your LIFE</h2>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div class="grid-container">
                    <div class="grid-item item-1">
                        <h3>free return policy </h3>
                    </div>

                    <div class="grid-item item-2">
                        <h3>DEALS OF THE DAY</h3>

                    </div>
                    <div class="grid-item item-3">
                        <h3>LUXURY WATCH SALE</h3>
                    </div>
                    <div class="grid-item item-4">
                        <h3>FALL CLEARENCE</h3>
                    </div>
                    <div class="grid-item item-5">
                        <h3>WATCHES IN STOCK</h3>
                    </div>
                    <div class="grid-item item-6">

                        <div class="cir1"></div>
                        <div class="cir2"></div>
                        <div class="cir3"></div>
                        <div class="cir4"></div>
                        <div class="cir5"></div>
                    </div>

                    <div class="grid-item item-7">

                    </div>

                    <div class="grid-item item-8">

                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Main;