// Web Components

class MyNav extends HTMLElement {
  
  //connect component
  connectedCallback() {
    this.innerHTML =
    `<!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
                <!--  <img src="assets/logo.png" width="50" height="50" /> -->
                <a class="navbar-brand" href="index.html">Jason's Portfolio</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="project.html">Project</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>`
        ;
  }
  
}

class MyNav2 extends HTMLElement {
  
    //connect component
    connectedCallback() {
      this.innerHTML =
      `<!-- Navigation-->
          <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div class="container">
                  <!--  <img src="assets/logo.png" width="50" height="50" /> -->
                  <a class="navbar-brand" href="../index.html">Jason's Portfolio</a>
                  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      Menu
                      <i class="fas fa-bars"></i>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                      <ul class="navbar-nav ml-auto">
                          <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
                          <li class="nav-item"><a class="nav-link" href="../about.html">About</a></li>
                          <li class="nav-item"><a class="nav-link" href="../project.html">Project</a></li>
                          <li class="nav-item"><a class="nav-link" href="../contact.html">Contact</a></li>
                      </ul>
                  </div>
              </div>
          </nav>`
          ;
    }
    
  }

class MyHeader extends HTMLElement {
  
    // connect component
    connectedCallback() {
      this.innerHTML =
      `<!-- Page Header-->
        <header class="masthead" style="background-image: url('assets/img/bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="page-heading">
                            <h1 style="font-size:60px; text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000,
                            1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;">Jason S. Portfolio</h1>
                            <span class="subheading">Network Security Application and Software Developer well versed in SQL, Python, React, React Native and more...</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>`
      ;
    }
    
  }

  class MyFooter extends HTMLElement {
  
    // connect component
    connectedCallback() {
      this.innerHTML =
      `<!-- Footer-->
      <footer>
          <div class="container">
              <div class="row">
                  <div class="col-lg-8 col-md-10 mx-auto">
                      <ul class="list-inline text-center">
                          <li class="list-inline-item">
                              <a href="https://linkedin.com/in/jasonsoukchamroeun">
                                  <span class="fa-stack fa-lg">
                                      <i class="fas fa-circle fa-stack-2x"></i>
                                      <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                          <li class="list-inline-item">
                              <a href="https://github.com/jvchamroeun">
                                  <span class="fa-stack fa-lg">
                                      <i class="fas fa-circle fa-stack-2x"></i>
                                      <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                                  </span>
                              </a>
                          </li>
                      </ul>
                      <p class="copyright text-muted">Copyright &copy; Jason Soukchamroeun 2023</p>
                  </div>
              </div>
          </div>
      </footer>`
      ;
    }
  }

    // register component
  customElements.define( 'my-nav', MyNav );
  customElements.define( 'my-nav-2', MyNav2 );
  customElements.define( 'my-header', MyHeader );
  customElements.define( 'my-footer', MyFooter)