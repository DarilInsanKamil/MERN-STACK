import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginPage, RegisterPage, MainApp, CreateBlog, Home, DetailBlog } from '../../pages'


export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainApp />}>
                    <Route path="/" element={<Home />} />
                    <Route path="create-blog" element={<CreateBlog />} />
                    <Route path="detail-blog" element={<DetailBlog />} />
                </Route>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Routes>
        </Router>
    )
}
