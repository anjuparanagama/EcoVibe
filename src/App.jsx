import React from 'react';
import Left from './components/Left';
import Right from './components/Right';

function App() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="h-auto flex flex-col md:flex-row align-middle justify-center">
        {/* Left Section */}
          <Left/>
        {/* Right Section */}
          <Right/>
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
      <section className="bg-white mt-6 p-6 rounded-md shadow-lg w-11/12 md:w-3/4 mx-auto flex flex-row">
        <div>
            <h2 className="text-2xl font-semibold text-gray-800">Love your plants<br/>Take care of yourself</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
            </p>
        <button>explore all plants</button>
        </div>
        
        <div >
        <img src = "https://s3-alpha-sig.figma.com/img/f086/2623/3196017cb24e096f8d97b6ca5b4291de?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kfOXWtCv1J4IK-LahJr-IQssrMsszemNpVsT51CFK5DH5aZug-IlUa9McU1E20wwSHG32EE4qOSapdLQR-BcivhEpf0vV1cM245x0sboJCr97IDnl2j2eaeXD5zy~dsXes9HDmiJc7DDTMq~wB6zM0cg4vX2-YEbckHRrvameencMkX2MCuw4McnWTWU7wQK3Mn8TdW4YcJp5i9TbJslF60jMCCtsGEUgCGgjMggSRWBBmKuk7VRBcQn12ykd66yWeu50EhZAWNiOvmWDdyt8yfjC9DWabiEHLUCqQeaS5I05apGwda2A3n4kt-eMNMkJK5qkLbgCe4psAoevunAkQ__"/>
        </div>
      </section>
        
      <section className="outline outline-offset-2 outline-1 justify-around bg-white  p-6 rounded-md shadow-lg w-10/12 md:w-3/4 mx-auto  flex flex-row -mt-10">
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
