import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
	return (
		<div>
<div className="container mt-5">
  <div className="row">
    <div className="col-sm-4 col-md-3">
      <form>
        <div className="well">
          <div className="row">
            <div className="col-sm-12">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search products..."/>
                <span className="input-group-btn">
                  <button className="btn btn-primary" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>

      
      <form className="shop__filter">
        
        <h3 className="headline">
          <span>Price</span>
        </h3>
        <div className="radio">
          <input type="radio" name="shop-filter__price" id="shop-filter-price_1" value="" checked=""/>
          <label for="shop-filter-price_1">Under $25</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__price" id="shop-filter-price_2" value=""/>
          <label for="shop-filter-price_2">$25 to $50</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__price" id="shop-filter-price_3" value=""/>
          <label for="shop-filter-price_3">$50 to $100</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__price" id="shop-filter-price_4" value="specify"/>
          <label for="shop-filter-price_4">Other (specify)</label>
        </div>
        <div className="form-group shop-filter__price">
          <div className="row">
            <div className="col-xs-4">
              <label for="shop-filter-price_from" className="sr-only"></label>
              <input id="shop-filter-price_from" type="number" min="0" className="form-control" placeholder="From" disabled=""/>
            </div>
            <div className="col-xs-4">
              <label for="shop-filter-price_to" className="sr-only"></label>
              <input id="shop-filter-price_to" type="number" min="0" className="form-control" placeholder="To" disabled=""/>
            </div>
            <div className="col-xs-4">
              <button type="submit" className="btn btn-block btn-default" disabled="">Go</button>
            </div>
          </div>
        </div>

        
        <h3 className="headline">
          <span>Brand</span>
        </h3>
        <div className="checkbox">
          <input type="checkbox" value="" id="shop-filter-checkbox_1" checked=""/>
          <label for="shop-filter-checkbox_1">Adidas</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="" id="shop-filter-checkbox_2"/>
          <label for="shop-filter-checkbox_2">Calvin Klein</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="" id="shop-filter-checkbox_3"/>
          <label for="shop-filter-checkbox_3">Columbia</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="" id="shop-filter-checkbox_4"/>
          <label for="shop-filter-checkbox_4">Tommy Hilfiger</label>
        </div>
        <div className="checkbox">
          <input type="checkbox" value="" id="shop-filter-checkbox_5"/>
          <label for="shop-filter-checkbox_5">Not specified</label>
        </div>

        
        <h3 className="headline">
          <span>Material</span>
        </h3>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_1" value="" checked=""/>
          <label for="shop-filter-radio_1">100% Cotton</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_2" value=""/>
          <label for="shop-filter-radio_2">Bamboo</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_3" value=""/>
          <label for="shop-filter-radio_3">Leather</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_4" value=""/>
          <label for="shop-filter-radio_4">Polyester</label>
        </div>
        <div className="radio">
          <input type="radio" name="shop-filter__radio" id="shop-filter-radio_5" value=""/>
          <label for="shop-filter-radio_5">Not specified</label>
        </div>

        
        <h3 className="headline">
          <span>Colors</span>
        </h3>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_1" value="" data-input-color="black"/>
          <label for="shop-filter-color_1" style={{/*background-color: black;*/}}></label>
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_2" value="" data-input-color="gray"/>
          <label for="shop-filter-color_2" style={{/*background-color: gray;*/}}></label>
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_3" value="" data-input-color="brown"/>
          <label for="shop-filter-color_3" style={{/*background-color: brown;*/}}></label>
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_4" value="" data-input-color="beige"/>
          <label for="shop-filter-color_4" style={{/*background-color: beige;*/}}></label>
        </div>
        <div className="shop-filter__color">
          <input type="text" id="shop-filter-color_5" value="" data-input-color="white"/>
          <label for="shop-filter-color_5" style={{/*background-color: white;*/}}></label>
        </div>
      </form>
    </div>
    
    <div className="col-sm-8 col-md-9">
      
      <ul className="shop__sorting">
        <li className="active"><a href="#/">Popular</a></li>
        <li><a href="#/">Newest</a></li>
        <li><a href="#/">Bestselling</a></li>
        <li><a href="#/">Price (low)</a></li>
        <li><a href="#/">Price (high)</a></li>
      </ul>

      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/87CEFA/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                <span className="shop-thumb-price_old">$80.99</span>
                <span className="shop-thumb-price_new">$59.99</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/20B2AA/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                $59.99
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/FFB6C1/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                $59.99
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/87CEFA/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                $59.99
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/FFA07A/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                $59.99
              </div>
            </a>
          </div>
        </div>
        
        <div className="col-sm-6 col-md-4">
          <div className="shop__thumb">
            <a href="#/">
              <div className="shop-thumb__img">
                <img src="https://www.bootdey.com/image/400x400/48D1CC/000000" className="img-responsive" alt="..."/>
              </div>
              <h5 className="shop-thumb__title">
                Product Title
              </h5>
              <div className="shop-thumb__price">
                $59.99
              </div>
            </a>
          </div>
        </div>    
      </div> 

      
      <div className="row">
        <div className="col-sm-12">

          <ul className="pagination pull-right">
            <li className="disabled"><a href="#/">«</a></li>
            <li className="active"><a href="#/">1 <span className="sr-only">(current)</span></a></li>
            <li><a href="#/">2</a></li>
            <li><a href="#/">3</a></li>
            <li><a href="#/">4</a></li>
            <li><a href="#/">5</a></li>
            <li><a href="#/">»</a></li>
          </ul>
          
        </div>
      </div> 
      
    </div> 
  </div> 
</div>
		</div>
	);
}
export default App;