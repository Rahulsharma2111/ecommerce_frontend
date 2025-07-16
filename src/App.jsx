
import AnalyticsDashboard from "./Admin/AnalysisDashboard/DashBoard";
import ProductList from "./Admin/EditDeleteProduct/EditProduct";
// import ProductList from "./Admin/EditDeleteProduct/ProductList";
import ProductUploadForm from "./Admin/UploadProduct/Product";
import Bills from "./Bills/BillRescipt";
import Signup from "./User/Signup";
function WelcomePage() {
    return (
        <>
            <center>
                <div>Welcome to E-commece site</div>
                <Signup />
                <Bills/>
                <ProductUploadForm></ProductUploadForm>
                <AnalyticsDashboard></AnalyticsDashboard>
                {/* <ProductList></ProductList> */}
                <ProductList></ProductList>
            </center>
        </>
    )
}
export default WelcomePage;