import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Gap, Header } from '../../components'
import './mainapp.scss'
export const MainApp = () => {
    return (
        <div className='mainapp-wrapper'>
            <header className='header-main-wrapper'>
                <Header />
            </header>
            <main className='content-wrapper'>
                <Gap height={70}/>
                <Outlet />
            </main>
            <footer className='footer-wrapper'>
                <Footer />
            </footer>
        </div>
    )
}
