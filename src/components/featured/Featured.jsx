import "./featured.css";
export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://www.holidify.com/images/bgImages/PARIS.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>123 street</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://www.holidify.com/images/bgImages/NEW-ZEALAND.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>New Zealand</h1>
          <h2>321 city</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          className="featuredImg"
          src="https://www.holidify.com/images/bgImages/BARCELONA.jpg"
          alt=""
        />
        <div className="featuredTitles">
          <h1>Barcelona</h1>
          <h2>123 street</h2>
        </div>
      </div>
    </div>
  );
}
