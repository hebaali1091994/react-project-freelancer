import React from 'react'
import Header from '../../Components/header/Header'

const Inbox = () => {
    return (
        <div>
              <div class="container-fluid">
          <Header/>
        <div class="row">
            <div class="col-6 col-md-3 left-ser">
                <nav class="navbar navbar-light bg-light">
                        <div class="container">
                            <form class="d-flex">
                            <input class="form-control search-input " type="search" placeholder="search for people"aria-label="Search" />
                            </form>
                        </div>
                    </nav>
                    <div class="menu">
                        <ul>
                            <a href=""><li>ACTIVE</li></a>
                            <a href=""><li>UNREAD</li></a>
                            <a href=""><li>SUPPORT</li></a>
                            <a href=""><li>ARCHIVED</li></a>
                        </ul>
                    </div>
                    <div class="text-search">
                        No messages yet
                    </div>
            </div>
            <div class="col-md-9  right-ser">
                <div class="content">

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
