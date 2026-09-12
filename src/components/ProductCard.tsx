import Image from 'next/image';
import { Product } from '@/data/products';
import './ProductCard.css';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="product-overlay">
          <button className="add-to-cart">Quick Add</button>
        </div>
      </div>
      <div className="product-info">
        <div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
        </div>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
