import {
    AppBar,
    Box,
    Button,
    Icon,
    InputBase,
    Stack,
    Toolbar,
    Typography,
    styled,
} from '@mui/material';
import React from 'react';
import './../styles/menu-bar.scss';
import { imgLogo } from '../../common/images';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Colors } from '../../common/colors';

type INavBarItem = {
    title: string;
    url: string;
    icon?: string;
};

const Search = styled('div')(() => ({
    position: 'relative',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: '#eeeeee',
    },
    border: '1px solid gray',
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
}));

const SearchIconWrapper = styled('div')(() => ({
    height: '100%',
    aspectRatio: '1',
    position: 'absolute',
    right: '-1px',
    backgroundColor: Colors.pink,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 0, 1, 1),
        paddingRight: `calc(1em + ${theme.spacing(4)})`,
        width: '20ch',
        color: 'gray',
    },
}));

const MenuBar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const options: INavBarItem[] = [
        {
            title: t('navBar.home'),
            url: '/home',
        },
        {
            title: t('navBar.aboutUs'),
            url: '/about-us',
        },
        {
            title: t('navBar.product'),
            url: '/products',
        },
        {
            title: t('navBar.cart'),
            url: '/carts',
        },
        {
            title: t('navBar.order'),
            url: '/orders',
        },
    ];

    // TODO Handle onSeachChange

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="toolbar">
                    <Stack direction="row">
                        <Box className="logo_container">
                            <Box>
                                <img className="logo_img" src={imgLogo} />
                            </Box>
                            <Typography variant="h5" noWrap component="div" className="app_name">
                                {t('navBar.appName')}
                            </Typography>
                        </Box>
                        <Box className="button-container">
                            {options.map((option, index) => (
                                <Button
                                    className={
                                        window.location.pathname === option.url
                                            ? 'button-icon selected'
                                            : 'button-icon'
                                    }
                                    key={index}
                                    onClick={() => navigate(option.url)}
                                >
                                    {option.icon && <Icon>option.icon</Icon>}
                                    {option.title}
                                </Button>
                            ))}
                        </Box>
                    </Stack>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase inputProps={{ 'aria-label': 'search' }} />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default MenuBar;
