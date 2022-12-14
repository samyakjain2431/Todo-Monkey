import React from 'react'

export default function Navbar(props) {
  return (
    <div className='position-fixed'>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`} style={{position:"fixed", width: "100%", top: "0px"}}>
    <div className="container-fluid" >
    <a  className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="#">Todo Monkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a> */}
          
        </li>
        
        
      </ul>
      <a href="https://github.com/samyakjain2431/Todo-Monkey" target="blank" rel="noopener noreferrer" style={{"padding": "6px 16px","marginRight":"15px", "backgroundColor":"#373737cc","boxShadow":"1px 1px 5px #808080b0", "color": "white","borderRadius":"42px", "textDecoration":"none"}}>{`</> GitHub Code`}</a>
      <a href="https://samyakjain.super.site" target="blank" rel="noopener noreferrer" style={{"padding": "6px 16px","marginRight":"15px", "backgroundColor":"#932cff", "color": "white","boxShadow":"1px 1px 5px #808080b0","borderRadius":"42px", "textDecoration":"none"}}>Go to Portfolio</a>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
        <label className={`form-check-label text-${props.mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckChecked">Dark Mode</label>
    </div>
    </div>
    </div>
    </nav>
    </div>
  )
}
