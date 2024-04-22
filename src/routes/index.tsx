import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Onboarding = lazy(() => import('@/pages/Onboarding'))

const Routes = () => {
  const publicRoutes = [{ path: '/', element: <Onboarding /> }]
  const authRoutes = [
    {
      path: '/login',
    },
  ]

  const router = createBrowserRouter([...publicRoutes, ...authRoutes])

  return (
    <Suspense fallback={<LazyLoad />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default Routes
