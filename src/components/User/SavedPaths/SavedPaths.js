import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../UserPaths/userPaths.css";

export function SavedPaths(props) {
  let savedPath;
  if (props.saved.length > 0) {
    savedPath = props.saved.map((path, index) => {
      return (
        <li className="path" key={index}>
          <Link to={`/dashboard/overview/${path.id}`}>
            <img
              src={`https://res.cloudinary.com/thepaths/image/upload/v1533069112/thumbnails/${
                path.id
              }.png`}
              alt=""
              className="heroImage"
            />
            <p>{path.title}</p>
          </Link>
        </li>
      );
    });
  } else {
    savedPath = (
      <li className="empty">
        <p>You currently have no saved paths, go to explore to find some</p>
        <Link to={"/dashboard/explore"}>
          <button>Explore</button>
        </Link>
      </li>
    );
  }

  return (
    <div className="Paths-Container">
      <h2>Your Saved Paths</h2>
      <ul>{savedPath}</ul>
    </div>
  );
}

const mapStateToProps = state => ({
  saved: state.userPaths.saved || 0
});

export default connect(mapStateToProps)(SavedPaths);
