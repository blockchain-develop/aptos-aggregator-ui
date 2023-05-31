import { RouteInfo, TokenInfo } from "./types";
import * as React from 'react';
import Decimal from 'decimal.js';
import JSBI from 'jsbi';
import { formatNumber, ZERO } from "./utils";
import Fees from "./Fees";
import TransactionFee from "./TransactionFee";
import ExchangeRate from "./ExchangeRate";

export interface PriceInfoProps {
    routes: RouteInfo[];
    selectedSwapRoute: RouteInfo;
    fromTokenInfo: TokenInfo;
    toTokenInfo: TokenInfo; 
    showFullDetails: boolean;
  }
  
  class PriceInfo extends React.Component<PriceInfoProps, object> {
  
    otherAmountThresholdText(selectedSwapRoute: RouteInfo, toTokenInfo: TokenInfo): string {
      if (selectedSwapRoute?.otherAmountThreshold) {
        const amount = new Decimal(selectedSwapRoute.otherAmountThreshold.toString()).div(
          Math.pow(10, toTokenInfo.decimals),
        );
  
        const amountText = formatNumber.format(amount.toNumber());
        return `${amountText} ${toTokenInfo.symbol}`;
      }
      return '-';    
    }
  
    render() {
      let selectedSwapRoute = this.props.selectedSwapRoute
      let fromTokenInfo = this.props.fromTokenInfo
      let toTokenInfo = this.props.toTokenInfo
      let routes = this.props.routes
      const rateParams = {
        inAmount: selectedSwapRoute?.inAmount || routes?.[0]?.inAmount || ZERO, // If there's no selectedRoute, we will use first route value to temporarily calculate
        inputDecimal: fromTokenInfo.decimals,
        outAmount: selectedSwapRoute?.outAmount || routes?.[0]?.outAmount || ZERO, // If there's no selectedRoute, we will use first route value to temporarily calculate
        outputDecimal: toTokenInfo.decimals,
      };
  
      const priceImpact = formatNumber.format(
        new Decimal(selectedSwapRoute?.priceImpactPct || 0).mul(100).toDP(4).toNumber(),
      );
      const priceImpactText = Number(priceImpact) < 0.1 ? `< ${formatNumber.format(0.1)}%` : `~ ${priceImpact}%`;
  
      let showFullDetails = this.props.showFullDetails
      let priorityFeeInSOL = 1
  
      return (
        <div className={'mt-4 space-y-4 border border-white/5 rounded-xl p-3'}>
          <div className="flex items-center justify-between text-xs">
            <div className="text-white/30">{<span>Rate</span>}</div>
            {JSBI.greaterThan(rateParams.inAmount, ZERO) && JSBI.greaterThan(rateParams.outAmount, ZERO) ? (
              <ExchangeRate
                rateParams={rateParams}
                fromTokenInfo={fromTokenInfo}
                toTokenInfo={toTokenInfo}
                reversible={true}
              />
            ) : (
              <span className="text-white/30">{'-'}</span>
            )}
          </div>
    
          <div className="flex items-center justify-between text-xs text-white/30">
            <div>
              <span>Price Impact</span>
            </div>
            <div>{priceImpactText}</div>
          </div>
    
          <div className="flex items-center justify-between text-xs">
            <div className="text-white/30">
              {selectedSwapRoute?.swapMode === 0 ? (
                <span>Minimum Received</span>
              ) : (
                <span>Maximum Consumed</span>
              )}
            </div>
            <div className="text-white/30">{this.otherAmountThresholdText(selectedSwapRoute, toTokenInfo)}</div>
          </div>
    
          {showFullDetails ? (
            <>
              <Fees marketInfos={[]} tokens={new Map<string, TokenInfo>()} />
              <TransactionFee feeInformation={1} />
  
              {priorityFeeInSOL > 0 ? (
                <div className="flex items-center justify-between text-xs">
                  <div className="text-white/30">
                    Priority Fee
                  </div>
                  <div className="text-white/30">{new Decimal(priorityFeeInSOL).toString()}</div>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
      );    
    }
  }

  export default PriceInfo;