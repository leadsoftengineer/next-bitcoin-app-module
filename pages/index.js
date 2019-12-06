/**
 * KYIV MEDIA
 * 06.12.2019
 */


import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = (props) => (
    <Layout>
        <div className="myTitle pt-4">
            <h1>Home</h1>
            <p>Welcome to bitcoin currency page!</p>
            <Prices bpi={props.bpi} />
            <style jsx>{
                `
                .myTitle {                  
                    display:flex;
                    flex-Direction:column;
                }              
            `
            }</style>
        </div>
    </Layout>);

Index.getInitialProps = async function () {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();

    return {
        bpi: data.bpi
    }

}


export default Index;