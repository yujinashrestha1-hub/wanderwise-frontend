import React, { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/landingComponents/Hero'
import Features from '../components/landingComponents/Features'
import FamousTrips from '../components/landingComponents/FamousTrips'
import OurMission from '../components/landingComponents/OurMission'
import Testimonials from '../components/landingComponents/Testimonials'
import Footer from '../components/landingComponents/Footer'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token])


  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FamousTrips />
      <OurMission />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default Landing