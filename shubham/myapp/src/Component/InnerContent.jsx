import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBestOfMyntra, getCategoriesData, getdealsOflaatestArival, getDealsOftheData, getGiftingCards, getNewTopBrands, getTopInInfluncerExclusive, getTopPicksData } from '../redux/actions';
import BestOfMyntra from './BestOfMyntra';
import CategoriesToBag from './CategoriesToBag';
import DealOftheDayCard from './DealOftheDayCard';
import { SlideShow } from './Slider'
import TopPicks from './TopPicks';
const divStyle = {
  textAlign: "start",
  letterSpacing: ".15em", textTransform: "uppercase",
  color: "#3e4152",
  letterSpacing: ".15em",
  fontSize: "1.8em",
  margin: " 50px 0 10px 30px",
  maxHeight: "5em",
  fontWeight: "500"
}
function InnerContent() {
  const dealsOftheDay = useSelector((state) => state.dealsOftheDay)
  const bestofMyntra = useSelector((state) => state.bestOfMyntra)
  const topPicks = useSelector((state) => state.topPicks)
  const categoriesToBag = useSelector((state) => state.gategoriesToBag)
  const giftingCards = useSelector((state) => state.giftingCards)
  const dealsoflatestarival = useSelector((state) => state.dealsoflatestarival)
  const newintopbrands = useSelector((state) => state.newintopbrands)
  const topinfluncerseclusive = useSelector((state) => state.topinfluncerseclusive)
 
  console.log("data", dealsOftheDay)
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`http://localhost:5050/dealsofthday`)
      .then((res) => res.json())
      .then((res) => dispatch(getDealsOftheData(res)))
      .catch((e) => console.log(e))
    fetch(`http://localhost:5050/bestOfMyntra`)
      .then((res) => res.json())
      .then((res) => dispatch(getBestOfMyntra(res)))
      .catch((e) => console.log(e))
    fetch(`http://localhost:5050/topPicks`)
      .then((res) => res.json())
      .then((res) => dispatch(getTopPicksData(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/categoriesToBag`)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/categoriesToBag`)
      .then((res) => res.json())
      .then((res) => dispatch(getCategoriesData(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/GiftingCards`)
      .then((res) => res.json())
      .then((res) => dispatch(getGiftingCards(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/dealsoOnLatestArival`)
      .then((res) => res.json())
      .then((res) => dispatch(getdealsOflaatestArival(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/newInTopBrands`)
      .then((res) => res.json())
      .then((res) => dispatch(getNewTopBrands(res)))
      .catch((e) => console.log(e))
      fetch(`http://localhost:5050/topInfluencerExclusiveStyles`)
      .then((res) => res.json())
      .then((res) => dispatch(getTopInInfluncerExclusive(res)))
      .catch((e) => console.log(e))
  }, [dispatch])
  return (
    <div>
      <SlideShow />
      <div>
        <div style={divStyle}>        <h4>DEALS OF THE DAY</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-between", gridTemplateColumns: "repeat(10, auto) " }}>

          {dealsOftheDay.map(e =>
            <DealOftheDayCard  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>BEST OF MYNTRA EXCLUSIVE BRANDS</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-between", gridTemplateColumns: "repeat(8, auto) " }}>

          {bestofMyntra.map(e =>
            <BestOfMyntra  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>TOP PICKS</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-between", gridTemplateColumns: "repeat(7, auto) " }}>

          {topPicks.map(e =>
            <TopPicks  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>TOP PICKSCATEGORIES TO BAG</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns: "repeat(8, auto) " ,rowGap:"0px"}}>

          {categoriesToBag.map(e =>
            <CategoriesToBag  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>GIFTING CARDS</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns: "repeat(5, auto) " ,rowGap:"0px"}}>

          {giftingCards.map(e =>
            <CategoriesToBag  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>TOP INFLUENCERS EXCLUSIVE STYLES</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns: "repeat(6, auto) " ,rowGap:"0px"}}>

          {topinfluncerseclusive.map(e =>
            <CategoriesToBag  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>NEW IN TOP BRANDS</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns: "repeat(8, auto) " ,rowGap:"0px"}}>

          {newintopbrands.map(e =>
            <CategoriesToBag  {...e} key={e.id} />
          )}
        </div>
        <div style={divStyle}>        <h4>DEALS ON LATEST ARRIVALS
</h4>
        </div>
        <div style={{ display: "grid", justifyContent: "space-around", gridTemplateColumns: "repeat(2, auto) " ,rowGap:"0px"}}>

          {dealsoflatestarival.map(e =>
            <CategoriesToBag  {...e} key={e.id} />
          )}
        </div>

      </div>

      
  
  
    </div>
  )
}

export default InnerContent