import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Nav from 'react-bootstrap/Nav';
import Badge from 'react-bootstrap/Badge';
import $ from 'jquery';

function Menu() {

  return (

    <div className='container '>
      <div className='row'>
        <div className='col-md-10'>
        <Nav className="nav">
        <Nav.Item className='navItem'    >
          <Nav.Link className='navLink'  onMouseLeave={()=>{   
               $(".hoverDiv").slideUp("fast");
          }}  
          onMouseOver={()=>{
            if(window.scrollY<=30){
            
              setTimeout(()=>{ $(".hoverDiv").slideDown("fast")},800)
            }else{
              $(".hoverDiv").hide();
            }
            
        } }>KADIN</Nav.Link>
          <div className='hoverDiv mt-0  bg-light'>
           
             <table className=' col-md-12 mt-4 mb-4 ms-3 '>
            <tr>
            <th>Giyim</th>
            <th>Ayakkabı</th>
            </tr>
             
              <tr>
                <td>Tişört</td><td>Spor Ayakkabı</td>
              </tr>
              <tr>
                <td>Şort</td><td>Günlük Ayakkabı</td>
              </tr>
              <tr>
                <td>Gömlek</td><td>Yürüyüş Ayakkabısı</td>
              </tr>
              <tr>
                <td>Ceket</td><td>Krampon</td>
              </tr>
              <tr>
                <td>Kot Pantolon</td><td>Klasik</td>
              </tr>
              <tr>
                <td>Yelek</td><td>Bot</td>
              </tr>
              <tr>
                <td>Kazak</td><th>Kişisel Bakım</th>
              </tr>
              <tr>
                <td>Takım Elbise</td><td>Pargüm</td>
              </tr>
              <tr>
                <td>Sweatshirt</td><td>Cinsel Sağlık</td>
              </tr>
              <tr>
                <td>Forma</td><td>Tıraş sonrası ürünler</td>

              </tr>
              <tr>
                <td>Eşofman</td><td>Tıraş Bıçağı</td>
                
              </tr>
            
             </table>
              
            

          </div>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'>ERKEK</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'>ANNE & ÇOCUK</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'> EV & MOBİLYA</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink' >AYAKKABI & ÇANTA</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'> 
          <Nav.Link className='navLink'>ELEKTRONİK</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'>SPOR & OUTDOOR</Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'>ÇOK SATANLAR <Badge className='bg-danger rounded-4 p-1 ms-1'>Yeni</Badge> </Nav.Link>
        </Nav.Item>
        <Nav.Item className='navItem'>
          <Nav.Link className='navLink'>FLAŞ İNDİRİMLER
          <Badge className='bg-danger rounded-4 p-1 ms-1'>Yeni</Badge></Nav.Link>
        </Nav.Item>
      </Nav>

    
        </div>

      </div>
      
    </div>
  )
}

export default Menu