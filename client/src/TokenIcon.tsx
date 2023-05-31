import * as React from 'react';
import { TokenInfo } from './types';

export interface TokenIconProps {
    width: number;
    height: number;
    tokenInfo: TokenInfo;
  }
  
  class TokenIcon extends React.Component<TokenIconProps, object> {
    render() {
      const {width, height, tokenInfo} = this.props;
      return (
        <div className="text-xs flex items-center justify-center rounded-full overflow-hidden" style={{ width, height}}>
          { tokenInfo? (
            <img src={tokenInfo?.logoURI} alt={tokenInfo?.symbol} width={width} height={height} />
          ) : (
            <div className="items-center justify-center rounded-full overflow-hidden bg-black/20" style={{ width, height}} />
          )}
        </div>
      );
    }
  }

  export default TokenIcon;