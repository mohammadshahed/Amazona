import React, { useEffect } from 'react';
import Product from '../../components/Product/Product';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';

import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);

    return (
      <div>
          {loading ? (
              <LoadingBox></LoadingBox>
            ) : error ? (
              <MessageBox variant="danger">{error}</MessageBox>
            )
            : (
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            )}
      </div>
    );
};

export default HomeScreen;