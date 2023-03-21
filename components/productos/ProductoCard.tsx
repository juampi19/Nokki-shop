import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"
import { InterfaceProductos } from '../../interfaces/productos';
import { FC } from "react";

interface Props {
    producto: InterfaceProductos;
}


export const ProductoCard: FC<Props> = ({ producto }) => {
  return (
    <Grid item key={producto.slug} xs={6} sm={4}>
        <Card>
            <CardActionArea>
            <CardMedia 
                component='img'
                image={ `productos/${ producto.images[0] }` }
                alt={ producto.title }
            />
            </CardActionArea>
        </Card>
    </Grid>
  )
}
