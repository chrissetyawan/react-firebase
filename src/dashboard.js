import React, {
    useState,
    useEffect,
    useCallback
} from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useVersion, useDataProvider } from 'react-admin';

export default () => {
    const dataProvider = useDataProvider();
    const version = useVersion();
    const [productLength, setProductLength] = useState(0)
    const [categoryLength, setCategoryLength] = useState(0)

    const fetchCategories = useCallback(async () => {
        dataProvider
            .getList('categories', { pagination: { page: 1, perPage: 100 } })
            .then(response => {
                // console.log('categories', response.data);
                if (response.data && response.data.length) setCategoryLength(response.data.length)
            });
    }, [dataProvider]);

    const fetchProducts = useCallback(async () => {
        dataProvider
            .getList('products', { pagination: { page: 1, perPage: 100 } })
            .then(response => {
                // console.log('products', response.data); 
                if (response.data && response.data.length) setProductLength(response.data.length)
            });
    }, [dataProvider]);

    useEffect(() => {
        fetchCategories();
        fetchProducts()
    }, [version]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Card>
            <CardHeader title="Welcome to the Dashboard" />
            <CardContent>{categoryLength}</CardContent>
            <CardContent>{productLength}</CardContent>
        </Card>
    );
}
