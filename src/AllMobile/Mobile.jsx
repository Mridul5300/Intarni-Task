import { useEffect, useState } from "react";
import MobileData from "./MobileData";
import { BiSearch } from "react-icons/bi";
import { Watch } from "react-loader-spinner";

const Mobile = () => {
     const [mobiledata, setMobileData] = useState([]);
     const [sortdata, setSortdata] = useState("");
     const [defaultdata, setDefaultdData] = useState([]);
     const [loading, setLoading] = useState(true);
     const [searchQuery, setSearchQuery] = useState("");
     
useEffect(() => {
          fetch('Data.json')
               .then(res => res.json())
               .then(data => {
                    setMobileData(data);
                    setDefaultdData(data);
                    setTimeout(() => setLoading(false), 1000);
               });
     }, []);     

     // Data Sorted
     const handleSort = (e) => {
          const order = e.target.value;
          setSortdata(order);

          if (order === "default") {
               setMobileData(defaultdata);
          } else {
               const sortedData = [...mobiledata].sort((a, b) => {
                    if (order === "low") {
                         return a.price - b.price;
                    } else if (order === "high") {
                         return b.price - a.price;
                    } else {
                         return 0;
                    }
               });
               setMobileData(sortedData);
          }
     };

     const handleSearch = (e) => {
          const query = e.target.value.toLowerCase();
          setSearchQuery(query);
  
          if (query === "") {
              setMobileData(defaultdata);
          } else {
              const filteredData = defaultdata.filter(mobile => 
                  mobile.name.toLowerCase().includes(query)
              );
              setMobileData(filteredData);
          }
      };
     return (
          <div>
               {loading ? (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
                         <div className="-mt-10">
                              <Watch
                                   visible={true}
                                   height="100"
                                   width="80"
                                   radius="48"
                                   color="#4fa94d"
                                   ariaLabel="watch-loading"
                                   wrapperStyle={{}}
                                   wrapperClass=""
                              />
                         </div>
                    </div>
               ) : (
                    <div>
                         <div  className="p-6 py-12 w-950px mt-2 bg-gradient-to-r from-gray-800 via-gray-900 to-black border-opacity-5">
                              <div className="container  mx-auto">
                                   <div className="flex flex-col lg:flex-row items-center justify-center">
                                        <div className="space-x-2 text-white text-2xl uppercase text-center py-2 lg:py-0">
                                             <h2>Our All Product</h2>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="-my-3 flex justify-center">
                              <div className="relative w-[300px]">
                                   <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        className="w-full px-4 py-2 rounded-md border bg-white text-black border-gray-600 pl-10"
                                   />
                                   <div className="absolute inset-y-0 right-2 flex items-center pl-3">
                                        <button className="btn btn-sm btn-outline hover:bg-green-300">
                                             <BiSearch className="text-gray-600" />
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <select
                              className="btn-outline p-2 shadow-md rounded-lg text-black hover:text-black hover:bg-green-400 ml-10 my-10"
                              value={sortdata}
                              onChange={handleSort}
                         >
                              <option value="default">Sort</option>
                              <option value="low">Low To High Range Price</option>
                              <option value="high">High To Low Range Price</option>
                         </select>
                         <div 
                         className="mt-5 mb-10 flex flex-1 flex-wrap gap-6 lg:ml-9 md:ml-3 sm:ml-5">
                              {mobiledata.map(mobile => (
                                   <MobileData key={mobile.id} mobile={mobile} />
                              ))}
                         </div>
                    </div>
               )}
          </div>
     );
};

export default Mobile;
