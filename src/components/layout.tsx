import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    navLinks,
    navLinkItem,
    navLinkText,
    background,
    sidebar,
    navLinkItemSpecial,
    navLinkTextSpecial
} from './layout.module.css'

interface customProps {
    children: JSX.Element|JSX.Element[];
}

const Layout = (props: customProps) => {
    const { children } = props;
    return (
        <>
            <div className={ container }>
                <nav>
                    <ul className={navLinks}>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>Resume</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>Projects</Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>About</Link>
                        </li>
                        <li className={navLinkItemSpecial}>
                            <Link to="/" className={navLinkTextSpecial}>BY</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {children}
                </main>

            </div>
            <div className={ background }></div>
            <div className={ sidebar }></div>
        </>

    )
}

export default Layout