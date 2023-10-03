
import { useEffect, useState, createContext } from 'react';
// import './App.css';
import axios from "axios";
import { Banner } from './Banner';
import { Dish } from './Dish';
import { Navbar } from './Navbar';
import { Loader } from './Loader'
import './style.scss'
import { SkeletonBanner } from './SkeletonBanner';
export const dataContext = createContext();
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    
    const getData = async () => {
      try {
        await axios.get(`./data.json`).then(response => {
          setData(response.data);
        })
      }
      catch (err) {
        console.log(err);
      }
      finally {

        // setTimeout(() => {
        //   setLoading(false);
        //   // setShowData(true);
        // }, 2000);
        setTimeout(() => {
          setLoading(false);
          // setShowData(true);
        }, 2000);
        // setLoading(false);
        
        setTimeout(() => {
          // setLoading(false);
          
          
          setShowSkeleton(false);
        }, 4000);
        // Set loading to false regardless of success or failure

      }
    };

    getData();
  }, []);

  console.log(data, "data");
  return (
    <div className="App">
      <Navbar />
      {loading ? ((
        <div className='Loading'>
          <Loader />

        </div>
      )) : ((
        showSkeleton ? ((<SkeletonBanner />)) : (
          <div className='marginClass'>

            <dataContext.Provider value={{ data, setData }}>
              <Banner />
              <Dish />
            </dataContext.Provider>

          </div>
        )
      )
      )}
    </div>
  );
}

export default App;
