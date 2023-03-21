import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material';
import NextLink from 'next/link';

export const Navbar = () => {
  return (
    <AppBar>
        <Toolbar>
            <NextLink legacyBehavior href="/" passHref>
                <Link display='flex' alignItems='center'>
                  <Typography variant='h6'>Nokki |</Typography>
                  <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
            </NextLink>

            <Box flex={1}/>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <NextLink href='/categoria/hombres' passHref legacyBehavior>
                <Link>
                  <Button>Hombres</Button>
                </Link>
              </NextLink>

              <NextLink href='/categoria/mujeres' passHref legacyBehavior>
                <Link>
                  <Button>Mujeres</Button>
                </Link>
              </NextLink>

              <NextLink href='/categoria/niños' passHref legacyBehavior>
                <Link>
                  <Button>niños</Button>
                </Link>
              </NextLink>
            </Box>
            
            

            <Box flex={1}/>

            <IconButton>
              <SearchOutlined />
            </IconButton>

            <NextLink href="/carrito" passHref legacyBehavior>
              <Link>
                <IconButton>
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Link>
            </NextLink>

            <Button>
              Menu
            </Button>

        </Toolbar>
    </AppBar>
  )
}
