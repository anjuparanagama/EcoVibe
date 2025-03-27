import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import FRectangle from './components/frectangle';
import Mid from './components/Mid';
import Footer from './components/Footer';
import Bupper from './components/Bottom/Upper.jsx';
import BMiddle from './components/Bottom/Middle.jsx';
import BFooter from './components/Bottom/Footer.jsx';
import BFooterup from './components/Bottom/Footerb.jsx';

function App() {
  return (
    <main className="bg-white max-w-[1630px] min-w-[450px] items-center justify-center m-auto ex:border-2 border-gray-800">
      {/* Hero Section */}
      <div className="h-auto flex flex-col dx:flex-row items-center justify-center">
        {/* Left Section */}
        <Left />

        {/* Right Section */}
        <Right/>
      </div>

      {/*frectangle section*/}
      <div className="grid grid-cols-1 dx:grid-cols-3 fx:grid-cols-2 items-center gap-6 mt-16 mx-12 ">
        <div>
        <FRectangle url = "/images/Ellipse1.png" title="Aloe Vera" text = " is a perfect indoor plant with air-purifying qualities, easy to maintain."/>
        </div>

        <div>
        <FRectangle url = "/images/Ellipse2.png" title="Spider Plant" text = " thrives in any space, improves air quality, and requires minimal care."/>
        </div>

        <div className="fx:col-span-2 fx:mx-32 fx:flex fx:justify-center block dx:hidden ">
        <FRectangle url = "/images/Ellipse3.png" title="Fiddle Leaf" text = " Fig adds elegance, purifies air, and enhances your home’s aesthetic."/>
        </div>

        <div className="hidden dx:block">
        <FRectangle url = "/images/Ellipse3.png" title="Fiddle Leef" text = " Fig adds elegance, purifies air, and enhances your home’s aesthetic."/>
        </div>
      </div>

      {/* Mid Section */}
      <Mid/>

      {/* footer  Section */}
      <Footer className="relative"/>

      <Bupper />

      <BMiddle />

      <BFooter/>

      <BFooterup/>

    </main>
  );
}

export default App;
