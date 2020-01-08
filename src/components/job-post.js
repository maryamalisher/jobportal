 import React,{Component} from 'react';

 export class JobPost extends Component{
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
                    <h1 className="mb-3 bread">Browse Job</h1>
                  </div>
                </div>
              </div>
            </div>
            <section className="ftco-section">
              <div className="container">
                <div className="row justify-content-center mb-5">
                  <div className="col-md-7 heading-section text-center ftco-animate">
                    <span className="subheading">Job Categories</span>
                    <h2 className="mb-0">Top Categories</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 ftco-animate">
                    <ul className="category text-center">
                      <li><a href="#">Web Development <br /><span className="number">354</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Graphic Designer <br /><span className="number">143</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Multimedia <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Advertising <br /><span className="number">90</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 ftco-animate">
                    <ul className="category text-center">
                      <li><a href="#">Education &amp; Training <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">English <br /><span className="number">200</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Social Media <br /><span className="number">300</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Writing <br /><span className="number">150</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 ftco-animate">
                    <ul className="category text-center">
                      <li><a href="#">PHP Programming <br /><span className="number">400</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Project Management <br /><span className="number">100</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Finance Management <br /><span className="number">222</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Office &amp; Admin <br /><span className="number">123</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                    </ul>
                  </div>
                  <div className="col-md-3 ftco-animate">
                    <ul className="category text-center">
                      <li><a href="#">Web Designer <br /><span className="number">324</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Customer Service <br /><span className="number">564</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Marketing &amp; Sales <br /><span className="number">234</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                      <li><a href="#">Software Development <br /><span className="number">425</span> <span>Open position</span><i className="ion-ios-arrow-forward" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="ftco-section ftco-no-pb bg-light">
              <div className="container">
                <div className="row justify-content-center mb-4">
                  <div className="col-md-7 text-center heading-section ftco-animate">
                    <span className="subheading">Browse Jobs</span>
                    <h2 className="mb-4">Advance Search</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="ftco-search">
                    <div className="row">
                      <div className="col-md-12 nav-link-wrap">
                        <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                          <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">Find a Job</a>
                          <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">Find a Candidate</a>
                        </div>
                      </div>
                      <div className="col-md-12 tab-wrap">
                        <div className="tab-content p-4" id="v-pills-tabContent">
                          <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-nextgen-tab">
                            <form action="#" className="search-job">
                              <div className="row no-gutters">
                                <div className="col-md mr-md-2">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="icon"><span className="icon-briefcase" /></div>
                                      <input type="text" className="form-control" placeholder="eg. Garphic. Web Developer" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md mr-md-2">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="select-wrap">
                                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                        <select name id className="form-control">
                                          <option value>Category</option>
                                          <option value>Full Time</option>
                                          <option value>Part Time</option>
                                          <option value>Freelance</option>
                                          <option value>Internship</option>
                                          <option value>Temporary</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md mr-md-2">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="icon"><span className="icon-map-marker" /></div>
                                      <input type="text" className="form-control" placeholder="Location" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <button type="submit" className="form-control btn btn-primary">Search</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                            <form action="#" className="search-job">
                              <div className="row">
                                <div className="col-md">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="icon"><span className="icon-user" /></div>
                                      <input type="text" className="form-control" placeholder="eg. Adam Scott" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="select-wrap">
                                        <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                        <select name id className="form-control">
                                          <option value>Category</option>
                                          <option value>Full Time</option>
                                          <option value>Part Time</option>
                                          <option value>Freelance</option>
                                          <option value>Internship</option>
                                          <option value>Temporary</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="form-group">
                                    <div className="form-field">
                                      <div className="icon"><span className="icon-map-marker" /></div>
                                      <input type="text" className="form-control" placeholder="Location" />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md">
                                  <div className="form-group">
                                    <div className="form-field border">
                                      <button type="submit" className="form-control btn btn-primary">Search</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="ftco-section bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 pr-lg-4">
                    <div className="row">
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Partime</span>
                              <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Fulltime</span>
                              <h2 className="mr-3 text-black"><a href="#">Full Stack Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">Google, Inc.</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Freelance</span>
                              <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">New York Times</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Partime</span>
                              <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Temporary</span>
                              <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">New York Times</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Fulltime</span>
                              <h2 className="mr-3 text-black"><a href="#">Full Stack Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">Google, Inc.</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Freelance</span>
                              <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">New York Times</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Internship</span>
                              <h2 className="mr-3 text-black"><a href="#">Frontend Development</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">Facebook, Inc.</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                      <div className="col-md-12 ftco-animate">
                        <div className="job-post-item p-4 d-block d-lg-flex align-items-center">
                          <div className="one-third mb-4 mb-md-0">
                            <div className="job-post-item-header align-items-center">
                              <span className="subadge">Temporary</span>
                              <h2 className="mr-3 text-black"><a href="#">Open Source Interactive Developer</a></h2>
                            </div>
                            <div className="job-post-item-body d-block d-md-flex">
                              <div className="mr-3"><span className="icon-layers" /> <a href="#">New York Times</a></div>
                              <div><span className="icon-my_location" /> <span>Western City, UK</span></div>
                            </div>
                          </div>
                          <div className="one-forth ml-auto d-flex align-items-center mt-4 md-md-0">
                            <div>
                              <a href="#" className="icon text-center d-flex justify-content-center align-items-center icon mr-2">
                                <span className="icon-heart" />
                              </a>
                            </div>
                            <a href="job-single.html" className="btn btn-primary py-2">Apply Job</a>
                          </div>
                        </div>
                      </div>{/* end */}
                    </div>
                    <div className="row mt-5">
                      <div className="col text-center">
                        <div className="block-27">
                          <ul>
                            <li><a href="#">&lt;</a></li>
                            <li className="active"><span>1</span></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">&gt;</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 sidebar">
                    <div className="sidebar-box bg-white p-4 ftco-animate">
                      <h3 className="heading-sidebar">Browse Category</h3>
                      <form action="#" className="search-form mb-3">
                        <div className="form-group">
                          <span className="icon icon-search" />
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                      </form>
                      <form action="#" className="browse-form">
                        <label htmlFor="option-job-1"><input type="checkbox" id="option-job-1" name="vehicle" defaultValue defaultChecked /> Website &amp; Software</label><br />
                        <label htmlFor="option-job-2"><input type="checkbox" id="option-job-2" name="vehicle" defaultValue /> Education &amp; Training</label><br />
                        <label htmlFor="option-job-3"><input type="checkbox" id="option-job-3" name="vehicle" defaultValue /> Graphics Design</label><br />
                        <label htmlFor="option-job-4"><input type="checkbox" id="option-job-4" name="vehicle" defaultValue /> Accounting &amp; Finance</label><br />
                        <label htmlFor="option-job-5"><input type="checkbox" id="option-job-5" name="vehicle" defaultValue /> Restaurant &amp; Food</label><br />
                        <label htmlFor="option-job-6"><input type="checkbox" id="option-job-6" name="vehicle" defaultValue /> Health &amp; Hospital</label><br />
                      </form>
                    </div>
                    <div className="sidebar-box bg-white p-4 ftco-animate">
                      <h3 className="heading-sidebar">Select Location</h3>
                      <form action="#" className="search-form mb-3">
                        <div className="form-group">
                          <span className="icon icon-search" />
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                      </form>
                      <form action="#" className="browse-form">
                        <label htmlFor="option-location-1"><input type="checkbox" id="option-location-1" name="vehicle" defaultValue defaultChecked /> Sydney, Australia</label><br />
                        <label htmlFor="option-location-2"><input type="checkbox" id="option-location-2" name="vehicle" defaultValue /> New York, United States</label><br />
                        <label htmlFor="option-location-3"><input type="checkbox" id="option-location-3" name="vehicle" defaultValue /> Tokyo, Japan</label><br />
                        <label htmlFor="option-location-4"><input type="checkbox" id="option-location-4" name="vehicle" defaultValue /> Manila, Philippines</label><br />
                        <label htmlFor="option-location-5"><input type="checkbox" id="option-location-5" name="vehicle" defaultValue /> Seoul, South Korea</label><br />
                        <label htmlFor="option-location-6"><input type="checkbox" id="option-location-6" name="vehicle" defaultValue /> Western City, UK</label><br />
                      </form>
                    </div>
                    <div className="sidebar-box bg-white p-4 ftco-animate">
                      <h3 className="heading-sidebar">Job Type</h3>
                      <form action="#" className="browse-form">
                        <label htmlFor="option-job-type-1"><input type="checkbox" id="option-job-type-1" name="vehicle" defaultValue defaultChecked /> Partime</label><br />
                        <label htmlFor="option-job-type-2"><input type="checkbox" id="option-job-type-2" name="vehicle" defaultValue /> Fulltime</label><br />
                        <label htmlFor="option-job-type-3"><input type="checkbox" id="option-job-type-3" name="vehicle" defaultValue /> Intership</label><br />
                        <label htmlFor="option-job-type-4"><input type="checkbox" id="option-job-type-4" name="vehicle" defaultValue /> Temporary</label><br />
                        <label htmlFor="option-job-type-5"><input type="checkbox" id="option-job-type-5" name="vehicle" defaultValue /> Freelance</label><br />
                        <label htmlFor="option-job-type-6"><input type="checkbox" id="option-job-type-6" name="vehicle" defaultValue /> Fixed</label><br />
                      </form>
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
 export default JobPost;