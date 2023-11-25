import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title={'Menu that Fits You Plate'} />
      <h1 className="headtext__cormorant">Today´s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index, id) => (
            <p key={id}>{wine.title}</p>
          ))}
        </div>
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <div></div>
    </div>
  </div>
);

export default SpecialMenu;
