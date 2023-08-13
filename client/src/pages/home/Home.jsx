import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import axios from "axios";
import './home.css';
import { useLocation } from 'react-router-dom';

axios.defaults.baseURL = `/api`;

export default function Home() {
  const [posts , setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  
  return (
    <div>
      <Header />
      <div className='home'>
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </div>
  )
}
