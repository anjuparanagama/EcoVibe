import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import FRectangle from './components/frectangle';
import Mid from './components/Mid';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="h-auto flex flex-col md:flex-row align-middle">
        {/* Left Section */}
          <Left/>
        {/* Right Section */}
          <Right/>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mx-8">
        <div>
        <FRectangle url = "/images/Ellipse1.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse2.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse3.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white mt-6 p-6 rounded-md shadow-lg w-11/12 md:w-3/4 mx-auto flex flex-row">
        <Mid/>
      </section>
        
      <section className="outline outline-offset-2 outline-1 grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mx-8">
          <Footer/>
      </section>
      <section>

      </section>
    </main>
  );
}

export default App;
