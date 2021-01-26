const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"pink",
                    backgroundColor:"green",
                }}>New Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;
