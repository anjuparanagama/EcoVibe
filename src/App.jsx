import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import FRectangle from './components/frectangle';
import Mid from './components/Mid';
import Footer from './components/Footer';


function App() {
  return (
    <main className="bg-white max-w-[1530px] min-w-[450px] items-center justify-center m-auto ex:border-2 border-gray-800">
      {/* Hero Section */}
      <div className="h-auto relative flex flex-col dx:flex-row">
            {/* Left Section */}
            <Left />

            {/* Right Section */}
            <Right />
      </div>
      <div className="grid grid-cols-1 dx:grid-cols-3 sm:grid-cols-2 items-center gap-6 mt-16 mx-12 ">
        <div>
        <FRectangle url = "/images/Ellipse1.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse2.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div className="sm:col-span-2 sm:flex sm:justify-center block dx:hidden ">
        <FRectangle url = "/images/Ellipse3.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>

        <div className="hidden dx:block">
        <FRectangle url = "/images/Ellipse3.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus"/>
        </div>
      </div>

      {/* About Section */}
      <Mid/>

      {/* footer  Section */}
      <Footer className="relative" />

    </main>
  );
}

export default App;
