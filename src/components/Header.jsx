const Header = () => {
  return (
    <>
      <header className="header">
        <div className="all">
          <div className="container">
            <div className="go_all">
              <div className="nav_go">
                <a href="" className="go_img">
                  <img src="logo.png" alt="" />
                </a>

              </div>
              <div className="nav_logo1">
                <ul className="go_list">
                  <li className="go_link">About us</li>
                  <li className="go_link">Catalog</li>
                  <li className="go_link">Contacts</li>
                </ul>
               
              </div>
                 <img className="search" src="search.png" alt="" />
            </div>
          </div>
        </div>
        <div className="all2">
          <div className="container">
            <div className="esse">
              <h1 className="title">GoTrip</h1>
              <h2 className="text">travel comfortably with us</h2>
              <button className="more">More</button>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header