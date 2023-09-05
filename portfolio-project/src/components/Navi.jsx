import { Link, useLocation } from 'react-router-dom';

function Navis() {
    const currentPage = useLocation().pathname;

    return (
        <>
            <header class="background-tint">
            <h1 className= "title">Renard Bien-Aime</h1>
            <nav className="nav-bar">
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
                        <Link
                        to= "/Portfolio"
                        className={currentPage === '/Portfolio' ? 'nave-link active' : 'nav-link'}
                        >
                        Portfolio
                        </Link> 
                    </li>
                    <li>
                        <Link
                        to= "/Contact"
                        className={currentPage === '/Contact' ? 'nave-link active' : 'nav-link'}
                        >
                        Contact
                        </Link> 
                    </li>
                    <li>
                        <Link
                        to= "/Resume"
                        className={currentPage === '/Resume' ? 'nave-link active' : 'nav-link'}
                        >
                        Resume
                        </Link> 
                    </li>
                </ul>                   
            </nav>
            </header>
        </>
    )
}

export default Navis