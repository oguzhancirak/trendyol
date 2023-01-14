import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Slider from "react-slick";

export default class OneCikanlar extends Component {
  render() {
    const settings = {
      className: "col",
      centerMode: false,
      infinite: false,
      centerPadding: "20px",
      slidesToShow: 6,
      speed: 500,
    };
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col cardSection ">
            <h1>Öne Çıkanlar</h1>
            <Slider {...settings}>
              <div className="card product me-5 position-relative">
                <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
              
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty634/product/media/images/20221209/18/232978240/145421792/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">BEOHOME </span>
                     Lüx Dolap
                  </p>
                  <p className="card-text ">
                    Çekmece kulpu Kumru Kulp...
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
              <div className="card product">

              <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
              <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty455/product/media/images/20220615/12/125827265/113922589/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">DoğubeyStore </span>
                    Dijital Kalemli
                  </p>
                  <p className="card-text ">
                    Çizim Yazı Tahtası lcd
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
              <div className="card product">
              <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
              <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty579/product/media/images/20221029/18/203705906/609158094/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">MONALİKA </span>
                    At Karala Parabox
                  </p>
                  <p className="card-text ">
                    -10.000tl Kumbara,Para...
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
               <div className="card product">
               <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
               <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty633/product/media/images/20221209/17/232930556/145421808/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">BEOHOME </span>
                     Lüx Dolap
                  </p>
                  <p className="card-text ">
                    Çekmece kulpu Kumru Kulp...
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,10
                  </p>
                  
                </div>
              </div>
              <div className="card product">
              <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
              <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty676/product/media/images/20230105/12/252270123/338448463/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">VentiSette </span>
                     2 Adet Kapitoneli
                  </p>
                  <p className="card-text ">
                    Fermuarlı Beyaz Renk Yastık...
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
              <div className="card product">
              <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
              <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty449/product/media/images/20220606/18/122218897/492873362/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">Dr.Royal Natural Life </span>
                     Slim
                  </p>
                  <p className="card-text ">
                    Coffe 1 Aylık Diyet Kahve
                  </p>
                  <p className="card-text  text-warning tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
              <div className="card product">
              <div className="position-absolute iconİmage"><img src="https://cdn.dsmcdn.com//marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" /></div>
              <div className="position-absolute iconHeart"><i class="bi bi-heart"></i></div>
                <img
                  src="https://cdn.dsmcdn.com/mnresize/1200/1800/ty634/product/media/images/20221209/18/232978240/145421792/1/1_org_zoom.jpg"
                  className="card-img-top "
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    <span className="card-title">BEOHOME </span>
                     Lüx Dolap
                  </p>
                  <p className="card-text ">
                    Çekmece kulpu Kumru Kulp...
                  </p>
                  <p className="card-text  tutar">
                    2,29
                  </p>
                  
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
