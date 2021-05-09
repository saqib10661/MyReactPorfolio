import React from "react";
import Gif from '../images/SpaceInvaders.gif'
import PortfolioCards from '../components/PortfolioCards';
import Gif2 from '../images/Takeaway-management.gif';

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>

      <div className="card1">
        <PortfolioCards
            imgUrl={Gif}
            detail="Space invaders game using python. As you can see the invaders are being killed
            as the score goes up for each one there is 5 points. A game such as this was fun to
            create and learn all the aspects of Python game development. Further enchancmenets
            can be made such as adding more levels. This can be a future project."/>

      </div>

    
      <div className="card2">
        <PortfolioCards
          imgUrl={Gif2}
          detail="A Takeway management system created using java on eclipse. It can be used to
          calculate total order and discount aswell as convert differetn types of currencies.
          Finally a recipet can be added to show the total of everything. It also has an extra
          option of a calculator if needed." 
        />
      </div>


    </div>
  )

}

export default Portfolio;
