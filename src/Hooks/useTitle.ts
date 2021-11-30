import { AppContext } from 'contexts/app'
import { useContext, useEffect } from 'react'

export default function useTitle(title: string) {
  const { setTitle } = useContext(AppContext)

  useEffect(() => {
    if (title === '') {
      setTitle(process.env.NEXT_PUBLIC_SITE_TITLE || '')
      document.title = process.env.NEXT_PUBLIC_SITE_TITLE || ''
    } else {
      setTitle(`${title}`)
      document.title = `${title} | ${process.env.NEXT_PUBLIC_SITE_TITLE}`
    }
  }, [setTitle, title])

  return
}
