import { FC } from "react"
import { Grid } from '@mui/material';
import { InterfaceProductos } from "@/interfaces";
import { ProductoCard } from './ProductoCard';

interface Props {
    productos: InterfaceProductos[];
}



export const ProductoLista: FC<Props> = ( { productos } ) => {
  return (
    <Grid container spacing={4}>

    {
        productos.map( producto => (
            <ProductoCard 
                producto={producto}
                key={ producto.slug }
            />
        ) )
    }

    </Grid>
  )
}
