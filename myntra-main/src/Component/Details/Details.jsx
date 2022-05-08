import React, { useEffect, useState } from "react";
import Images from "./Images";
import SubDetails from "./SubDetails";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import {
  DetailsMainDiv,
  ImageContainer,
  Img,
  ImgDiv,
  SubDetailsDiv,
  WishDiv,
  SizesDIv,
  BagDiv,
  RatingDiv,
} from "./detailStyled";
import StarIcon from "@mui/icons-material/Star";
function Details() {
  const [dataOne, setDataOne] = useState({});
  let arr = [
    {
      id: 109,
      title: "Men Blue Cotton Fine-knit Jumper",
      price: 1499,
      gender: "men",
      sizes: ["S", "M", "L", "XL", "XXL"],
      description:
        "Jumper in a soft, fine cotton knit with a round neck, long sleeves and ribbing at the cuffs and hem.",
      category: "Men's Clothing",
      brand: "H&M",
      color: "blue",
      discount: 40,
      off_price: 1799,
      images: {
        image1:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/bf790580-9d52-423a-8083-38f1ca7f47511632723350062Fine-knitjumper1.jpg",
        image2:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/2cc4b764-c362-462a-a776-52102f5c9ec11632723350071Fine-knitjumper2.jpg",
        image3:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/83b555e8-d9e7-4b6e-99dd-1b768d33e3c31632723350081Fine-knitjumper3.jpg",
        image4:
          "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15545930/2021/9/27/89440af7-6ba1-42a2-a299-af466939affd1632723350237Fine-knitjumper4.jpg",
      },
      rating: 4.6,
      count: 22,
    },
  ];
  console.log(arr);
  return (
    <>
      <DetailsMainDiv>
        <ImageContainer>
          <ImgDiv>
            <Img src={arr[0].images.image1} />
          </ImgDiv>
          <ImgDiv>
            <Img src={arr[0].images.image2} />
          </ImgDiv>
          <ImgDiv>
            <Img src={arr[0].images.image3} />
          </ImgDiv>
          <ImgDiv>
            <Img src={arr[0].images.image4} />
          </ImgDiv>
        </ImageContainer>
        <SubDetailsDiv>
          <div style={{ width: "95%", margin: "auto" }}>
            <div style={{ textAlign: "left" }}>
              <div>
                <b>
                  {" "}
                  <p
                    style={{
                      fontSize: "24px",
                      margin: "25px 0px -15px 0px ",
                      color: "darkslategray",
                    }}
                  >
                    {arr[0].brand}
                  </p>
                </b>
                <p style={{ fontSize: "20px", color: "#8b8d97" }}>
                  {arr[0].title}
                </p>
              </div>
              <RatingDiv>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    alignItems: "center",
                    width: "40px",
                  }}
                >
                  <b>
                    {" "}
                    <p>{arr[0].rating} </p>
                  </b>
                  <p style={{ color: "#48958f" }}>
                    <StarIcon fontSize="small" />
                  </p>
                </div>
                <div
                  style={{
                    color: "#8b8d97",
                    alignItems: "center",
                    alignSelf: "center",
                  }}
                >
                  {" "}
                  <p> | {arr[0].count} Ratings</p>
                </div>
              </RatingDiv>
            </div>
            <hr></hr>
            <div style={{ textAlign: "left" ,marginTop:"-18px"}}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  width: "270px",
                  fontSize: "22px",
                }}
              >
                <p>
                  {" "}
                  <b
                    style={{ color: "darkslategray" }}
                  >{`Rs.${arr[0].price}`}</b>
                </p>
                <p
                  style={{
                    color: "#8b8d97",
                    fontSize: "18px",
                    marginTop: "25px",
                  }}
                >
                  {" "}
                  Rs.
                  <span style={{ textDecoration: "line-through" }}>
                    {`${arr[0].off_price}`}{" "}
                  </span>
                </p>
                <p style={{ color: "#ee9d20" }}>
                  <b> {`(${arr[0].discount}% OFF)`} </b>
                </p>
              </div>
              <div
                style={{
                  marginTop: "-18px",
                  color: "#79a987",
                  fontSize: "14px",
                }}
              >
                <b>inclusive of all taxes</b>
              </div>
            </div>
            <div style={{ textAlign: "left", marginTop: "5px" }}>
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  fontWeight:"500",
                  justifyContent: "space-between",
                  fontSize: "16px",
                  marginTop:"-5px"
                }}
              >
                <p>
                  SELECT SIZE{" "}
                </p>
              
                  <p
                    style={{
                      color: "#e7396a",
                      fontSize: "15px",
                      marginTop: "18px",
                    cursor: "pointer",
                      fontWeight:"700",
                    }}
                  >{`SIZE CHART >`}</p>
               
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                {arr[0].sizes.map((ele) => {
                  return (
                    <SizesDIv>
                      <p>{ele}</p>
                    </SizesDIv>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                gap: "20px",
              }}
            >
              <BagDiv>
                <ShoppingBagIcon />
                <p>
                  <b>ADD TO BAG</b>
                </p>
              </BagDiv>
              <WishDiv>
                <div style={{ color: "gray" }}>
                  <FavoriteBorderIcon />
                </div>
                <b>
                  {" "}
                  <p>WISHLIST</p>
                </b>
              </WishDiv>
            </div>
            <div style={{ display:"flex", width:"200px", marginTop:"15px",gap:"14px" ,alignItems:"center"}}>
              <p style={{fontSize:"15px",fontWeight:"500"}}>DELIVERY OPTIONS</p>
              <div style={{color:"gray"}}><LocalShippingOutlinedIcon /></div>
            </div>
            <div style={{textAlign:"left"}}>
            <div style={{height:"35px" ,alignItems:"center", textAlign:"left", border:"0.2px solid lightgray",display:"flex",gap:"15px",borderRadius:"4px" , fontSize:"15px",justifyContent:"space-between" , width:"240px",padding:"5px"}}>
              <input placeholder="Enter pincode" style={{ height: "100%", border: "none",width:"120px",fontWeight:"200" ,fontSize:"18px"}} ></input>
              <p style={{color:"#e7396a",fontWeight:"600"}}>CHECK</p>
            </div>
            <p style={{marginTop:"2px",color:"#696969"}}>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            </div>
            <div style={{textAlign:"left", marginTop:"30px" , fontSize:"18px" , fontWeight:"460"}}>
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 30 days returns and exchanges</p>
              <p>Try & Buy might be available</p>
            </div>
            <div style={{textAlign:"left",color:"darkslategray", fontSize:"16px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
                <p style={{fontSize:"16px", color:"black"}}><b>BEST OFFERS</b>   </p>
                <div style={{color:"gray"}}><LocalOfferOutlinedIcon/></div>
            </div>
              <p style={{fontSize:"16px",marginTop:"-5px", color:"black"}}> <b>Best Price:<span style={{color:"#ee9d20"}}> Rs.{arr[0].price }</span></b></p>
              <ul style={{marginLeft:"-26px"}}>
                <li>Applicable on: Orders above Rs. 3999 (only on first purchase)</li>
                <li>Coupon code:<b style={{color:"black"}}> MYNTRA10</b></li>
                <li>Coupon Discount: 10% off upto Rs. 600 (check cart for final savings)</li>
              </ul>
              <p style={{color:"#e7396a", fontWeight:"570"}}>View Eligible Products</p>
              <p><b>EMI option available</b></p>
              <ul style={{marginLeft:"-26px"}}>
                <li>EMI starting from Rs.154/month</li>
              </ul>
              <p style={{color:"#e7396a",fontWeight:"570"}} >View Plan</p>
            </div>
          </div>
        </SubDetailsDiv>
      </DetailsMainDiv>
    </>
  );  
}

export default Details;