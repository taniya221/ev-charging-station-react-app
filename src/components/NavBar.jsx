import React from 'react'

const NavBar = () => {
  return (
    
        <div>
        
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">Ev-charging-react-app</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Add Vechicle</a>
                            <a class="nav-link active" aria-current="page" href="/view">View Vechicle</a>

                        </div>
                    </div>
                </div>
            </nav>

        </div>

    </div>
  )
}

 

export default NavBar