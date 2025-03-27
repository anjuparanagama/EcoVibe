import React, { useState } from 'react';

const PlantList = () => {
  const plants = [
    { name: 'Fiddle-leaf fig', price: '$110.99', image: 'images/first.png' },
    { name: 'Aloe vera', price: '$110.99', image: 'images/second.png' },
    { name: 'Strelitzia nicolai', price: '$110.99', image: 'images/third.png' },
    { name: 'Ficus microcarpa', price: '$110.99', image: 'images/fourth.png' },
    { name: 'Monstera Deliciosa', price: '$120.99', image: 'images/fifth.png' },
    { name: 'Snake Plant', price: '$90.99', image: 'images/six.png' },
    { name: 'Rubber Plant', price: '$130.99', image: 'images/seven.png' },
    { name: 'Peace Lily', price: '$80.99', image: 'images/eight.png' },
  ];

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);
  const [showDetails, setShowDetails] = useState(Array(itemsPerPage).fill(false));

  const totalPages = Math.ceil(plants.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    setShowDetails(Array(itemsPerPage).fill(false)); 
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
    setShowDetails(Array(itemsPerPage).fill(false)); 
  };

  const toggleDetails = (index) => {
    setShowDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[index] = !newDetails[index];
      return newDetails;
    });
  };

  const startIndex = currentPage * itemsPerPage;
  const visiblePlants = plants.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
          {visiblePlants.map((plant, index) => (
            <div
              key={startIndex + index}
              className="w-80 h-[500px] flex flex-col transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => toggleDetails(index)}>

              <img src={plant.image} alt={plant.name} className="w-full h-[450px] object-cover" />
              <div className="p-4 flex flex-row flex-grow">

                <h2 className="text-lg">{plant.name}</h2>
                {showDetails[index] && (
                <p className="text-sm text-black mt-2">{plant.price}</p>

                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button onClick={handleBack} disabled={currentPage === 0} className="h-[50px] w-[50px]  py-2 rounded-lg mr-2 transition-all duration-200">
          <img className="flex justify-center items-center" src='images/ml.png'/>
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className="h-[50px] w-[50px]  py-2 rounded-lg transition-all duration-200 "
          >
            <img className="flex justify-center items-center" src='images/mr.png'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantList;