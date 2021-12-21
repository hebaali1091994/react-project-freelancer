import React from 'react'
import Header from '../../Components/header/Header'

const Inbox = () => {
    return (
        <div>
              <div className="container-fluid">
          <Header/>
        <div className="row">
            <div className="col-6 col-md-3 left-ser">
                <nav className="navbar navbar-light bg-light">
                        <div className="container">
                            <form className="d-flex">
                            <input className="form-control search-input " type="search" placeholder="search for people"aria-label="Search" />
                            </form>
                        </div>
                    </nav>
                    <div className="menu">
                        <ul>
                            <a href=""><li>ACTIVE</li></a>
                            <a href=""><li>UNREAD</li></a>
                            <a href=""><li>SUPPORT</li></a>
                            <a href=""><li>ARCHIVED</li></a>
                        </ul>
                    </div>
                    <div className="text-search">
                        No messages yet
                    </div>
            </div>
            <div className="col-md-9  right-ser">
                <div className="content">

                    <h5>Welcome to your messages</h5>
                    <p>Get connected. <a href="">Browse</a> or <a href="">post a project</a> .</p>
                </div>
                
            </div>
        </div>
        </div>
        </div>
    )
}

export default Inbox
