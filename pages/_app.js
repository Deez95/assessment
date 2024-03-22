// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
    return (
        <div>
            {/* <NavBar /> */}
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
