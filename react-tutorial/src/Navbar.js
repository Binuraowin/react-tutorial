import Link from "react-router-dom/modules/Link";


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <Link href="/">Home</Link>
                <Link href="/create" style={{
                    color:"pink",
                    backgroundColor:"green",
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;
