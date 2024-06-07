
// import React from 'react';
function Newsnavbar({setCategory}) {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#" ><span className="badge  text-dark fs-4" style={{backgroundColor:"#FAEBD7"}}>New Zone</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
         
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5  "  style={{color:"#fff"}} role="button" onClick={()=>setCategory("technology")} id="k" ><span  id="h" >Technology</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5" style={{color:"#fff"}} role="button" onClick={()=>setCategory("business")} id="k"><span id="h">Business</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5"  style={{color:"#fff"}} role="button" onClick={()=>setCategory("health")} id="k"><span id="h">Health</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5" style={{color:"#fff"}} role="button" onClick={()=>setCategory("sports")} id="k"><span id="h">Sports</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5" style={{color:"#fff"}} role="button" onClick={()=>setCategory("entertainment")} id="k"><span id="h">Entertainment</span></div>
          </li>
          <li className="nav-item">
            <div className="nav-link fs-4 mx-5" style={{color:"#ffe4e1"}} role="button" onClick={()=>setCategory("science")}id="k" ><span id="h">Science</span></div>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
}

export default Newsnavbar
