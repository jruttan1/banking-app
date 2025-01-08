import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalance';
import React from 'react'
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const Home = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) {
    redirect('/sign-in');
  }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
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