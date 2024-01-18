import React from 'react'
import style from './sidebar.module.css'
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { LuLibrary } from "react-icons/lu";
function Sidebar() {
  return (
    <>
    <div className={style.sidebar}>
            <img 
                className={style.sidebar__logo} 
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' 
                alt='Spotify Logo'
            />
            <div className={style.sidebar__option}>
                <IoHome />
                <h4>Home</h4>
            </div>
            <div className={style.sidebar__option}>
                <FaSearch />
                <h4>Search</h4>
            </div>
            <div className={style.sidebar__option}>
                <LuLibrary />
                <h4>Your Library</h4>
            </div>
            <br />
            <strong className={style.sidebar__title}>PLAYLISTS</strong>
            <hr />
            <ul className={style.sidebar__list}>
                <li className={style.sidebar__item}>Discover Weekly</li>
                <li className={style.sidebar__item}>Liked Songs</li>
                <li className={style.sidebar__item}>Albums</li>
                <li className={style.sidebar__item}>Artists</li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar