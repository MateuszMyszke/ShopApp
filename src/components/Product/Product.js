import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice);

  const getPrice = () => {
    return props.basePrice + currentPrice;
  };

  const cardData ={
    name: props.title,
    price: props.currentPrice,
    size: currentSize,
    color: currentColor
 }


  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        color={currentColor}
      ></ProductImage>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          size={props.size}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          price={props.currentPrice}
          additionalPrice={props.additionalPrice}
          setCurrentPrice={setCurrentPrice}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          productToBasket={cardData}
          onClick={props.onClick}
        />
      </div>
    </article>
  );
};
Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired
};
export default Product;