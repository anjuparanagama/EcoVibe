import React from 'react';

function App() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="h-auto flex flex-col md:flex-row align-middle justify-center">
        {/* Left Section */}
        <div className="md:basis-1/2 p-6 md:p-12 rounded-br-[200px] bg-gray-200">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 ml-10  mt-5 z-0	">
            Bring <span className="text-green-700">GREEN</span> to<br/> your home and<br/> make you feel <span className="text-green-700">BETTER</span>
          </h2><br/>
          <p className="text-gray-600 ml-10 ">
            Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Cursus imperdiet sed id<br/> elementum. Quam vel aliquam sit.
          </p>
          <br/>
          
          <div class = "flex flex-row ml-10 justify-around">
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
            <button class = " bg-green-800 text-white px-8 py-2 rounded-full ml-10 text-xl pb-2">find your plant</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:basis-1/2 flex justify-center">
          <div className="flex justify-center items-center">
            <img
              className="w-[800px] h-[800px] top-[-80px] left-[643px] absolute"
              src="https://s3-alpha-sig.figma.com/img/c548/8085/c9efa4a257bcf8aba598cb9deb7c7c9b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONr-7HwUgLaiVBH1JQP3aVo5xsdqK9hJJpOCKCRJhWcdlwh1KeueCAaA51XEmYX6J-uYg85r8SPKS0jxt~LgS4rR3TQUI36m0CIShEMI2T0qzEDTS-CUdJFktpuGtF9Hy30FL0YfOITlDJlEdJ9UB6uLXSwfPNOIXUsG82nSWz2uaikLyRiz3OOrrol4dYztX9-35CeLq0bA8ti0S455XbnxFrGkYf1hxnFyLMk0hPg0EFCOgF7vj8Psq3wNZzD~nv6toKxJDkFPYndAEzhUvjJ9wvRoBk9CLF81uyJmc1X9OEhczD~9lU4usV5BaMqKSFT7xua-cE6QJ1p4blrigA__"
              alt="A conceptual representation of a green home project."/>
              </div>
          {/*circle image*/}
          <div className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <img src= "" />
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 w-11/12 md:grid-cols-3 gap-6 p-6 mt-16 mx-auto">
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
      <section className="bg-slate-50 mt-6 p-6 rounded-md shadow-lg md:w-11/12 mx-auto grid grid-flow-col gap-4 items-center z-0">
        <div className="relative">
            <div>
              <img className = "z-0 -m-6 -mt-40" src = "images/Blob.png" />
            </div>
            <div className = "relative z-20 -mt-28 ml-14">      
              <h2 className=" font-semibold text-gray-800 text-5xl">Love your plants<br/>Take care of yourself</h2><br/>
              <p className="text-gray-600 mt-2 text-2xl">
                Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
              </p>
              <br/>
            <button className="bg-slate-800 text-white p-4 rounded-full text-xl">explore all plants</button>
            </div>  
        </div> 
        
        <div className = "relative ml-40 justify-end">
          <img className="z-0 mt-24 h-auto" src = "images/shape.png" />
          <img className="z-20 absolute top-0 w-11/12 -ml-7" src = "https://s3-alpha-sig.figma.com/img/f086/2623/3196017cb24e096f8d97b6ca5b4291de?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfOXWtCv1J4IK-LahJr-IQssrMsszemNpVsT51CFK5DH5aZug-IlUa9McU1E20wwSHG32EE4qOSapdLQR-BcivhEpf0vV1cM245x0sboJCr97IDnl2j2eaeXD5zy~dsXes9HDmiJc7DDTMq~wB6zM0cg4vX2-YEbckHRrvameencMkX2MCuw4McnWTWU7wQK3Mn8TdW4YcJp5i9TbJslF60jMCCtsGEUgCGgjMggSRWBBmKuk7VRBcQn12ykd66yWeu50EhZAWNiOvmWDdyt8yfjC9DWabiEHLUCqQeaS5I05apGwda2A3n4kt-eMNMkJK5qkLbgCe4psAoevunAkQ__"/>
        </div>
      </section>
        
      <section className="items-center  outline outline-offset-2 outline-1 justify-around bg-white  rounded-md shadow-lg md:w-11/12 mx-auto relative z-30  grid grid-flow-col gap-4 -mt-28 mb-8">
        <div className = "flex justify-center items-center h-full px-6 py-3">
          <img className="w-16 h-16 rounded mx-7" src ="https://s3-alpha-sig.figma.com/img/c247/a27f/a6a9ff9fc1315b981f89270ff12efe84?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OY2-6BZjkczFXvi4Dc-gOsAChj6d77yNcZLCMV8JpVCJxzjvDJmdpeJJqKDpn0Jzc7hHMvvIgd6gq3YHptvx56BP3kxEjEfdJJ7TFCqsyvhfJ0Gk~ZyhPhB2hCJfI6KGObQ~rShjEoJWUQvkC-2MYHWykSGaRpNh0ELDVUOa1dz32We5nZrXbzmfd9Z2BPGFJhXo75DbpcSxxmfCP9~9ahlOECak55EnahJM9W-YNJ92f4gz0tSTgdDDIL3HTLgXjm8bFke6nBWhGKW82oUD5Mdwm6Na-LFPgVYlwj6XUXv309ixYAI6fnY5Rb3SP4bGwfgDOYaId0pdhwfS5L4UyQ__"/>
          <p>Lorem ipsum dolor amet, consectetur<br/> adipiscing elit. Faucibus in libero.Lorem<br/> ipsum dolor amet, consectetur adipiscing<br/> elit. Faucibus in libero</p>
        </div>
        
        <div className = "flex justify-center items-center h-full px-6 py-3">
          <img className="w-16 h-16 rounded mx-7" src = "https://s3-alpha-sig.figma.com/img/f14d/0e84/55fca800d5bbf0970e4d9127b8544685?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OOEBzkkOFbIW4wA-MjDLwK3t7dmveuimjGsWJ2vI-Kni0W1wNiZ2uEaKkABaknp86LgLGR2pm5RMHKb~b6BacQgNT9CroPk1DFUKNqhJvYJtz30nIntH9aMJt4cRlCeH6j1lm6YfAZ-4isidNqnU5thDD9cycDTMLPICpsE796bWYOvEUcTQHzIrmdHMygPAR5CBeGsA5Apg40nFWZ7CM3Z5FLgwXDNTtZAhcFeSk2eild6JOpTk8w2xXgUUOX0sO94Hcmao85Ng85~cXY13yKfSk~lOvbSglGcqh~qVEAUK~794eX1fJ0crkcaIZmzyaJwWwyschSZMV~p~qbV72w__"/>
          <p>Lorem ipsum dolor amet, consectetur<br/> adipiscing elit. Faucibus in libero.Lorem<br/> ipsum dolor amet, consectetur adipiscing<br/> elit. Faucibus in libero</p>
        </div>
      </section>
      <section>

      </section>
    </main>
  );
}

export default App;
