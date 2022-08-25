import React from 'react'
import './newCss.css'
import Swiper from "swiper";
import $ from 'jquery';

const NewPage = () => {

    /* product left start */
	if($(".product-left").length){
		var productSlider = new Swiper('.product-slider', {
			spaceBetween: 0,
			centeredSlides: false,
			loop:true,
			direction: 'horizontal',
			loopedSlides: 5,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			resizeObserver:true,
		});
		var productThumbs = new Swiper('.product-thumbs', {
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
			direction: 'horizontal',
			slidesPerView: 5,
			loopedSlides: 5,
		});
		productSlider.controller.control = productThumbs;
		productThumbs.controller.control = productSlider;
		
	


	}
	/* 	product left end */
    return (
<div className="container py-5">
	<div className="row">
		<div className="col-lg-6 product-left mb-5 mb-lg-0">
				<div className="swiper-container product-slider mb-3">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1-qzpXz-6SaqM3IPlQl_d9YXaPaBPw1xi" alt="..."  className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1GyPJxF36hlp2JS7SeYrnW0Bmuc9KJyBq" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1MIbogRkUdngQXnaXT8Mufup-7CScTNRj" alt="..."  className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1a_w8OcDV-IA5UMz7usKtO_lXf0YSee3u" alt="..."  className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1gLp3gryMbGYpgAfAtnDGccME1lCzEyUU" alt="..."  className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1iOOVa8mOrESI0o5o7au7nAOlPFAwbnLM" alt="..."  className="img-fluid"/>
						</div>
						
					</div>
					<div className="swiper-button-next"></div>
					<div className="swiper-button-prev"></div>
				</div>
				
				<div className="swiper-container product-thumbs">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1-qzpXz-6SaqM3IPlQl_d9YXaPaBPw1xi" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1GyPJxF36hlp2JS7SeYrnW0Bmuc9KJyBq" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1MIbogRkUdngQXnaXT8Mufup-7CScTNRj" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1a_w8OcDV-IA5UMz7usKtO_lXf0YSee3u" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1gLp3gryMbGYpgAfAtnDGccME1lCzEyUU" alt="..." className="img-fluid"/>
						</div>
						<div className="swiper-slide">
							<img src="https://drive.google.com/uc?id=1iOOVa8mOrESI0o5o7au7nAOlPFAwbnLM" alt="..." className="img-fluid"/>
						</div>
					
					</div>
				</div>
			
		</div>
	</div>
</div>
    )
}

export default NewPage;