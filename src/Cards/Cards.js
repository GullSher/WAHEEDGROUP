import Navbar1 from '../Navbar/Navbar1.js'
import Footer from '../Footer/Footer.js'
import Row1 from '../Rows/Row1.js'
// import '../Cards/Cards.css'

const Cards = () => {
    return (

        <div className="cards">
            {/* <div className="card-header">Header</div> */}
            {/* <div className="card-header1"><Header /></div> */}
            <div className="card-navbar"><Navbar1 /></div>
            {/* <div className="" ></div> */}
            {/* <div className="card-body">Content</div> */}
            {/* <div className="card-footer">Footer</div> */}
            <div className='Rows'>            <Row1 /></div>
            <div className='Rows'>            <Row1 /></div>
            <div className='Rows'>            <Row1 /></div>


            <div className="Footer"><Footer /></div>
        </div>
    )
}
export default Cards
