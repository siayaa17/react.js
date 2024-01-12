

function App() {
  return (
    <div className="App">
        
        <div id="fh5co-hero-carousel" class="carousel slide header" data-ride="carousel">
        <nav class="navbar fixed-top navbar-expand-xl">
            <div class="container">
                <a class="navbar-brand mobile-logo" href="#"><img src="images/logo.png" alt="Vista Pro" /></a>
                <button class="navbar-toggler" data-target="#my-nav" onclick="myFunction(this)" data-toggle="collapse">
                    <span class="bar1"></span> <span class="bar2"></span> <span class="bar3"></span> </button>

                <div id="my-nav" class="collapse navbar-collapse">

                    <div>
                        <p class="text-left follow">Follow Syaira:</p>
                        <ul class="navbar-nav float-left social-links">
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.instagram.com/its.syairaaa"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://www.tiktok.com/@geminijxs"><i class="fab fa-pinterest-p"></i></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://twitter.com/siayaaaaaa"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="https://github.com/siayaa17"><i class="fab fa-google-plus-g"></i></a>
                            </li>

                        </ul>
                    </div>

                    <ul class="navbar-nav mx-auto logo-desktop">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav float-right menu-links">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about-us">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        <div class="carousel-inner">
            <div class="carousel-item active">

                <img class="d-block w-100 home-bg" alt="home-bg" src="images/syaira1.jpg" />

                <div class="carousel-caption d-md-block" style={{ marginTop : "-160px"}}>
                    <p class="frst-hrd">WEBSITE SITI MAYANOVITASARI</p>
                    <h5>HELLO EVERYONE</h5>
                    <p>“Change your thoughts and you change your world.”– Norman Vincent Peale</p>

                </div>


            </div>

 
            <div class="scroll-button">
                <p>Scroll down to see more...</p>
                <a href="#about-us" class="page-scroll">
                    <img src="images/arrows-down.png" alt="arrow down" />
                </a>

            </div>
        </div>
        <ul class="carousel-indicators">
        </ul>
    </div>


    
    <div class="container-fluid fh5co-about-us" id="about-us">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">

                <div>
                            <img src="images/maya.jpg" alt="" class="img-fluid" />
                        </div>



                    <div class="owl-carousel owl-carousel1 owl-theme">
                        <div>
                            <img src="images/slide.png" alt="" class="img-fluid" />
                        </div>
                        <div>
                            <img src="images/slide.png" alt="" class="img-fluid" />
                        </div>
                        <div>
                            <img src="images/slide.png" alt="" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="about-us-content">
                        <h2>ABOUT US</h2>
                        <p>Saya SITI MAYANOVITASARI,saya duduk dibangku SMK kelas 12 dengan mengampu potensi keahlian dibidang Rekayasa Perangkat Lunak yang berfokus pada pemerograman dan juga UI maupun UX sebuah program website dan aplikasi.
                        </p>
                        <a href="#" class="read-more">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="container-fluid fh5co-footer" style={{marginRight: "-500px"}}>
        <div class="container" id="contact">
            <div class="row">
                <div class="col-lg-5">
                    <h2>CONTACT</h2>
                    <p class="light">
                        
                    </p>
                    <p>
                        <span class="email"><img src="images/email.png"
                                alt="email icon" /></span><b>Sitimayanovitasari@gmail.com</b>
                    </p>
                    <p>
                        <span class="phone"><img src="images/phone.png" alt="phone icon" /></span><b>+62 8585 2711 101</b>
                    </p>
                    <h3>We Are Social:</h3>
                    <ul class="navbar-nav float-left social-links footer-social">
                        <li class="nav-item">
                            <a class="nav-link" href="https://www.instagram.com/its.syairaaa"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://www.tiktok.com/@geminijxs"><i class="fab fa-pinterest-p"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://twitter.com/siayaaaaaa"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="https://github.com/siayaa17"><i class="fab fa-google-plus-g"></i></a>
                        </li>

                    </ul>
                </div>

                <div class="col-lg-7">
                    <div class="form-box">
                      
                    </div>
                </div>


            </div>
        </div>
    </footer>


    {/* Jangan di hapus di bawah ini  */}
    </div>
  );
}

export default App;