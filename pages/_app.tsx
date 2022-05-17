import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Loading } from '../components/Loading'
import { Sidebar } from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) =>
      url !== router.asPath && setTimeout(() => setLoading(false), 2500)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <div className="dark">
      <div className="dark:text-slate-50">
        <Sidebar />
        <div className="ml-52">
          {loading ? <Loading /> : <Component {...pageProps} />}
        </div>
      </div>
    </div>
  )
}

export default MyApp
