import Product from "./products";
import './productcard.scss'
const productlist=[
    {
        id:1,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:2,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-kLEz32HDMD0Yrx2e-WtXI_fy6FmLuvvgJvX8-vxCUfIZ1OFNjuR0u0qP_5hP3o04dg&usqp=CAU"


    },
    {
        id:3,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:4,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:5,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:6,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:7,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },
    {
        id:8,
        title:"TP-Link Archer C6 Gigabit MU-MIMO Wireless Router",
        currency:213144,
        value:3,
        count:5,
        img:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81y6dfNya6L._UL1500_.jpg"


    },

]
const ProductCard=()=>
{
    
   return(
    <div className="products">
        {productlist.map((product) => (
          <Product key={product.id} product={product} />

        ))}

    </div>
   )
}
export default ProductCard;