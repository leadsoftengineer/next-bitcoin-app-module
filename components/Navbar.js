/**
 * KYIV MEDIA
 * 06.12.2019
 */
import Link from 'next/link';
import Head from 'next/head';

const Navbar = () => (
    <div>
        <Head>
            <title>Next Bitcoin App Module</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        </Head>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link href="/"><a className="navbar-brand">NEXT</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">

                        <Link href="/"><a className="nav-link" >Home <span className="sr-only">(current)</span></a></Link>

                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link" >About <span className="sr-only">(current)</span></a></Link>

                    </li>

                </ul>

            </div>
        </nav>
    </div>
);

export default Navbar;