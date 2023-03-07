import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const prepareColorClassName = color => {
  return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
};

const OptionColor = (props) => {
  return(
    <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((color) => (
                <li key={shortid()}>
                  <button onClick={() => {props.setCurrentColor(color)}} className={clsx(prepareColorClassName(color), color === props.currentColor && styles.active)}>  </button>
                </li>)
              )}
            </ul>
          </div> 
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;