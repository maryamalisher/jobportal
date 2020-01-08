import React,{Component} from 'react';

export class NewPost extends Component{
    render(){
        return(

            <div>
  {/* END nav */}
  <div className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("images/bg_1.jpg")'}} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-end justify-content-start">
        <div className="col-md-12 ftco-animate text-center mb-5">
          <p className="breadcrumbs mb-0"><span className="mr-3"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Job Post</span></p>
          <h1 className="mb-3 bread">Post A Job</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8 mb-5">
          <form action="#" className="p-5 bg-white">
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-price-1">
                  <input type="checkbox" id="option-price-1" /> <span className="text-success">$500</span> For 30 days
                </label>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-price-2">
                  <input type="checkbox" id="option-price-2" /> <span className="text-success">$300</span> / Monthly Recurring
                </label>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Job Title</label>
                <input type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer" />
              </div>
            </div>
            <div className="row form-group mb-5">
              <div className="col-md-12 mb-3 mb-md-0">
                <label className="font-weight-bold" htmlFor="fullname">Company</label>
                <input type="text" id="fullname" className="form-control" placeholder="eg. Facebook, Inc." />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12"><h3>Job Type</h3></div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-job-type-1">
                  <input type="radio" id="option-job-type-1" name="job-type" /> Full Time
                </label>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-job-type-2">
                  <input type="radio" id="option-job-type-2" name="job-type" /> Part Time
                </label>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-job-type-3">
                  <input type="radio" id="option-job-type-3" name="job-type" /> Freelance
                </label></div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-job-type-4">
                  <input type="radio" id="option-job-type-4" name="job-type" /> Internship
                </label>
              </div>
              <div className="col-md-12 mb-3 mb-md-0">
                <label htmlFor="option-job-type-4">
                  <input type="radio" id="option-job-type-4" name="job-type" /> Termporary
                </label>
              </div>
            </div>
            <div className="row form-group mb-4">
              <div className="col-md-12"><h3>Location</h3></div>
              <div className="col-md-12 mb-3 mb-md-0">
                <input type="text" className="form-control" placeholder="Western City, UK
" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12"><h3>Job Description</h3></div>
              <div className="col-md-12 mb-3 mb-md-0">
                <textarea name className="form-control" id cols={30} rows={5} defaultValue={""} />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <input type="submit" defaultValue="Post" className="btn btn-primary  py-2 px-5" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <div className="p-4 mb-3 bg-white">
            <h3 className="h5 text-black mb-3">Contact Info</h3>
            <p className="mb-0 font-weight-bold">Address</p>
            <p className="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p className="mb-0 font-weight-bold">Phone</p>
            <p className="mb-4"><a href="#">+1 232 3235 324</a></p>
            <p className="mb-0 font-weight-bold">Email Address</p>
            <p className="mb-0"><a href="#"><span className="__cf_email__" data-cfemail="671e081215020a060e0b2703080a060e094904080a">[email&nbsp;protected]</span></a></p>
          </div>
          <div className="p-4 mb-3 bg-white">
            <h3 className="h5 text-black mb-3">More Info</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad iure porro mollitia architecto hic consequuntur. Distinctio nisi perferendis dolore, ipsa consectetur</p>
            <p><a href="#" className="btn btn-primary  py-2 px-4">Learn More</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="ftco-section-parallax">
    <div className="parallax-img d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
            <h2>Subcribe to our Newsletter</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in</p>
            <div className="row d-flex justify-content-center mt-4 mb-4">
              <div className="col-md-12">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Enter email address" />
                    <input type="submit" defaultValue="Subscribe" className="submit px-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Skillhunt Jobboard</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Employers</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="pb-1 d-block">Browse Candidates</a></li>
              <li><a href="#" className="pb-1 d-block">Post a Job</a></li>
              <li><a href="#" className="pb-1 d-block">Employer Listing</a></li>
              <li><a href="#" className="pb-1 d-block">Resume Page</a></li>
              <li><a href="#" className="pb-1 d-block">Dashboard</a></li>
              <li><a href="#" className="pb-1 d-block">Job Packages</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Candidate</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="pb-1 d-block">Browse Jobs</a></li>
              <li><a href="#" className="pb-1 d-block">Submit Resume</a></li>
              <li><a href="#" className="pb-1 d-block">Dashboard</a></li>
              <li><a href="#" className="pb-1 d-block">Browse Categories</a></li>
              <li><a href="#" className="pb-1 d-block">My Bookmarks</a></li>
              <li><a href="#" className="pb-1 d-block">Candidate Listing</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Account</h2>
            <ul className="list-unstyled">
              <li><a href="#" className="pb-1 d-block">My Account</a></li>
              <li><a href="#" className="pb-1 d-block">Sign In</a></li>
              <li><a href="#" className="pb-1 d-block">Create Account</a></li>
              <li><a href="#" className="pb-1 d-block">Checkout</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
        </div>
      </div>
    </div>
  </footer>
  {/* loader */}
  <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
</div>

        )
    }
}
export default NewPost;