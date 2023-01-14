import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import $ from 'jquery';





function Header() {
  // $(".bi-person").mouseover(()=> { 
  //   console.log("mouse üzerine geldi")
  //   $(".bi-person").addClass("bi-person-fill").removeClass("bi-person")
  // });
  // $(".bi-person").mouseout(()=> {
  //   console.log("mouse üzerine ayrıldı")
  //   $(".bi-person").addClass("bi-person ").removeClass("bi-person-fill")
   
  // });
  window.addEventListener("scroll", function(e){
    if(window.scrollY>100){
      console.log("iç")
      $(".headerSection").addClass("sticky");
    }else if(window.scrollY<100){
      $(".headerSection").removeClass("sticky");
    }
  });
  
  return (
    <div className="container">
      <div className="col upMenu">
         <small>İndirim Kuponlarım</small>
         <small>Trendyol'da Satış Yap</small>
         <small>Yardım & Destek</small>
        </div>
      
      <div className="row " >
        <div className="col ">
          <div className="headerSection d-flex justify-content-between">
        
            <img
              className="logo"
              src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
              alt="logo"
            />
            <div className="inputSec">            
            <input className="search p-3" type="search"  placeholder="Aradığınız ürün,kategori veya markayı yazınız" />
            <span><i className="bi bi-search fs-5"></i></span>
            </div>
            <div className="loginSection d-flex gap-3">
              <p onMouseMove={()=>{
                  
                  $(".bi1").addClass("bi-person-fill").removeClass("bi-person");
              
                }} onMouseLeave={()=>{
                         $(".bi1").addClass("bi-person").removeClass("bi-person-fill");
                }} >
                <i className="bi bi-person bi1 fs-5 me-2" ></i>Giriş Yap
              </p>
              <p onMouseMove={()=>{
                
                  $(".bi2").addClass("bi-heart-fill").removeClass("bi-heart");
              
                }} onMouseLeave={()=>{
                         $(".bi2").addClass("bi-heart").removeClass("bi-heart-fill");
                }} >
                <i className="bi bi-heart fs-5 me-2 bi2"></i>Favorilerim
              </p>
              <p onMouseMove={()=>{
                  console.log("tıklandı")
                  $(".bi3").addClass("bi-cart-fill").removeClass("bi-cart");
              
                }} onMouseLeave={()=>{
                         $(".bi3").addClass("bi-cart").removeClass("bi-cart-fill");
                }}>
                <i className="bi bi-cart fs-5 me-2 bi3"></i>Sepetim
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
