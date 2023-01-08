import './propertyList.css';
export default function PropertyList() {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/565324/pexels-photo-565324.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>255 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>40 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/3182841/pexels-photo-3182841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>200 cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          className="pListImg"
          src="https://images.pexels.com/photos/347141/pexels-photo-347141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>250 villas </h2>
        </div>
      </div>
    </div>
  );
}
