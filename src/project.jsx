import React from 'react';

function App() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="h-auto flex flex-col md:flex-row align-middle justify-center">
        {/* Left Section */}
        <div className="md:basis-1/2 p-6 md:p-12 rounded-br-[200px] bg-gray-200">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 ml-20  mt-8 z-0	">
            Bring <span className="text-green-700">GREEN</span> to<br/> your home and<br/> make you feel <span className="text-green-700">BETTER</span>
          </h2><br/>
          <p className="text-gray-600 ml-20 ">
            Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Cursus imperdiet sed id<br/> elementum. Quam vel aliquam sit.
          </p>
          <br/>
          
          <div class = "flex flex-row ml-20 justify-around">
            <div className = "basis-1/3">
              <h3 className="font-bold">124K+ <br/> _______ </h3>
              <p>Lorem ipsum<br/> consectetur</p>
            </div>
            <div className = "basis-1/3">
              <h3 className="font-bold">126<br/> _______ </h3>
              <hr />
              <p>Lorem Ipsum<br/> consectetur</p>
            </div>
            <div className = "basis-1/3">
              <h3 className="font-bold">78K<br/> _______ </h3>
              <hr />
              <p>Lorem Ipsum<br/> Consectetur</p>
            </div>
          </div>
          <br/>
          <div>
            <button class = " bg-green-800 text-white px-8 py-2 rounded-full ml-20 text-xl pb-2">find your plant</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:basis-1/2 flex justify-center">
          <div className="flex justify-center items-center">
            <img
              className="w-full h-auto"
              src="https://s3-alpha-sig.figma.com/img/c548/8085/c9efa4a257bcf8aba598cb9deb7c7c9b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONr-7HwUgLaiVBH1JQP3aVo5xsdqK9hJJpOCKCRJhWcdlwh1KeueCAaA51XEmYX6J-uYg85r8SPKS0jxt~LgS4rR3TQUI36m0CIShEMI2T0qzEDTS-CUdJFktpuGtF9Hy30FL0YfOITlDJlEdJ9UB6uLXSwfPNOIXUsG82nSWz2uaikLyRiz3OOrrol4dYztX9-35CeLq0bA8ti0S455XbnxFrGkYf1hxnFyLMk0hPg0EFCOgF7vj8Psq3wNZzD~nv6toKxJDkFPYndAEzhUvjJ9wvRoBk9CLF81uyJmc1X9OEhczD~9lU4usV5BaMqKSFT7xua-cE6QJ1p4blrigA__"
              alt="A conceptual representation of a green home project."/>
              </div>
          {/*circle image*/}
          <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <img src= "" />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mx-8">
        <div  className = "flex justify-center items-center h-full  rounded-lg outline outline-offset-2  outline-1 px-6 py-3"> 
        <img className="w-16 h-16 rounded-full"src = "https://s3-alpha-sig.figma.com/img/0ab2/6306/f80a2c5230cb9f8f103806d58ade165a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NqQD9j5N60X3QNWLZ-0p-Z4h~EOL87YkojZaMK5lrxv1Lu2yFk1W~sUis6kEpoRzcz2eYFLUKzjaanCD0UwAVb4aeLxlLhkUULAlm94KOUwcQfoHF69XrWZr6SmvJ27vgn3w2YUByyBay-pilwVsvbzsEMPGNtalTGJaO1Dn~BkaUPlAPYdDVKsDXI9FOcUwELfpHq1xTNcGNQW5DUD9jwMlciwrp~0SUS7SlI2sRRZzh~UvOGyuChyjSRQ-xkXl7qj~0GV~D3OpsB5Cyc33~uqzK4AYSX5q4CsfLSqivTu83axaYXHYUt5KPdLxC7K~K-L9enW4AUc0-HN4Yn38NQ__" />
        <p className="mx-4 px-8">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus in libero risus</p>
        </div>

        <div className = "flex justify-center items-center h-full  rounded-lg outline outline-offset-2  outline-1 px-6 py-3 ">
        <img className="w-16 h-16 rounded-full" src = "https://s3-alpha-sig.figma.com/img/0ab2/6306/f80a2c5230cb9f8f103806d58ade165a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NqQD9j5N60X3QNWLZ-0p-Z4h~EOL87YkojZaMK5lrxv1Lu2yFk1W~sUis6kEpoRzcz2eYFLUKzjaanCD0UwAVb4aeLxlLhkUULAlm94KOUwcQfoHF69XrWZr6SmvJ27vgn3w2YUByyBay-pilwVsvbzsEMPGNtalTGJaO1Dn~BkaUPlAPYdDVKsDXI9FOcUwELfpHq1xTNcGNQW5DUD9jwMlciwrp~0SUS7SlI2sRRZzh~UvOGyuChyjSRQ-xkXl7qj~0GV~D3OpsB5Cyc33~uqzK4AYSX5q4CsfLSqivTu83axaYXHYUt5KPdLxC7K~K-L9enW4AUc0-HN4Yn38NQ__" />
        <p className="mx-4 px-8">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus in libero risus</p>    
        </div>

        <div  className = "flex justify-center items-center h-full  rounded-lg outline outline-offset-2 outline-1 px-6 py-3">
        <img className="w-16 h-16 rounded-full" src = "https://s3-alpha-sig.figma.com/img/0ab2/6306/f80a2c5230cb9f8f103806d58ade165a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NqQD9j5N60X3QNWLZ-0p-Z4h~EOL87YkojZaMK5lrxv1Lu2yFk1W~sUis6kEpoRzcz2eYFLUKzjaanCD0UwAVb4aeLxlLhkUULAlm94KOUwcQfoHF69XrWZr6SmvJ27vgn3w2YUByyBay-pilwVsvbzsEMPGNtalTGJaO1Dn~BkaUPlAPYdDVKsDXI9FOcUwELfpHq1xTNcGNQW5DUD9jwMlciwrp~0SUS7SlI2sRRZzh~UvOGyuChyjSRQ-xkXl7qj~0GV~D3OpsB5Cyc33~uqzK4AYSX5q4CsfLSqivTu83axaYXHYUt5KPdLxC7K~K-L9enW4AUc0-HN4Yn38NQ__" />
        <p className="mx-4c px-8">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Faucibus in libero risus</p>    
        </div>

      </section>

      {/* About Section */}
      <section className="bg-white mt-6 p-6 rounded-md shadow-lg w-11/12 md:w-3/4 mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">About Tailwind</h2>
        <p className="text-gray-600 mt-2">
          Tailwind CSS is a utility-first framework for quickly building custom designs.
        </p>
      </section>
    </main>
  );
}

export default App;
