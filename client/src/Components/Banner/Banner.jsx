import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className="intro">
        <div className="bg-image " style={{backgroundImage: 'url(https://mdbootstrap.com/img/Photos/new-templates/search-box/img2.jpg)', height: '100vh'}}>
          <div className="mask d-flex align-items-center h-100" style={{backgroundColor: 'rgba(61, 162, 195, 0.1)'}}>
            <div className="container">
              <div className=" mask-custom p-4">
                <div className="card-body">
                  <p className="h1 font-weight-bold mb-4 text-white">Discover the Amazing City</p>
                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-3 mb-md-0 ">
                      <div id="basic" className="form-outline form-white">
                        <input type="text" id="form1" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form1">What are you looking for?</label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div id="location" className="form-outline form-white">
                        <input type="text" id="form2" className="form-control form-control-lg" />
                        <label className="form-label" htmlFor="form2">Location</label>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <input className="btn btn-info btn-block btn-lg" type="submit" defaultValue="Search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;