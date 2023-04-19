import Amazon from "./imaeges/amazonlogo.png";
import "./index.scss";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline } from "@mdi/js";
import Search from "./Search";

const Header = () => {
  return (
    <div className="bg-black text-white d-flex pt-3">
      <div className="d-flex">
        <img src={Amazon} className="imgheader ms-2 mt-3" alt="amazon_logo" />
        <span className="d-flex pt-3 fw-bold">.in</span>
      </div>
      {/* <div className='d-flex align-items-end mb-2 ps-2'>
           
            </div> */}
      <div className="d-flex ms-5">
        <div className=" fw-normal ">
          <div className="mt-2 mb-0 ms-1">Hello</div>
          <div className="d-flex">
          <Icon
            className="delivery-location__pin  "
            path={mdiMapMarkerOutline}
            size={0.8}
          />
          <h6 className="text-nowrap ">Select Your Address</h6>
          </div>
        </div>
        <div className="">
          <Search />
        </div>
      </div>
    </div>
  );
};
export default Header;
