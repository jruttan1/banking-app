import { Link } from 'lucide-react'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BankTabItem } from './BankTabItem'
import BankInfo from './BankInfo'
import TransactionTable from './TransactionTable'

const RecentTransactions = ({
    accounts,
    transactions = [],
    appwriteItemId,
    page = 1,
}: RecentTransactionsProps) => {
  return (
    <section className = "recent-transactions">
      <header className = "flex items-center justify-between">
        <h2 className= "recent-transactions-label">
            Recent Transactions
        </h2>
        <Link href={`/transactions-history/?id=${appwriteItemId}`} className="view-all-btn">
            View All
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
            {accounts.map((account: Account) => (
                <TabsTrigger value={account.appwriteItemId} key={account.id}>
                    <BankTabItem
                    key = {account.id}
                    account = {account}
                    appwriteItemId = {appwriteItemId}
                    />
                </TabsTrigger>
            ))}
        </TabsList>

        {accounts.map((account: Account) => (
            <TabsContent 
                value={account.appwriteItemId} 
                key={account.id}
                className = "space-y-4">


            <BankInfo
                account = {account}
                appwriteItemId = {appwriteItemId}
                type = "full">
            </BankInfo>

            <TransactionTable transactions = {transactions}/>
            
            </TabsContent>
        ))}
            
            
            

        
        </Tabs>


    </section>
  )
}

export default RecentTransactions
