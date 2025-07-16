
export default function BillReceipt({ products, customerInfo }) {
  // Calculate subtotal
  const subtotal = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  // Calculate tax (assuming 10% tax rate)
  const tax = subtotal * 0.1;
  // Calculate total
  const total = subtotal + tax;

  return (
    <div style={styles.receiptContainer}>
      <div style={styles.header}>
        <h2 style={styles.storeName}>TechShop</h2>
        <p style={styles.storeInfo}>123 Main Street, Tech City</p>
        <p style={styles.storeInfo}>Phone: (123) 456-7890</p>
        <p style={styles.receiptTitle}>INVOICE</p>
      </div>

      <div style={styles.customerSection}>
        <div>
          <p style={styles.sectionTitle}>Bill To:</p>
          <p>{customerInfo.name}</p>
          <p>{customerInfo.email}</p>
          <p>{customerInfo.phone}</p>
        </div>
        <div>
          <p style={styles.sectionTitle}>Order Details:</p>
          <p>Date: {new Date().toLocaleDateString()}</p>
          <p>Order #: {Math.floor(Math.random() * 1000000)}</p>
        </div>
      </div>

      <table style={styles.productsTable}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Item</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Qty</th>
            <th style={styles.tableHeader}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{product.name}</td>
              <td style={styles.tableCell}>${product.price.toFixed(2)}</td>
              <td style={styles.tableCell}>{product.quantity}</td>
              <td style={styles.tableCell}>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.totalsSection}>
        <div style={styles.totalRow}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div style={styles.totalRow}>
          <span>Tax (10%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div style={{ ...styles.totalRow, ...styles.grandTotal }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div style={styles.footer}>
        <p>Thank you for your purchase!</p>
        <p>Terms: Payment due upon receipt</p>
      </div>
    </div>
  );
}

// Sample data structure for props
BillReceipt.defaultProps = {
  customerInfo: {
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567"
  },
  products: [
    { name: "Premium Headphones", price: 199.99, quantity: 1 },
    { name: "Smart Watch", price: 159.99, quantity: 2 },
    { name: "Wireless Keyboard", price: 79.99, quantity: 1 }
  ]
};

const styles = {
  receiptContainer: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '25px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333'
  },
  header: {
    textAlign: 'center',
    borderBottom: '2px solid #eee',
    paddingBottom: '15px',
    marginBottom: '20px'
  },
  storeName: {
    margin: '0',
    color: '#2c3e50',
    fontSize: '28px'
  },
  storeInfo: {
    margin: '5px 0',
    color: '#7f8c8d',
    fontSize: '14px'
  },
  receiptTitle: {
    margin: '10px 0 0',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#2c3e50'
  },
  customerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#2c3e50'
  },
  productsTable: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '20px 0'
  },
  tableHeader: {
    textAlign: 'left',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #ddd',
    fontWeight: 'bold'
  },
  tableCell: {
    padding: '10px',
    borderBottom: '1px solid #eee'
  },
  totalsSection: {
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '2px solid #eee'
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0'
  },
  grandTotal: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '15px',
    paddingTop: '10px',
    borderTop: '1px solid #ddd'
  },
  footer: {
    marginTop: '30px',
    paddingTop: '15px',
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: '14px',
    borderTop: '1px solid #eee'
  }
};



//             const myCustomer = {
//   name: "Jane Smith",
//   email: "jane@example.com",
//   phone: "(555) 987-6543"
// };
// 
// <BillReceipt products={myProducts} customerInfo={myCustomer} />