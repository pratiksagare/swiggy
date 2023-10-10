
import { useEffect, useState, createContext,useLayoutEffect } from 'react';
// import './App.css';
import axios from "axios";
import { Banner } from './Banner';
import { Dish } from './Dish';
import { Navbar } from './Navbar';
import { Loader } from './Loader'
// import './style.scss'
// import '../public/style.scss'
import { SkeletonBanner } from './SkeletonBanner';
import { SkeletonDish } from './SkeletonDish';
export const dataContext = createContext();
function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [isStylesheetLoaded, setIsStylesheetLoaded] = useState(false);

  useLayoutEffect(() => {
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = '/public/style.scss';

    linkElement.onload = () => {
      setIsStylesheetLoaded(true);
    };

    // Append the link element to the head of the document
    document.head.appendChild(linkElement);

    // Cleanup: remove the dynamically added link element when the component unmounts
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);
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
    if (isStylesheetLoaded) {
      getData();
    }
  }, [isStylesheetLoaded]);

  console.log(data, "data");
  return (
    <div className="App">
      <Navbar />
      {/* {loading ? ((
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
      )} */}
      {
        (loading || showSkeleton) ? (
          <div className='Loading'>
            {loading && <Loader/>}
            {showSkeleton && <div>
              <SkeletonBanner/>
              <SkeletonDish/>
              </div>}
          </div>
        ):(
          <div className='marginClass'>

            <dataContext.Provider value={{ data, setData }}>
              <Banner />
              <Dish />
            </dataContext.Provider>

          </div>
        )
      }
    </div>
  );
}

export default App;
