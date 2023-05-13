import React from "react";

interface MenuMobileProps {
  openMenu: boolean;
  onClose: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ openMenu }) => {
  if (!openMenu) return null;

  return (
    // <div
    //   onClick={onClose}
    //   className="fixed inset-0"
    //   style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    // >
    //   <div
    //     onClick={(e) => {
    //       e.stopPropagation();
    //     }}
    //     className={`absolute top-24 right-0 bg-white ${
    //       openMenu ? "right-0" : "-right-10"
    //     } duration-300`}
    //   >
    //     <h1>ạkjskkjskj</h1>
    //   </div>
    // </div>
    <>
      {openMenu ? (
        <div
          className="fixed inset-0 duration-500 opacity-100 h-96"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        ></div>
      ) : (
        <div className="fixed inset-0 duration-500 opacity-0 h-60"></div>
      )}
    </>
  );
};

export default MenuMobile;
