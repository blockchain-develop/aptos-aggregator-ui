import { MarketInfo, TokenInfo } from "./types";
import * as React from 'react';
import { formatNumber } from "./utils";
import Decimal from 'decimal.js';

export interface FeesProps {
    marketInfos: MarketInfo[];
    tokens: Map<string, TokenInfo>;
}

class Fees extends React.Component<FeesProps, object> {
    render() {
        let marketInfos = this.props.marketInfos
        let tokens = this.props.tokens

        return (
            <>
                {marketInfos.map((item, idx) => {
                    const tokenMint = tokens.get(item.feeToken);
                    const decimals = tokenMint?.decimals ?? 6;

                    const feeAmount = formatNumber.format(
                        new Decimal(item.feeAmount.toString()).div(Math.pow(10, decimals)).toNumber(),
                    );

                    return (
                        <div key={idx} className="flex items-center space-x-4 justify-between text-xs">
                            <div className="text-white/30">
                                <span>
                                    <span>
                                        Fees paid to <span translate="no">{item.label}</span> LP
                                    </span>
                                </span>
                            </div>
                            <div className="text-white/30 text-right">
                                {feeAmount} {tokenMint?.symbol} ({formatNumber.format(new Decimal(item.feePct).mul(100).toNumber())}
                                %)
                            </div>
                        </div>
                    );
                })}
            </>
        );
    }
}

export default Fees;
