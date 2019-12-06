/**
 * KYIV MEDIA
 * 06.12.2019
 */

import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div className="myTitle pt-4">
            <h1>About</h1>
            <p >Welcome to About page!</p>
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

export default About;