import JSBI from 'jsbi';

export interface TokenInfo {
    readonly name: string;
    readonly symbol: string;
    readonly logoURI: string;
    readonly decimals: number;
  }


  export interface MarketInfo {
    feeToken: string;
    feeAmount: number;
    feePct: number;
    label: string;
  }

  export interface RouteInfo {
    id: string;
    inAmount: JSBI;
    outAmount: JSBI;
    amount: JSBI;
    priceImpactPct: number;
    swapMode: number;
    otherAmountThreshold: JSBI;
  }

  export interface IRateParams {
    inAmount: JSBI;
    inputDecimal: number;
    outAmount: JSBI;
    outputDecimal: number;
  }