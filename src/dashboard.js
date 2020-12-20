import React, {
    useState,
    useEffect,
    useCallback,
    createElement
} from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useVersion, useDataProvider } from 'react-admin';
import GradeIcon from '@material-ui/icons/Grade';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import cartouche from './cartouche.png';

const useStyles = makeStyles(theme => ({
    root: {
        background: `linear-gradient(to right, #8975fb 0%, #746be7 35%), linear-gradient(to bottom, #8975fb 0%, #6f4ceb 50%), #6f4ceb`,
        color: '#fff',
        padding: 20,
        marginTop: theme.spacing(3),
        marginBottom: '2em',
    },
    card: {
        minHeight: 52,
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        '& a': {
            textDecoration: 'none',
            color: 'inherit',
        },
    },
    main: {
        overflow: 'inherit',
        padding: 16,
        background: `url(${cartouche}) no-repeat`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .icon': {
            color: theme.palette.type === 'dark' ? 'inherit' : '#dc2440',
        },
    }
}));

const Spacer = () => <span style={{ width: '1em' }} />;

export default () => {
    const dataProvider = useDataProvider();
    const version = useVersion();
    const classes = useStyles();

    const [productLength, setProductLength] = useState(0)
    const [categoryLength, setCategoryLength] = useState(0)

    const fetchCategories = useCallback(async () => {
        dataProvider
            .getList('categories', { pagination: { page: 1, perPage: 100 } })
            .then(response => {
                if (response.data && response.data.length) setCategoryLength(response.data.length)
            });
    }, [dataProvider]);

    const fetchProducts = useCallback(async () => {
        dataProvider
            .getList('products', { pagination: { page: 1, perPage: 100 } })
            .then(response => {
                if (response.data && response.data.length) setProductLength(response.data.length)
            });
    }, [dataProvider]);

    useEffect(() => {
        fetchCategories();
        fetchProducts()
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps

    const Welcome = () => {
        return (
            <Card className={classes.root}>
                <Box display="flex">
                    <Box flex="1">
                        <Typography variant="h5" component="h2" gutterBottom>
                            Dashboard
                        </Typography>
                        <Box maxWidth="40em">
                            <Typography variant="body1" component="p" gutterBottom>
                                welcome to dashboard
                            </Typography>
                        </Box>
                    </Box>
    
                    <Box
                        display={{ xs: 'none', sm: 'none', md: 'block' }}
                        className={classes.media}
                        width="16em"
                        height="2em"
                        overflow="hidden"
                    />
                </Box>
            </Card>
        );
    };
    const CardWithIcon = props => {
        const { icon, title, subtitle, to, children } = props;
        const classes = useStyles(props);
        return (
            <Card className={classes.card}>
                <Link to={to}>
                    <div className={classes.main}>
                        <Box width="3em" className="icon">
                            {createElement(icon, { fontSize: 'large' })}
                        </Box>
                        <Box textAlign="right">
                            <Typography
                                className={classes.title}
                                color="textSecondary"
                            >
                                {title}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {subtitle || ' '}
                            </Typography>
                        </Box>
                    </div>
                </Link>
                {children && <Divider />}
                {children}
            </Card>
        );
    };

    return (
        <div>
            <Welcome/>
            <div style={{ display: 'flex' }}>
                <CardWithIcon
                    to="/categories"
                    icon={BookmarksIcon}
                    title='Category Count'
                    subtitle={categoryLength || 0}
                />
                
                <Spacer />

                <CardWithIcon
                    to="/products"
                    icon={GradeIcon}
                    title='Product Count'
                    subtitle={productLength || 0}
                />
            </div>
        </div>
    );
}
