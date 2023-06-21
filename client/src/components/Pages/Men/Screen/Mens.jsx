import React from "react";
import "./men.css";
import Navbar from './Navbar/Navbar';

export default function Men() {
  return (
    <div className="Men">
      <Navbar/>
      <div className="background">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/5646a073-ab3d-4a91-aa13-be41ac334a22/men-s-shoes-clothing-accessories.jpg" />
        </div>
      <div className="sale">
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/e20f7d6b-77f8-4a99-99e2-b2a2cb69de46/air-jordan-1-mid-se-craft-shoes-ZJgPV3.png" alt="sale-img"/>
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/9a3c3f89-e7f6-43bc-bc55-7951692f93a4/air-jordan-1-low-quai-54-shoes-lcMdPM.png" alt="sale-img"/>
        <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_521,c_limit/f88208a2-2ecf-4307-b702-78fe522814a5/air-jordan-low-se-shoes-2KPKH3.png" alt="sale-img"/>
      </div>
      <div className="shoes">

      </div>
      <div className="clothing">
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fcd1c6a-6c5e-43a9-aae5-744d8f2b7f8d/jordan-essentials-t-shirt-S9LhcQ.png" alt="clothing-img"/>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1ad94bf1-b774-40d4-99ce-dadad26abeca/jordan-flight-mvp-t-shirt-xx7lgR.png" alt="clothing-img"/>
        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/79b35b69-9bcf-4896-83c2-42c51fc8bc55/jordan-dri-fit-sport-t-shirt-bKNN4q.png" alt="clothing-img"/>
      </div>
      <div className="trainning">
        <img src="https://static.nike.com/a/images/w_1920,c_limit/19d8bf5c-d311-465d-b862-50757bcdf562/the-best-winter-workout-clothes-by-nike.jpg" alt="trainning-img"/>
        <img src="https://static.nike.com/a/images/w_1920,c_limit/52f4156b-c8df-4267-8edf-ac66eae74cd2/the-best-nike-shoes-and-gear-for-running-an-ultramarathon.jpg" alt="trainning-img"/>
        <img src="https://static.nike.com/a/images/w_1920,c_limit/f49e856b-ffae-4b2a-a7fd-54a252257933/what-to-take-to-the-gym-for-a-successful-workout.jpg" alt="trainning-img"/>
      </div>
    </div>
  );
}
