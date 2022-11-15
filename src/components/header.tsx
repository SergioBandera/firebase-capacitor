import cap from "../../src/assets/cap.png";

export const Header = () => {
  return (
    <div className="header-content">
      <img
        className="imagen"
        src={cap}
        alt="logo empresa"
        height={40}
        width={50}
      />
    </div>
  );
};
