import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
        {/* <footer class="text-center py-2" >
        <p class="mb-0"> 2021 - Alisa Llavore</p>
        </footer> */}
        <footer>
            <div class="container">
                <div class="row text-center">
                <a
                    class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"
                    ><i class="fab fa-instagram"></i
                ></a>
                </div>
                <div class="row">
                <div class="text-center text-dark p-3">
                    <h5>© 2022</h5>
                </div>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Footer
