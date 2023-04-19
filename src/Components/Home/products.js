
import './products.scss'
const Product=({product})=>
{
    console.log()
    return(
        <div className='product-card-wrapper '>
            <div className='product-card'>
             <div className='product-card__title'>{product.title}</div>
             <div className='product-card__price'></div>
            </div>
        </div>
    )
}
export default Product;