import React, { Suspense, lazy } from 'react'
import Loader from '../../components/Loader/Loader'

const LazyForm = lazy(() => import('./Form'))

const LazyBeerForm = () => (
    <Suspense fallback={<Loader />}>
        <LazyForm />
    </Suspense>
)
export default LazyBeerForm
