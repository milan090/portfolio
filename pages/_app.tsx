import '../styles/globals.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'
import { Loading } from '../components/Loading'
import { Sidebar } from '../components/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { SEO } from '../utils/seo'
import { DefaultSeo } from 'next-seo'
import { Social } from '../components/Social'
import { Toaster } from 'react-hot-toast'

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
  }, [])

  return (
    <div className="dark">
      <DefaultSeo
        title={pageProps?.seo?.title || SEO.DEFAULT_TITLE}
        titleTemplate={SEO.DEFAULT_TITLE_TEMPLATE}
        description={SEO.DEFAULT_DESCRIPTION}
        // canonical={url}
        openGraph={{
          type: 'website',
          locale: 'en_US',
          // url,
          site_name: SEO.SITE_NAME,
          title: SEO.SITE_NAME,
          description: SEO.DEFAULT_DESCRIPTION,
          images: [
            {
              url: SEO.DEFAULT_OG_IMAGE,
              alt: SEO.SITE_NAME,
            },
          ],
        }}
        twitter={{
          handle: SEO.TWITTER_HANDLE,
          site: SEO.TWITTER_HANDLE,
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'shortcut icon',
            href: SEO.FAVICON_LINK,
          },
        ]}
      />
      <Toaster position='bottom-right' toastOptions={{
        className: "bg-slate-700 text-slate-200",
        style: {
          background: "#334155",
          color: "white"
        }
      }} />
      <div className="text-slate-200">
        <Sidebar />
        <Social />

        <div className="ml-52 flex flex-col">
          {loading ? (
            <Loading />
          ) : (
            // ts-ignor
            <Component {...pageProps} />
          )}
        </div>
      </div>
    </div>
  )
}

export default MyApp
