import React, { Suspense, lazy } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Hero = lazy(() => import('../components/Hero'));
const ProductRange = lazy(() => import('../components/products/ProductRange'));
const Products = lazy(() => import('../components/products/Products'));
const Inspiration = lazy(() => import('../components/Inspiration'));
const IdeaShare = lazy(() => import('../components/IdeaShare'));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Hero />
      <ProductRange />
      <Products />
      <Inspiration />
      <IdeaShare />
    </Suspense>
  );
};

export default Home;
