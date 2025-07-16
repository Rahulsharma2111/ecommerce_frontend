export default function ProductDisplay() {
    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.pageTitle}>Featured Products</h1>
            <div style={styles.productsGrid}>
                <ProductCard 
                    imageUrl="./images/Screenshot (8).png" 
                    name="Premium Headphones"
                    price={199.99}
                    category="Electronics"
                    brand="Sony"
                    description="Noise-cancelling wireless headphones with 30hr battery life"
                />
                <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Smart Watch"
                    price={159.99}
                    category="Wearables"
                    brand="Samsung"
                    description="Fitness tracking, heart rate monitor, and smartphone notifications"
                />
                <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Wireless Keyboard"
                    price={79.99}
                    category="Accessories"
                    brand="Logitech"
                    description="Ergonomic design with 2-year battery life"
                />
                <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Wireless Keyboard"
                    price={79.99}
                    category="Accessories"
                    brand="Logitech"
                    description="Ergonomic design with 2-year battery life"
                />
                <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Wireless Keyboard"
                    price={79.99}
                    category="Accessories"
                    brand="Logitech"
                    description="Ergonomic design with 2-year battery life"
                />
                <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Wireless Keyboard"
                    price={79.99}
                    category="Accessories"
                    brand="Logitech"
                    description="Ergonomic design with 2-year battery life"
                />
            </div>
        </div>
    );
}

export function ProductCard({ imageUrl, name, price, category, brand, description }) {
    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img 
                    src={imageUrl} 
                    alt={name} 
                    style={styles.productImage} 
                />
            </div>
            <div style={styles.productInfo}>
                <h3 style={styles.productName}>{name}</h3>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Price:</span>
                    <span style={styles.price}>${price.toFixed(2)}</span>
                </div>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Category:</span>
                    <span>{category}</span>
                </div>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Brand:</span>
                    <span>{brand}</span>
                </div>
                <p style={styles.description}>{description}</p>
                <div style={styles.buttonContainer}>
                    <button style={styles.addToCartButton}>Add to Cart</button>
                    <button style={styles.buyNowButton}>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

const styles = {
    pageContainer: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    pageTitle: {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '30px',
        fontSize: '2.2rem'
    },
    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '25px',
        padding: '10px'
    },
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: 'white',
        ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
        }
    },
    imageContainer: {
        height: '200px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa'
    },
    productImage: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '15px'
    },
    productInfo: {
        padding: '20px'
    },
    productName: {
        margin: '0 0 15px 0',
        color: '#34495e',
        fontSize: '1.3rem'
    },
    detailRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '8px',
        fontSize: '0.95rem'
    },
    detailLabel: {
        fontWeight: '600',
        color: '#7f8c8d'
    },
    price: {
        color: '#e74c3c',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    },
    description: {
        margin: '15px 0',
        color: '#555',
        fontSize: '0.9rem',
        lineHeight: '1.5'
    },
    buttonContainer: {
        display: 'flex',
        gap: '10px',
        marginTop: '20px'
    },
    addToCartButton: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background-color 0.2s',
        ':hover': {
            backgroundColor: '#2980b9'
        }
    },
    buyNowButton: {
        flex: 1,
        padding: '10px',
        backgroundColor: '#2ecc71',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        transition: 'background-color 0.2s',
        ':hover': {
            backgroundColor: '#27ae60'
        }
    }
};