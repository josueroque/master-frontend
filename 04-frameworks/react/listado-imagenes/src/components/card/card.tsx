import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import { CartContext } from "../../context/CartContext";

interface Props {
  title: string;
  make: string;
  model: string;
  year: string;
  price: number;
  imageUrl: string;
  id: number;
}

export const ItemCard: React.FC<Props> = ({
  id,
  title,
  make,
  model,
  year,
  price,
  imageUrl,
}) => {
  const [checked, setChecked] = React.useState(false);
  const { dispatch, cartState } = React.useContext(CartContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (event.target.checked !== checked) {
      dispatch({
        type: event.target.checked ? "ADD_ITEM" : "REMOVE_ITEM",
        payload: id,
      });
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="item-card">
      <div className="image-container">
        <img src={imageUrl} alt="Not Found" />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Details: ${make} ${model} ${year}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Year: ${year}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Price: ${price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <label>Buy</label>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
