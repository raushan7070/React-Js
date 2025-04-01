// import React from 'react';
// import style from "./myntranav.module.css";


// const MyntraNav = () => {
//     // let headingCSS={
//     //     backgroundColor:"red",
//     //     color: "white",
//     // };
//   return (
//     <nav >
//         <div >
//         <section >
//         <ul id={style.box}>
//             <li ></li>
//             <li>MEN</li>
//             <li>WOMEN</li>
//             <li>KIDS</li>
//             <li>HOME & LIVING</li>
//         </ul>
//         </section>
//         </div>
//     </nav>
        
    
//   );
// };

// export default MyntraNav;
import React, { useState } from 'react';
import styles from './myntranav.module.css';  // Import the CSS module

const MyntraNav = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // You can replace this with actual search functionality
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="" className={styles.logoLink}><img src="" alt="" /></a>
      </div>

      {/* Navbar Categories */}
      <ul className={styles.navLinks}>
        <li><a href="/men" className={styles.link}>Men</a></li>
        <li><a href="/women" className={styles.link}>Women</a></li>
        <li><a href="/kids" className={styles.link}>Kids</a></li>
        <li><a href="/home-living" className={styles.link}>Home & Living</a></li>
        <li><a href="/beauty" className={styles.link}>Beauty</a></li>
        <li><a href="/offers" className={styles.link}>Offers</a></li>
      </ul>

      {/* Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={(e) => e.key === 'Enter' && handleSearchSubmit(e)}
          placeholder="Search for products, brands and more"
          className={styles.searchInput}
        />
        <button onClick={handleSearchSubmit} className={styles.searchButton}>Search</button>
      </div>

      {/* User and Cart Actions */}
      <div className={styles.userActions}>
        <a href="/login" className={styles.link}>Sign In</a>
        <a href="/cart" className={styles.cartLink}>
          {/* <img src="" alt="" /> */}
        </a>
      </div>
    </nav>
  );
};

export default MyntraNav;
