import axios from "axios"
import React, { useEffect, useState } from "react"
import Spinner from "../components/spinner/spinner"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators, State } from "../state"
const CurrencyConverter = () => {
  const dispatch = useDispatch()
  const { convertAction, getRatesAction } = bindActionCreators(
    actionCreators,
    dispatch
  )
  const rateList = useSelector((state: State) => state.rateList).rateList
  const loading = useSelector((state: State) => state.rateList).loading
  const result = useSelector((state: State) => state.convertedResult).result
  const [to, setTo] = useState("USD")
  const [from, setFrom] = useState("JPY")
  const [amount, setAmount] = useState()

  useEffect(() => {
    if (rateList.length === 0) {
      getRatesAction()
    }
  }, [])

  const handleInput = (event: any) => {
    setAmount(event.target.value)
  }

  return (
    <div className="container-fluid">
      <div className="dropdowns">
        <div>
          <label className="labelclass"> From</label>
          <select
            value={from}
            className="selectclass"
            onChange={(e) => {
              const value = e.target.value
              setFrom(value)
            }}
          >
            {rateList.map((d) => (
              <option value={d.symbol} key={d.symbol}>
                {d.symbol}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="labelclass"> To </label>
          <select
            value={to}
            className="selectclass"
            onChange={(e) => {
              const value = e.target.value
              setTo(value)
            }}
          >
            {rateList.map((d) => (
              <option value={d.symbol} key={d.symbol}>
                {d.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>
      <input
        className="input"
        placeholder="Enter Amount"
        value={amount}
        type="number"
        onChange={handleInput}
      />
      <div className="">
        <button
          className="convertbutton"
          // disabled={amount === 0 || amount < 0}
          onClick={() => {
            if (amount) {
              convertAction(amount, to, from)
            }
          }}
        >
          Convert
        </button>
      </div>

      <div className="mt-5 mb-2 text-center">
        {loading ? (
          <Spinner />
        ) : (
          result && <p className="result">Result = {result}</p>
        )}
      </div>
    </div>
  )
}
export default CurrencyConverter
