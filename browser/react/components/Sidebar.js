import React from 'react';
<<<<<<< HEAD

const Sidebar = (props) => {

  const deselectAlbum = props.deselectAlbum;

=======
import { Link } from 'react-router';

const Sidebar = (props) => {

>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
<<<<<<< HEAD
          <a href="#" onClick={deselectAlbum}>ALBUMS</a>
=======
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
>>>>>>> c2ff04436dabc0c5862c5fc14a0cc1419a6657d2
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
