import React from 'react'
import HomeFirstSection from '../components/HomeFirstSection'
import HomeFeatures from '../components/HomeFeatures'
import WhyUs from '../components/WhyUs'
import HomeProjects from '../components/HomeProjects'
import ProjectForm from '../components/ProjectForm'


function Home() {
  return (
    <div className='mt-3'>
      <HomeFirstSection />
      <HomeFeatures />
      <WhyUs />
     <HomeProjects />
     <ProjectForm />
    </div>
  )
}

export default Home




// const companiesData = [
//     { id: 1, icon: <FaShopify size={28} color="#fff"/>, name: "Shopify" },
//     { id: 2, icon: <FaPaypal size={28} color="#fff"/>, name: "PayPal" },
//     { id: 3, icon: <FaSlack size={28} color="#fff"/>, name: "Slack" },
//     { id: 4, icon: <FaAmazonPay size={28} color="#fff"/>, name: "Amazon Pay" },
//     { id: 5, icon: <FaTrello size={28} color="#fff"/>, name: "Trello" },
//   ];
