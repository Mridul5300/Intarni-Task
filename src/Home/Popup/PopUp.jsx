import { useEffect, useState } from "react";


const PopUp = () => {
     const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('hasSeenPopup', 'true');
      }, 3000); // 3000 milliseconds = 3 seconds

      // Cleanup timer if component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };
     return (
          <div>
               {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-blue-500 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">This is an important message.</p>
            <button 
              onClick={handleClose}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
          </div>
     );
};

export default PopUp;