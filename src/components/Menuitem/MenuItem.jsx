import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="menuitem-name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>

      <div className="app__menuitem-dash"></div>

      <div className="menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>

      <div className="menuitem-sub">
        <p className="p__opensans" style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  </div>
);

export default MenuItem;
