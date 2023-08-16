import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainMenu from "../main-menu/main-menu";

const MainLayout = (props: any) => {
  return (
    <div>
      <MainMenu />
      {props.children}
      <ShoppingCartIcon />
    </div>
  );
};

export default MainLayout;
