import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Cart from "./Cart";

function cartSection() {
  return (
    <div className="container">
      <div className="row">
        <div className=" col-12 d-flex">
          <Cart className="col-12 col-sm-6  col-md-4"
            image="https://cdn.dsmcdn.com/ty636/pimWidgetApi/mobile_20221212054600_2298151EvYasamMobile202212091901.jpg"
            explain="Çok Amaçlı Dolaplar"
          ></Cart>
          <Cart className="col-12  col-sm-6 col-md-4"
            image="https://cdn.dsmcdn.com/ty672/pimWidgetApi/mobile_20230104101131_2298900KadinMobile202301031801.jpg"
            explain="Pull$Bear-Büyük Kış İndir..."
          ></Cart>
           <Cart className="col-12  col-sm-6  col-md-4"
            image="https://cdn.dsmcdn.com/ty614/campaign/banners/original/617853/4b794ef739_0.jpg"
            explain="Mobilyada En Favori Ürünler"
          ></Cart>
          
        </div>
        
      </div>
      <div className="row mt-5">
        <div className="col-12 d-flex">
          <Cart
            image="https://cdn.dsmcdn.com/ty645/pimWidgetApi/mobile_20221215072150_11111KadinMobile202211291502.jpg"
            explain="Mango-Kadı&Erkek Tek..."
          ></Cart>
          <Cart
            image="https://cdn.dsmcdn.com/ty671/campaign/banners/original/618606/d63419e34f_0.jpg"
            explain="Oyuncak-2022'nin En çok..."
          ></Cart>
           <Cart
            image="https://cdn.dsmcdn.com/ty674/campaign/banners/original/618519/a42235b6af_0.jpg"
            explain="Bershka-Büyük Kış İndirimi"
          ></Cart>
          
        </div>
        
      </div>
    </div>
  );
}

export default cartSection;
