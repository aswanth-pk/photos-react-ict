import React from 'react'

const Navbar = () => {
    return (
        <nav class="navbar bg-dark  navbar-expand-lg bg-body-tertiary px-5" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" aria-current="page" href="/addtodo"></a>
                        <a class="nav-link" href="/completed"></a>
                        <a class="nav-link" href="/incomplete"></a>
                        <a class="nav-link " href="/"></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar