
import img1 from './assets/news.png';
const Newsitems = ({title,description,src,url}) => {

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",border:"5px solid white",borderRadius:"35px"}} id="hover-card">
    <img src={src?src:img1} style={{height:"200px",width:"320px",border:"1px solid white",borderRadius:"22px"}} className="card-img-top" alt=""></img>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Click on Get more Info for more and interesting updates from News Region!"}</p>
      <div id="p"><a href={url} className="btn btn-primary" target="_blank" style={{backgroundColor:"linear-gradient(to top, #660066 26%, #3333cc 95%)",border:"2px solid white",borderRadius:"15px"}}>Get more Info </a></div>
    </div>
  </div>
  )
}

export default Newsitems
