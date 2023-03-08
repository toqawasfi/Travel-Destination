import Header from '../Header/Header'
import Tours from '../Tours/Tours'
import Footer from '../Footer/Footer'
import  '../Home/Home.css'
const data= require('../../data/db.json')
function Home(){
    return (
        <div className="home">
   <Header />
   <Tours myData={data} />
   <Footer />
   </div>
    );
}
export default Home;