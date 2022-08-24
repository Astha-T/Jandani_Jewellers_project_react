import React from 'react' 

const ImageSlider = () => {
    return(
<div>
      <Header size={cart.length} setOpenmodel={setOpenmodel} />

      {openmodel && <Cartitem cart={cart} setCart={setCart} handlechange={handlechange} closemodal={setOpenmodel} />}


      <div className="section section-padding mt-n10">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <Swiper
                loop={true}
                spaceBetween={5}

                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                <div className="shop-single-image" key={item.id}>
                  <div className="gallery-top">
                    <div className="swiper-container">
                      <div className="swiper-wrapper">
                        <SwiperSlide >
                          <div className="single-img zoom">
                            <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1cf0a.png" />
                            <div className="inner-stuff">
                              <div className="gallery-item">
                                <NavLink to="">
                                  <i className="lastudioicon-full-screen"></i>
                                </NavLink>
                              </div>
                            </div>
                          </div>

                        </SwiperSlide>

                        <SwiperSlide >

                          <div className="single-img zoom">
                            <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1ea7e.png" />
                            <div className="inner-stuff">
                              <div className="gallery-item">
                                <NavLink to="">
                                  <i className="lastudioicon-full-screen"></i>
                                </NavLink>
                              </div>
                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide >

                          <div className="single-img zoom">
                            <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1f07c.png" />
                            <div className="inner-stuff">
                              <div className="gallery-item">
                                <NavLink to="">
                                  <i className="lastudioicon-full-screen"></i>
                                </NavLink>
                              </div>
                            </div>
                          </div>

                        </SwiperSlide>
                        <SwiperSlide >

                          <div className="single-img zoom">
                            <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1f5f0.png" />
                            <div className="inner-stuff">
                              <div className="gallery-item">
                                <NavLink to="">
                                  <i className="lastudioicon-full-screen"></i>
                                </NavLink>
                              </div>
                            </div>
                          </div>

                        </SwiperSlide>
                      </div>
                    </div>
                  </div>
                </div>



              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide >

                  <div className="single-img zoom">
                    <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1cf0a.png" />
                    <div className="inner-stuff">
                      <div className="gallery-item">
                        <NavLink to="">
                          <i className="lastudioicon-full-screen"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>

                <SwiperSlide >

                  <div className="single-img zoom">
                    <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1ea7e.png" />
                    <div className="inner-stuff">
                      <div className="gallery-item">
                        <NavLink to="">
                          <i className="lastudioicon-full-screen"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide >

                  <div className="single-img zoom">
                    <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1f07c.png" />
                    <div className="inner-stuff">
                      <div className="gallery-item">
                        <NavLink to="">
                          <i className="lastudioicon-full-screen"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>
                <SwiperSlide >

                  <div className="single-img zoom">
                    <img src="https://www.indoasienlivs.se/indomin/storage/app/public/product/2022-05-14-627f94cb1f5f0.png" />
                    <div className="inner-stuff">
                      <div className="gallery-item">
                        <NavLink to="">
                          <i className="lastudioicon-full-screen"></i>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6">

              <div className="shop-single-content" >
                <h3 className="product-name">{item.name}</h3>
                <ul className="shop-rating-content">
                  <li>
                    <div className="review-star">
                      <div className="star" style={{ width: 80 }}></div>
                    </div>
                  </li>
                </ul>
                <div className="product-prices">

                  <span className="sale-price">{item.price}</span>
                </div>
                <div className="product-description">
                  <ul><li>{item.description}</li></ul>
                </div>
                <div className="product-variants">
                  <div className="product-variant-item">
                    <span className="label">Color</span>
                    <div className="color-select">
                      <div className="color-label">
                        <input id="color1" name="color" type="radio" />
                        <label htmlFor="color1"><span data-color="#fff"></span></label>
                      </div>
                      <div className="color-label">
                        <input id="color2" name="color" type="radio" />
                        <label htmlFor="color2"><span data-color="#555"></span></label>
                      </div>
                      <div className="color-label">
                        <input id="color3" name="color" type="radio" />
                        <label htmlFor="color3"><span data-color="#C19A6B"></span></label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-quantity-cart">
                  <div className="product-quantity-cart-wrapper d-flex">
                    <div className="product-quantity d-inline-flex">
                      <button type="button" className="sub"><i className="ion-ios-arrow-down"></i></button>
                      <input type="text" />
                      <button type="button" className="add"><i className="ion-ios-arrow-up"></i></button>
                    </div>
                    <div className="product-cart">

                      <NavLink data-toggle="modal" data-target="#myModal" to="/shopitem/:id">
                        <button className="btn btn-primary btn-hover-dark" onClick={() => handleClick(item)} >Add to Cart</button>
                      </NavLink>
                      < div class="modal" id="myModal" >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title">Modal Heading</h1>
                              <button type="button" class="close" data-dismiss="modal">X</button>
                            </div>
                            <div class="modal-body">
                              <div className="login-register-wrapper">
                                <h4 className="title">Login to Your Account</h4>
                                <form method='GET' >
                                  <div className="single-form">
                                    <label className="form-label" htmlFor='Username'>Username or email *</label>
                                    <input type="text" className="form-control" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} name='Username' id='Username' />
                                  </div>
                                  <div className="single-form">
                                    <label className="form-label" htmlFor='Password'>Password</label>
                                    <input type="password" className="form-control" autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} name='Password' id='Password' />
                                  </div>
                                  <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="remember" />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                  </div>
                                  <div className="single-form">
                                    <button className="btn btn-primary btn-hover-dark" onClick={login}>Login</button>
                                  </div>
                                </form>
                                <p><NavLink to="">Lost your password?</NavLink></p>
                                <p>No account? <NavLink to="/register">Create one here.</NavLink></p>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>


        </div>
      </div>


      <div className="container ">
        <h2 className='text-white'>Toggleable Tabs</h2>
        <br />

        <ul className="nav nav-tabs">

          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu1">DESCRIPTION</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#menu2">REVIEWS</a>
          </li>
        </ul>


        <div className="tab-content">

          <div id="menu1" className="container tab-pane active"><br />

            <div className="product-description">
              <ul>
                <li>{item.description} </li>
              </ul>
            </div>
          </div>
          <div id="menu2" className="container tab-pane fade"><br />

            <div className="product-reviews mt-n6">
              <div className="reviews-comment">

                {review.map((val) => {
                  return (
                    <>
                      <div className="single-comment">
                        <div className="comment-author">
                          <img src={val.customer.image} alt="" />
                        </div>
                        <div className="comment-content">
                          <div className="author-name-rating">
                            <h6 className="name">{val.customer.f_name}</h6><h6 className="name">{val.customer.l_name}</h6>
                            <div className="review-star">
                              <div className="star" style={{ width: 80 }}>{val.rating}</div>
                            </div>
                          </div>
                          <span className="date">11/20/2021</span>
                          <p>{val.comment}</p>
                        </div>
                      </div>

                    </>
                  )
                })}



              </div>
              <div className="review-form">
                <h2 className="form-title">Add a review </h2>

                <form action="">
                  <div className="review-rating">
                    <h5 className="title">Review:</h5>

                    <ul id='stars'>
                      <li className='star' title='Poor' data-value='1'>
                        <i className='icon-star'></i>
                      </li>
                      <li className='star' title='Fair' data-value='2'>
                        <i className='icon-star'></i>
                      </li>
                      <li className='star' title='Good' data-value='3'>
                        <i className='icon-star'></i>
                      </li>
                      <li className='star' title='Excellent' data-value='4'>
                        <i className='icon-star'></i>
                      </li>
                      <li className='star' title='WOW!!!' data-value='5'>
                        <i className='icon-star'></i>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-form">
                        <textarea className="form-control" placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="review-btn mt-6">
                        <button className="btn btn-primary btn-hover-dark">Post Comment</button>
                      </div>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="reviewCheck" />
                    <label className="form-check-label" htmlFor="reviewCheck">NOTIFY ME OF NEW POSTS BY EMAIL.</label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="section section-padding-02 mt-n2">
        <div className="container">

          <div className="section-title text-center">
            <span className="sub-title">12 other products in the same category: </span>
            <h2 className="title">Other Products</h2>
          </div>


        </div>
      </div>

      <Other12 />


      <Footer />

    </div>
)}

export default ImageSlider;