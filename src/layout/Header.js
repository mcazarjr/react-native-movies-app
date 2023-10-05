import { Header as HeaderRNE } from "@rneui/themed";

const Header = (nam) => {
  return (
    <HeaderRNE
      backgroundColor="#2c3e50"
      centerComponent={{
        text: "Movies App",
        style: { color: "#fff", fontSize: 18 },
      }}
    ></HeaderRNE>
  );
};

export default Header;
