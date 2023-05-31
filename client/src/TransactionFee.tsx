import Decimal from 'decimal.js';
import * as React from 'react';
import { formatNumber, fromLamports } from './utils';
import Tooltip from './Tooltip';

export interface TransactionFeeProps {
    feeInformation: number;
  }
  
  class TransactionFee extends React.Component<TransactionFeeProps, object> {
    feeText(feeInformation: number): string {
      if (feeInformation) {
        return formatNumber.format(fromLamports(feeInformation, 9));
      }
      return '-';    
    }
    render() {
      let feeInformation = this.props.feeInformation
      return (
        <div className="flex items-center justify-between text-xs">
          <div className="flex w-[50%] text-white/30">
            <span>Transaction Fee</span>
            <Tooltip content={<span>This is for Solana transaction fee</span>}>
              <span className="ml-1 cursor-pointer">[?]</span>
            </Tooltip>
          </div>
          <div className="text-white/30">{this.feeText(feeInformation)} SOL</div>
        </div>
      );    
    }
  }

  export default TransactionFee;