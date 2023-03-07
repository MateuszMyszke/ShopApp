import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.cartSummary}>
      <OptionSize
        size={props.size}
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentPrice={props.setCurrentPrice}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button className={styles.button} type={'submit'}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
};

export default ProductForm;