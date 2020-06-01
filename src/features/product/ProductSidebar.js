import React from 'react';
import { useSelector } from 'react-redux';
import { selectProduct } from './productSlice';
import styles from './ProductSidebar.module.css';

function ProductSidebar() {
  const product = useSelector(selectProduct);
  const { id, title, image, subtitle, tags } = product;

  if (!id) {
    // return loading state
  }

  return (
    <div className={styles.productSidebar}>
      <img src={image} alt={subtitle} />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {tags && (
        <div className={styles.tags}>
          {tags.map((tag) => <div className={styles.tag} key={tag}>{tag}</div>)}
        </div>
      )}
    </div>
  );
}

export default ProductSidebar;
