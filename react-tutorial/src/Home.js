import React, {useState} from "react";
import BlogList from './BlogList'

const Home = () => {


        const [blogs, setBlogs] = useState([
            { title: 'My new website', body: 'lorem ipsum...', author: 'my', id: 1 },
            { title: 'Welcome party!', body: 'lorem ipsum...', author: 'my', id: 2 },
            { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'dfsd', id: 3 }
        ])




        return (
            <div className="home">
             <BlogList blogs={blogs} title="All Blogs"/>
                <BlogList blogs={blogs.filter((blog)=>blog.author==='my')} title="My Blogs"/>
            </div>
        );
}

export default Home;
