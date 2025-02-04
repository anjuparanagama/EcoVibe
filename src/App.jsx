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
      <div className="h-auto flex flex-col md:flex-row">
            {/* Left Section */}
            <Left />

            {/* Right Section */}
            <Right />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 mx-12">
        <div>
        <FRectangle url = "/images/Ellipse1.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse2.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse3.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>
      </div>

      {/* About Section */}
      <Mid/>

      {/* footer  Section */}
      <Footer/>

    </main>
  );
}

export default App;
