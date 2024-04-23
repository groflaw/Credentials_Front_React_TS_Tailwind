import { lazy, Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LazyLoad from '@/components/UI/LazyLoad'

const Onboarding = lazy(() => import('@/pages/Onboarding'))
const Login = lazy(() => import('@/pages/Auth/Login'))
const Register = lazy(() => import('@/pages/Auth/Register'))
const ConfirmOTP = lazy(() => import('@/pages/Auth/ConfirmOTP'))
const ConnectTransactions = lazy(
  () => import('@/pages/Auth/ConnectTransactions'),
)
const LinkAccounts = lazy(() => import('@/pages/Auth/LinkAccounts'))

const Routes = () => {
  const publicRoutes = [{ path: '/', element: <Onboarding /> }]
  const authRoutes = [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/confirm-otp',
      element: <ConfirmOTP />,
    },
    {
      path: '/connect',
      element: <ConnectTransactions />,
    },
    {
      path: '/link-accounts',
      element: <LinkAccounts />,
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
