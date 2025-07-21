import { useState, useEffect } from 'react';
import { loadRazorpay } from '../utils/razorpay';
export default function ProductDisplay() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:8282/product/all-items');

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <div>Loading products...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.pageTitle}>Featured Products</h1>
            <div style={styles.productsGrid}>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}


                {/* <ProductCard 
                    imageUrl="https://via.placeholder.com/250" 
                    name="Wireless Keyboard"
                    price={79.99}
                    category="Accessories"
                    brand="Logitech"
                    description="Ergonomic design with 2-year battery life"
                /> */}
            </div>
        </div>
    );
}

export function ProductCard({ product }) {
    //     const handleBuyNow = async () => {
    //         // Initialize Razorpay
    //         const options = {
    //             key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key
    //             amount: product.price * 100, // Amount in paise (so multiply by 100)
    //             currency: 'INR',
    //             name: product.product_name,
    //             description: product.details,
    //             image: product.image,
    //             order_id: '', // This will be generated from your backend
    //             handler: function(response) {
    //                 alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
    //                 // You can handle the successful payment here
    //             },
    //             prefill: {
    //                 name: 'Customer Name', // You can get this from user input
    //                 email: 'customer@example.com',
    //                 contact: '9999999999'
    //             },
    //             notes: {
    //                 address: 'Customer Address'
    //             },
    //             theme: {
    //                 color: '#3399cc'
    //             }
    //         };
    // 
    //         // In a real app, you would first create an order on your backend
    //         // and get the order_id before opening the Razorpay checkout
    //         
    //         try {
    //             // For demo purposes, we'll create a client-side order
    //             // In production, always create orders on your backend
    //             const rzp = new Razorpay(options);
    //             rzp.open();
    //         } catch (error) {
    //             console.error('Error opening Razorpay:', error);
    //             alert('Error processing payment');
    //         }
    //     };


    // const [isProcessing, setIsProcessing] = useState(false);
    // const [paymentStatus, setPaymentStatus] = useState(null);
    // 
    //     const handleBuyNow = async () => {
    //         setIsProcessing(true);
    //         setPaymentStatus(null);
    // 
    //         try {
    //             // 1. Load Razorpay script
    //             const razorpayLoaded = await loadRazorpay();
    // 
    //             if (!razorpayLoaded) {
    //                 throw new Error('Failed to load payment gateway');
    //             }
    // 
    //             // 2. Create order (in production, call your backend API)
    //             const orderResponse = await createRazorpayOrder(product);
    // 
    //             // 3. Configure Razorpay options
    //             const options = {
    //                 key: process.env.REACT_APP_RAZORPAY_KEY_ID, // From environment variables
    //                 amount: orderResponse.amount,
    //                 currency: orderResponse.currency,
    //                 order_id: orderResponse.id,
    //                 name: product.product_name,
    //                 description: `Purchase of ${product.product_name}`,
    //                 image: product.image || 'https://example.com/your_logo.png',
    //                 handler: function (response) {
    //                     // Payment success handler
    //                     setPaymentStatus('success');
    //                     verifyPayment(response); // Call your backend to verify
    //                 },
    //                 prefill: {
    //                     name: 'Customer Name', // Get from user input in real app
    //                     email: 'customer@example.com',
    //                     contact: '9876543210'
    //                 },
    //                 theme: {
    //                     color: '#2563eb', // Blue color
    //                     backdrop_color: '#00000080' // Semi-transparent overlay
    //                 }
    //             };
    // 
    //             // 4. Open Razorpay checkout
    //             const rzp = new window.Razorpay(options);
    //             rzp.on('payment.failed', (response) => {
    //                 setPaymentStatus('failed');
    //                 console.error('Payment failed:', response.error);
    //             });
    //             rzp.open();
    // 
    //         } catch (error) {
    //             console.error('Payment error:', error);
    //             setPaymentStatus('error');
    //         } finally {
    //             setIsProcessing(false);
    //         }
    //     };
    // 
    //     // Mock function - replace with actual API call to your backend
    //     const createRazorpayOrder = async (product) => {
    //         // In production, make an API call like:
    //         // const response = await fetch('/api/create-order', {
    //         //   method: 'POST',
    //         //   body: JSON.stringify({ amount: product.price * 100 })
    //         // });
    //         // return await response.json();
    // 
    //         return Promise.resolve({
    //             id: `order_${Date.now()}`,
    //             amount: product.price * 100, // in paise
    //             currency: 'INR'
    //         });
    //     };
    // 
    //     // Mock function - replace with actual API call
    //     const verifyPayment = async (response) => {
    //         // Call your backend to verify payment signature
    //         console.log('Verifying payment:', response);
    //     };

    // const [buyProductData, setBuyProductData] = useState({
    //     product_id: '',
    //     user_id: '',
    //     quantity: '',
    //     per_piece_rate: '',
    //     total_amount: '',
    //     mobile_number: '',
    //     email: '',
    //     address: '',
    //     district: '',
    //     zipcode: '',
    //     status: '',
    //     username: ''
    // });
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const buyAPIHandle = async (product) => {

        setIsProcessing(true);
        setPaymentStatus(null);
        const userData = JSON.parse(localStorage.getItem("user"));
        const username = userData.username;
        const userId = localStorage.getItem("userId");
        if (!userId) {
            throw new Error("No user Id found");
        }
        const buyProductData = {
            product_id: product.id,
            user_id: userId,
            quantity: '1',
            per_piece_rate: product.price,
            total_amount: '30',
            mobile_number: '9602353233',
            email: 'rahul23@gmail.com',
            address: 'bhankrota',
            district: 'jaipur',
            zipcode: '302026',
            status: 'pending',
            username: username
        };
        try {
            //  const buyUserId = new URLSearchParams({
            //         userId: localStorage.getItem(userId)
            //         userId: 2
            //     })

            const url = `http://localhost:8181/order/create-order`;
            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(buyProductData),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Payment error:', error);
            setPaymentStatus('error');
        } finally {
            setIsProcessing(false);
        }
    }


    return (
        <div style={styles.card}>
            <div style={styles.imageContainer}>
                <img
                    src={product.image}
                    alt={product.product_name}
                    style={styles.productImage}
                />
            </div>
            <div style={styles.productInfo}>
                <h3 style={styles.productName}>{product.product_name}</h3>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Price:</span>
                    <span style={styles.price}>${product.price.toFixed(2)}</span>
                </div>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Category:</span>
                    <span>{product.category}</span>
                </div>
                <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Brand:</span>
                    <span>{product.brand}</span>
                </div>
                <p style={styles.description}>{product.details}</p>
                <div style={styles.buttonContainer}>
                    <button style={styles.addToCartButton}>Add to Cart</button>
                    <button
                        // style={styles.buyNowButton} 
                        style={{
                            ...styles.buyNowButton,
                            ...(isProcessing ? styles.processingButton : {})
                        }}
                        onClick={() => buyAPIHandle(product)}
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : 'Buy Now'}
                    </button>
                </div>
                {/* Payment status feedback */}
                {/* {paymentStatus === 'success' && (
                    <div style={styles.successMessage}>
                        Payment successful! Your order is confirmed.
                    </div>
                )}
                {paymentStatus === 'failed' && (
                    <div style={styles.errorMessage}>
                        Payment failed. Please try again.
                    </div>
                )}
                {paymentStatus === 'error' && (
                    <div style={styles.errorMessage}>
                        Error processing payment. Please contact support.
                    </div>
                )} */}
            </div>
        </div>
    );
}


// // Proper flow would be:
// // 1. Call your backend to create order
// const response = await fetch('/api/create-razorpay-order', {
//     method: 'POST',
//     body: JSON.stringify({ amount: product.price * 100, productId: product.id })
// });
// const orderData = await response.json();
// 
// // 2. Then open Razorpay with the order_id from your backend
// const rzp = new Razorpay({
//     ...options,
//     order_id: orderData.id
// });
// rzp.open();

const styles = {
    card: {
        /* your existing card styles */
    },
    buyNowButton: {
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        marginLeft: '10px',
        transition: 'background-color 0.3s'
    },
    processingButton: {
        backgroundColor: '#94a3b8',
        cursor: 'not-allowed'
    },
    successMessage: {
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#dcfce7',
        color: '#166534',
        borderRadius: '4px'
    },
    errorMessage: {
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#fee2e2',
        color: '#991b1b',
        borderRadius: '4px'
    },
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