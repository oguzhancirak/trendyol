import Slider from "react-slick";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Button from 'react-bootstrap/Button';

export default class Coursal extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "20px",
      slidesToShow: 10,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    if(window.innerWidth<1100){
      settings.slidesToShow=5;
    }else{
      settings.slidesToShow=10;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-12">
            <Slider {...settings} className="slider ">
              <div>
                <img
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png"
                  alt=""
                />
                <p>Sana Özel</p>
              </div>
              <div>
                <img
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/7/Coksatanlar1_202203072239.png"
                  alt=""
                />
                <p>Sana Özel</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/11/29/Screenshot20221128At163430_202211290324.png"
                  alt=""
                />
                <p>Kurumsal</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15541619355266_Puma.png"
                  alt=""
                />
                <p>Puma</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15531619355211_Nike.png"
                  alt=""
                />
                <p>Nike</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15461619354815_Adidas.png"
                  alt=""
                />
                <p>Adidas</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15561619355397_USPoloAssn.png"
                  alt=""
                />
                <p>US Polo</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15481619354903_CalvinKlein.png"
                  alt=""
                />
                <p>Calvin Klein</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15511619355075_Hummel.png"
                  alt=""
                />
                <p>HUMMEL</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/Automation/BrandBoutique/2021/4/25/20210425_15471619354822_AltinyildizClassics.png"
                  alt=""
                />
                <p>ALTINYILDIZ</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png"
                  alt=""
                />
                <p>Sana Özel</p>
              </div>
              <div>
                <img
                  className="img1"
                  width={70}
                  src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/3/9/Top_Widget_202203091801.png"
                  alt=""
                />
                <p>Sana Özel</p>
              </div>
            </Slider>
            
          </div>
          <div className="row buttonSec ">
            <div className="col-4">
                <Button className="btn btn1 btn-success w-100 h-100">Sepete En Çok Eklenenler</Button></div>
            <div className="col-4">
                <Button className="btn btn2 btn-Primary w-100 h-100">En Çok Öne Çıkanlar</Button></div>
            <div className="col-4">
                <Button className="btn btn3 btn-warning w-100 h-100">Flaş İndirimler</Button></div>
            
          </div>
        </div>
      </div>
    );
  }
}
