import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Nav from './Nav'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  hideNav?: boolean
  hideFooter?: boolean
}

const LayoutWrapper = ({ children, hideNav, hideFooter }: Props) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        {!hideNav && <Nav />}
        <main className="mb-auto">{children}</main>
        {!hideFooter && <Footer />}
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
