import PurchaseHistory from "../History/History";
import BillReceipt from "./Bill";
export default function Bills() {
    const myProducts = [
        { name: "Laptop", price: 999.99, quantity: 1 },
        { name: "Mouse", price: 24.99, quantity: 2 }
    ];

    const myCustomer = {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "(555) 987-6543"
    };
    return (
        <>
        <BillReceipt products={myProducts} customerInfo={myCustomer} />
        <PurchaseHistory></PurchaseHistory>
        </>);
}