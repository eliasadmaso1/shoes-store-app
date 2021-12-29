import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./styles";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useMyContext } from "../../context";

export default function CardComponent({
  product,
  remove,
  isCart,
  isWhite,
  addOne,
  removeOne,
}) {
  const classes = useStyles();

  return (
    <Card className={isWhite ? classes.root : classes.root1}>
      <CardMedia className={classes.media} image={product.images[0]} />
      <CardContent>
        <div className={classes.CardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h7">{product.price + "$"}</Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        {isCart && (
          <>
            <IconButton>
              <DeleteIcon onClick={remove} />
            </IconButton>

            <IconButton>
              <AddIcon onClick={addOne} />
            </IconButton>

            <IconButton>
              <RemoveIcon onClick={removeOne} />
            </IconButton>

            <CardContent>
              <Typography variant="h6">
                Quantity - {product.quantity}
              </Typography>
            </CardContent>
          </>
        )}
      </CardActions>
    </Card>
  );
}
