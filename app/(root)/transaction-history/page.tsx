import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const Transactions = async ({searchParams: { id, page}}: SearchParamProps) => {

  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
  userId: loggedIn.$id 
  })
  
  if(!accounts) return;
    
  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
  
  const account = await getAccount({ appwriteItemId })

  return (
    <div className= "transactions">
      <div className= "transactions-header">
        <HeaderBox
          title = "Transactions History"
          subtext="See your transaction history here."
          />
      </div>

      <div className = "space-y">
        <div className = "transactions-account">
          <div className = "flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white"> {account?.data.name} </h2>
            <p className="text-14 text-blue-25"> {account?.data.officialName} </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ◍◍◍◍ ◍◍◍◍ ◍◍◍◍ <span className="text-16"> ${account?.data.mask}</span>
            </p>
            <div className= 'transactions-account-balance'>
              <p className="text-14"> Current Balance </p>
              <p className="text-24 text-center font-bold"> {formatAmount(account?.data.currentBalance)} </p>
          </div>
        </div>
        <section className = "flex w-full flex-col gap-6">
          <TransactionsTable transactions={account?.transactions} />
        </section>
      </div>
    </div>
  </div>
  )
}

export default Transactions

