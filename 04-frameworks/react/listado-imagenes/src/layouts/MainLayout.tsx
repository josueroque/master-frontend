import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MainMenu from "../main-menu/MainMenu";
import Cart from "../components/cart/cart";

const MainLayout = (props: any) => {
  return (
    <div>
      <MainMenu />
      <div className="main-layout">
        {props.children}
        <Cart />
      </div>
    </div>
  );
};

export default MainLayout;
