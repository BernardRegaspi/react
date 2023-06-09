import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs] = useState([
        {title: 'My new website', body: 'lore ipsum...', author: 'bob', id: 1},
        {title: 'Welcome Party', body: 'lore ipsum...', author: 'king', id: 2,},
        {title: 'Web dev top tips', body: 'lore ipsum...', author: 'bob', id: 3}
    ]);

    return ( 
        <div className="home">
           <BlogList blogs = { blogs } title="All Blogs"/>
           <BlogList blogs = { blogs.filter((blog) => blog.author === 'bob') } title="John's Blogs"/>
        </div>
     );
}
 
export default Home;