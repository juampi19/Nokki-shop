
import { Inter } from 'next/font/google'
import { TiendaLayout } from '../components/layout';
import { Typography } from '@mui/material';
import { initialData } from '../database/products';
import { ProductoLista } from '@/components/productos';


const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <TiendaLayout titulo={'Nokki-Shop - Home'} descripcionPagina={'Encuentra los mejores productos y los mejores precios en nuestra tienda 100% original '}>

      <Typography variant='h1' component='h1'>Tienda</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>Todos Nuestros Productos</Typography>

      {/* <Grid container spacing={4}>
        { initialData.products.map( producto => (
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
        ) ) }
      </Grid> */}

      <ProductoLista 
        productos={ initialData.products as any } 
      />

    </TiendaLayout>
  )
}
