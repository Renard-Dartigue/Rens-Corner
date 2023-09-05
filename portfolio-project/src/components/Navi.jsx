import { Link, useLocation } from 'react-router-dom';

function Navis() {
    const currentPage = useLocation().pathname;

    return (
      <>
          <header class="background-tint">
          <h1 className= "title">Renard Bien-Aime</h1>
            <nav class="nav-bar">
                <ul className= "nav nav-tabs">
                  <li>
                    <Link
                    to= "/"
                    className={currentPage === '/' ? 'nave-link active' : 'nav-link'}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                  <Link
                    to= "/AboutMe"
                    className={currentPage === '/AboutMe' ? 'nave-link active' : 'nav-link'}
                    >
                      About Me
                    </Link>
                  </li>
                  <li> 
                    <a href="#">Work</a>
                  </li>
                  <li> 
                    <a href="#">Contact Me</a>
                  </li>
                  <li> 
                    <a href="#" >Resume</a>
                  </li>
                </ul>                   
            </nav>
          </header>
  
      </>
    )
  }
  
  export default Navis