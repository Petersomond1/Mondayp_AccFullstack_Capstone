import "./nav.css";
import Cart from "./Cart";
import Sign_In_Accounts from "./Sign_In_Accounts";
import ReturnsOrders from "./Returns_Orders";

export default function NavUp() {
  return (
    <>
    <div className="navup_container">
     
      <div className="navbar_component">
        <div className="nav-amazonlogo_layer1">
          <div className="nav-amazonlogo" href="/ref=nav_amazonlogo"></div>
          <div className="nav_amazonlogo_locale">.us</div>
        </div>

        <div className="nav_addresslocator">
          <div className="nav_addresslocatoricon">
            <div className="nav_greetinglocationtextwrap">
              <div className="nav_greeting">Hello</div>
              <div className="nav_yourlocation">Select your address</div>
            </div>
          </div>
        </div>

        <div>
          <form className="navbar_search_container">
            <div>
              <select className="navleft_dropdown_select">
                <option value="search-alias=aps">All Departments</option>
                <option value="search-alias=alexa-skills">Alexa Skills</option>
                <option value="search-alias=amazon-devices">
                  Amazon Devices
                </option>
                <option value="search-alias=amazonfresh">Amazon Fresh</option>
                <option value="search-alias=amazon-pharmacy">
                  Amazon Pharmacy
                </option>
                <option value="search-alias=warehouse-deals">
                  Amazon Warehouse
                </option>
                <option value="search-alias=appliances">Appliances</option>
                <option value="search-alias=mobile-apps">Apps & Games</option>
                <option value="search-alias=arts-crafts">
                  Arts, Crafts & Sewing
                </option>
                <option value="search-alias=audible">
                  Audible Books & Originals
                </option>
                <option value="search-alias=automotive">
                  Automotive Parts & Accessories
                </option>
                <option value="search-alias=baby-products">Baby</option>
                <option value="search-alias=beauty">
                  Beauty & Personal Care
                </option>
                <option value="search-alias=stripbooks">Books</option>
                <option value="search-alias=popular">CDs & Vinyl</option>
                <option value="search-alias=mobile">
                  Cell Phones & Accessories
                </option>
                <option value="search-alias=fashion">
                  Clothing, Shoes & Jewelry
                </option>
                <option value="search-alias=fashion-womens">
                  &#160;&#160;&#160;Women
                </option>
                <option value="search-alias=fashion-mens">
                  &#160;&#160;&#160;Men
                </option>
                <option value="search-alias=fashion-girls">
                  &#160;&#160;&#160;Girls
                </option>
                <option value="search-alias=fashion-boys">
                  &#160;&#160;&#160;Boys
                </option>
                <option value="search-alias=fashion-baby">
                  &#160;&#160;&#160;Baby
                </option>
                <option value="search-alias=collectibles">
                  Collectibles & Fine Art
                </option>
                <option value="search-alias=computers">Computers</option>
                <option value="search-alias=financial">
                  Credit and Payment Cards
                </option>
                <option value="search-alias=digital-music">
                  Digital Music
                </option>
                <option value="search-alias=electronics">Electronics</option>
                <option value="search-alias=lawngarden">
                  Garden & Outdoor
                </option>
                <option value="search-alias=gift-cards">Gift Cards</option>
                <option value="search-alias=grocery">
                  Grocery & Gourmet Food
                </option>
                <option value="search-alias=handmade">Handmade</option>
                <option value="search-alias=hpc">
                  Health, Household & Baby Care
                </option>
                <option value="search-alias=local-services">
                  Home & Business Services
                </option>
                <option value="search-alias=garden">Home & Kitchen</option>
                <option value="search-alias=industrial">
                  Industrial & Scientific
                </option>
                <option value="search-alias=prime-exclusive">
                  Just for Prime
                </option>
                <option value="search-alias=digital-text">Kindle Store</option>
                <option value="search-alias=fashion-luggage">
                  Luggage & Travel Gear
                </option>
                <option value="search-alias=luxury">Luxury Stores</option>
                <option value="search-alias=magazines">
                  Magazine Subscriptions
                </option>
                <option value="search-alias=movies-tv">Movies & TV</option>
                <option value="search-alias=mi">Musical Instruments</option>
                <option value="search-alias=office-products">
                  Office Products
                </option>
                <option value="search-alias=pets">Pet Supplies</option>
                <option value="search-alias=luxury-beauty">
                  Premium Beauty
                </option>
                <option value="search-alias=instant-video">Prime Video</option>
                <option value="search-alias=smart-home">Smart Home</option>
                <option value="search-alias=software">Software</option>
                <option value="search-alias=sporting">Sports & Outdoors</option>
                <option value="search-alias=specialty-aps-sns">
                  Subscribe & Save
                </option>
                <option value="search-alias=subscribe-with-amazon">
                  Subscription Boxes
                </option>
                <option value="search-alias=tools">
                  Tools & Home Improvement
                </option>
                <option value="search-alias=toys-and-games">
                  Toys & Games
                </option>
                <option value="search-alias=under-ten-dollars">
                  Under $10
                </option>
                <option value="search-alias=videogames">Video Games</option>
                <option value="search-alias=wholefoods">
                  Whole Foods Market
                </option>
              </select>
            </div>

            <div className="navfill_searchbox_wrap">
              <input
                type="text"
                className="navfill_searchbox"
                placeholder="Search Amazon"
              />
            </div>
            <div className="navright_search_submit">
              <div className="navright-searchicon"></div>
            </div>
          </form>
        </div>

        <div className="nationlanguage_wrap">
          <img
            className="flagicon"
            src="https://ik.imagekit.io/amazonmondayp/amazon-image/amazon%20carousel%201/usaflagiconTiny.png?updatedAt=1694475933756"
          />
          <div className="navbar_nationallanguag_abrev">EN</div>
        </div>

        <div className="nav-right">
          <div className="navbar_signinaccounts">
            <Sign_In_Accounts />
          </div>
          <div className="navbar_returnsandorders">
            <ReturnsOrders />
          </div>
          <div className="navbar_cart">
            <Cart />{" "}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
NavUp;
