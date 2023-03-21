import { Box, Typography } from '@mui/material';
import { TiendaLayout } from '../components/layout/TiendaLayout';


const Custom404 = () => {
  return (
    <TiendaLayout titulo={'Pagina no Encontrada'} descripcionPagina={'Nada que mostrar Aqui'}>

        <Box display='flex' sx={{ flexDirection: { xs: 'column', sm: 'row' } }} justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            <Typography variant='h1' component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No encontramos ninguna página aquí</Typography>
        </Box>

    </TiendaLayout>
  )
}

export default Custom404;