import { AppProps } from 'next/app'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import theme from '../theme'
import Layout from '../components/layout'
import { useRouter } from 'next/router'
import { StaticRoutes } from '../enums/StaticRoutes'
import Auth from '@/components/reusable/auth'

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  return (
    <ThemeProvider theme={theme}>
      {asPath === StaticRoutes.LOGIN ? (
        <Component {...pageProps} />
      ) : (
        <Auth>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Auth>
      )}
    </ThemeProvider>
  )
}

export default MyApp
