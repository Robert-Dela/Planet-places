import Head from "next/head";
import styles from "./layout.module.css"
import {MdFilterCenterFocus} from "react-icons/md"

const { container, header, main, footer,

} = styles

const Layout = ({children, title="World Ranks"}) => {
    return (
        <div className={container}>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={header}>
                <MdFilterCenterFocus/>
                <h2>
                    Planet's Countries
                </h2>
            </header>
    
            <main className={main}>
                {children}
            </main>
    
            <footer className={footer}>
                Robert @ skyismedia.com
            </footer>
      </div>
    );
};

export default Layout