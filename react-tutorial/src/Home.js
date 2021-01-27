import React, {useEffect, useState} from "react";
import BlogList from './BlogList'

const Home = () => {
    const [fliter,setFilter]= useState('binura')
    const [name,setName]= useState('binura')
    const [isPending,setIsPending]= useState(true)
    const [error, setError] = useState(null);

    // const [blogs, setBlogs] = useState([
    //         { title: 'My new website', body: 'lorem ipsum...', author: 'my', id: 1 },
    //         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'my', id: 2 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'binura', id: 3 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'binura', id: 4 },
    //         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'binura', id: 5 }
    //         ])

    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    const filter = () => {
        const newBlogs = blogs.filter(blog => blog.author === 'binura');
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data =>{
                setBlogs(data)
                setIsPending(false)
                setError(null);
            })
            .catch(err => {
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
            })
        console.log('use effect');

    },[]);

    return (
            <div className="home">
                <button onClick={filter}>filter</button>
                <button onClick={()=>setName('buruwa')}>filter</button>
                { error && <div>{ error }</div> }
                {isPending && <div>Loading.....</div>}
                {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
                { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'my')} title="My Blogs"
                           handleDelete={handleDelete}/>}
            </div>
        );
}

export default Home;
