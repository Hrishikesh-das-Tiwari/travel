import beach from '../../assets/beach.jpg';
import Card from './Card/Card';
import Recommendation from './Recommendation/Recommendation';
import './Home.scss';

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="background">
          <img src={beach} alt="beach" />
        </div>
        <div className="content">
          <div className="title">
            <h1>Travel to Explore</h1>
            <p>
              Still round the corner, there may wait, a new road or a secret
              gate !
            </p>
          </div>
          <div className="search">
            <div className="container">
              <input
                type="text"
                placeholder="Search your destination"
                value={'place'}
              />
            </div>
            <button>Search</button>
          </div>
        </div>
      </div>
      <div className="move">
        <i className="fa-solid fa-angles-up"></i>
      </div>
      <div className="container">
        <Card />
      </div>
      <div className="container">
        <Recommendation />
      </div>
    </div>
  );
};

export default Home;
