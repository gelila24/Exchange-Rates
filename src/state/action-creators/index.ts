import axios from "axios"
import { Dispatch } from "redux"
import { config, url } from "../constants"

export function convertAction(amount: number, from: string, to: string) {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    const res = await axios.get(
      `${url}/convert?to=${to}&from=${from}&amount=${amount}`,
      config
    )
    dispatch({
      type: "CONVERT",
      payload: (res.data.result),
    })
    dispatch({
      type: "SET_LOADING",
      payload: false,
    })
  }
}

export function getRatesAction() {
  return async (dispatch: Dispatch) => {
    const res = await axios.get(
      `${url}/symbols`,
      config
    )
    const temp: any = []
    for (const [symbol] of Object.entries(res.data.symbols)) {
      temp.push({ symbol })
    }
    dispatch({
      type: "GET_RATES",
      payload: temp,
    })
  }
}

export function getRatesByBaseAction(base: String) {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    })
    const result = await axios.get(
      `${url}/latest?base=${base}`,
      config
    )
    const temp: any = []
    for (const [symbol, rate] of Object.entries(result.data.rates)) {
      temp.push({ symbol, rate })
    }
    dispatch({
      type: "GET_BASE_RATES",
      payload: temp,
    })
    dispatch({
      type: "SET_LOADING",
      payload: false,
    })
  }
}
