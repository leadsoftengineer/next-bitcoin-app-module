/**
 * KYIV MEDIA
 * 06.12.2019
 */
import Navbar from './Navbar';


const Layout = (props) => (
    <div>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);
export default Layout;