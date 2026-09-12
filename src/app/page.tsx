import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import './page.css';

export default function Home() {
  return (
    <main className="main-content">
      <header className="hero animate-fade-in">
        <h1 className="hero-title">
          Elevate Your <span className="text-gradient">Style</span>
        </h1>
        <p className="hero-subtitle">
          Discover our latest collection of premium, minimalist apparel designed for the modern aesthetic.
        </p>
        <button className="cta-button">Shop the Collection</button>
      </header>

      <section className="products-section">
        <div className="section-header">
          <h2 className="section-title">Latest Arrivals</h2>
          <button className="view-all">View All →</button>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      
      <footer className="footer">
        <p>© {new Date().getFullYear()} Lumina Clothing. All rights reserved.</p>
      </footer>
    </main>
  );
}
