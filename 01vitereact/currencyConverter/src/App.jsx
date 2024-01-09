import { useState } from 'react'
import { Inputbox } from './components'
import UseCurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = UseCurrencyInfo(from)

  const options = currencyInfo ? Object.keys(currencyInfo) : [];
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <div 
   className=' w-full h-screen  flex flex-wrap justify-center items-center bg-cover bg-no-repeat backdrop:blur-md'
   style={{
    backgroundImage: `url('https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600')`
   }}>
    <div className='w-full'>
      <div className=' w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <div className='w-full mb-1 '>
            <Inputbox label= "from"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)} 
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className=' relative w-full h-0.5'>
            <button type='button' className=' absolute left-1/2 -bottom-6 -translate-x-1/2 border-2
             border-white rounded-md bg-blue-300 text-white px-4 py-1' 
             onClick={swap}
             >Swap</button>
          </div>
          <div className='w-full mt-5 mb-3'>

            <Inputbox label= "To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)} 
            selectCurrency={from}
            amountDisable
            />
          </div>
          <button type='submit' className=' w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
   </div>
  );
}

export default App;
