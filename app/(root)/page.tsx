"use client";
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'
import RightSidebar from '@/components/RightSidebar';

const Home = () => {
  const loggedIn = {firstName: 'Jack', lastName: 'Ruttan', email: 'jackjr.ruttan@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts ={[]}
            totalBanks={3}
            totalCurrentBalance={234.35}
          />
        </header>
        <div>RECENT TRANSACTION</div>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[]} />
    </section>
  )
}

export default Home