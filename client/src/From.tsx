import * as React from 'react';
import { RouteInfo } from './types';
import TokenIcon from './TokenIcon';
import Decimal from 'decimal.js';
import { NumericFormat } from 'react-number-format';
import JupButton from './JupButton';
import PriceInfo from './PriceInfo';

const SexyChameleonText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const baseClass =
      'text-transparent bg-clip-text bg-gradient-to-r from-[rgba(252,192,10,1)] to-[rgba(78,186,233,1)] dark:bg-200-auto dark:bg-jupiter-gradient-alternative animate-hue dark:animate-shine';
    const classes = [baseClass, className].join(' ');
    return <span className={classes}>{children}</span>;
  };
  
  const ChevronDownIcon = ({ className = '' }) => {
    return (
      <svg
        className={className}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
          fill="currentColor"
        />
      </svg>
    );
  };
  
  const IconSwitchPairDark = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.04393 5.74021L12 3.3701L9.04393 1V2.68839H1.0228V4.05189H9.04393V5.74021ZM2.95607 5.34607L0 7.71617L2.95607 10.0863V8.39789H10.9772V7.03439H2.95607V5.34607Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  );
  
  const SwitchPairButton = ({
    className,
    onClick,
    disabled,
  }: {
    className?: string;
    onClick(): void;
    disabled?: boolean;
  }) => {
    return (
      <div className="flex justify-center">
        <div
          onClick={onClick}
          className={`border border-black/50 fill-current text-black bg-black/10 dark:text-white-35 dark:hover:text-white/50 dark:border dark:border-white-35 dark:hover:border-white/50 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          } ${className}`}
        >
          <div className="block -rotate-45">
            <IconSwitchPairDark />
          </div>
        </div>
      </div>
    );
  };
  
  export const RoutesSVG: React.FC<React.SVGAttributes<SVGElement>> = ({ width = '20', height = '20' }) => {
    return (
      <svg width={width} height={height} viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.11894 4.99859H4.79173C5.96242 4.99859 6.92699 4.04958 6.94255 2.89521C6.94255 1.72452 5.97798 0.791834 4.79173 0.791834L2.75212 0.791092C2.54675 0.332152 2.08781 0 1.5503 0C0.822978 0 0.237252 0.601291 0.237252 1.31305C0.237252 2.0248 0.838542 2.62609 1.5503 2.62609C2.10414 2.62609 2.56232 2.29394 2.75212 1.835H4.79248C5.40934 1.835 5.91573 2.34139 5.91573 2.91079C5.91573 3.4802 5.40934 3.98659 4.79248 3.98659H2.15083C0.980134 3.98659 0.0155637 4.93559 0 6.08997C0 7.27622 0.964571 8.19334 2.15083 8.19334H4.34911C4.55447 8.65228 5.01341 9 5.55093 9C6.27825 9 6.86398 8.39871 6.86398 7.68695C6.86398 6.95964 6.26269 6.37391 5.55093 6.37391C4.99709 6.37391 4.53891 6.70606 4.34911 7.165L2.13527 7.16574C1.51841 7.16574 1.01202 6.65935 1.01202 6.08995C1.01202 5.50498 1.50209 5.01415 2.11894 4.99859Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
    );
  };
  
  function precisionTick(value: number): [number, string, string] {
    const firstSD = Decimal.abs(Decimal.ceil(new Decimal(-1).mul(Decimal.log10(value)))).toNumber();
    const [prefix, suffix] = [
      new Decimal(value).toFixed().slice(0, firstSD + 2), // +2 to account for 0.
      new Decimal(value).toFixed().slice(firstSD + 1), // +1 to account for 0. - and slice index
    ];
  
    return [firstSD, prefix, suffix];
  }
  
  function generateSubscriptNumbers(x: number): string {
    const subscriptNumbers: string[] = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉'];
    const xString: string = x.toString();
    let result: string = '';
  
    for (let i = 0; i < xString.length; i++) {
      const digit: number = parseInt(xString.charAt(i), 10);
      const subscriptNumber: string = subscriptNumbers[digit];
      result += subscriptNumber;
    }
  
    return result;
  }
  
  
  const ApproxSVG = ({ width = 16, height = 16 }: { width?: string | number; height?: string | number }) => {
    return (
      <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8573 8.18429L13.6323 5.95933L10.8573 3.73438V5.31937H3.32735V6.59937H10.8573V8.18429ZM5.14223 7.81429L2.36719 10.0393L5.14223 12.2642V10.6792H12.6722V9.39922H5.14223V7.81429Z"
          fill="#777777"
        />
      </svg>
    );
  };

class From extends React.Component {
    onClickSelectFromMint() {
  
    }
  
    onChangeFromValue(value: string) {
  
    }
  
    onClickSwitchPair() {
  
    }
  
    onClickSelectToMint() {
  
    }
  
    onChangeToValue(value: string) {
  
    }
  
    setShowRouteSelector(x: boolean) {
  
    }
  
    onConnectWallet() {
  
    }
  
    onSubmit() {
  
    }
  
    render() {
      let fromTokenInfo = {
        name: "usdc",
        symbol:"USDC",
        decimals: 6,
        logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp/logo.png",
      }
  
      let toTokenInfo = {
        name: "usdc",
        symbol:"USDC",
        decimals: 6,
        logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CpMah17kQEL2wqyMKt3mZBdTnZbkbfx4nqmQMFDP5vwp/logo.png",
      }
  
      let routes : RouteInfo[];
      routes = [];
  
      let marketRoutes = ""
  
      let walletPublicKey = ""
  
      let selectedSwapRoute = routes[0]
  
      return (
        <div className="h-full flex flex-col items-center justify-center pb-4">
          <div className="w-full mt-2 rounded-xl flex flex-col px-2">
            <div className="flex-col">
              <div className={"border-b border-transparent bg-[#212128] rounded-xl transition-all"}>
                <div className={"px-x border-transparent rounded-xl "}>
                  <div>
                    <div className={"py-5 px-4 flex flex-col dark:text-white"}>
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          className="py-2 px-3 rounded-2xl flex items-center bg-[#36373E] hover:bg-white/20 text-white"
                          disabled={false}
                          onClick={this.onClickSelectFromMint}
                        >
                          <div className="h-5 w-5">
                            <TokenIcon tokenInfo={fromTokenInfo} width={20} height={20} />
                          </div>
                          <div className="ml-4 mr-2 font-semibold" translate="no">
                            {fromTokenInfo?.symbol}
                          </div>
                          <span className="text-white/25 fill-current">
                            <ChevronDownIcon />
                          </span>
                        </button>
  
                        <div className="text-right">
                          <NumericFormat
                            disabled={false}
                            value={100}
                            decimalScale={fromTokenInfo?.decimals}
                            thousandSeparator={true}
                            allowNegative={false}
                            valueIsNumericString
                            onValueChange={({ value }) => this.onChangeFromValue(value)}
                            placeholder={'0.00'}
                            className={"h-full w-full bg-transparent text-white text-right font-semibold dark:placeholder:text-white/25 text-lg"}
                            decimalSeparator={"."}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className={"my-2"}>
                <SwitchPairButton onClick={this.onClickSwitchPair} className={"transition-all"} />
              </div>
  
              <div className="border-b border-transparent bg-[#212128] rounded-xl">
                <div className="px-x border-transparent rounded-xl">
                  <div>
                    <div className="py-5 px-4 flex flex-col dark:text-white">
                      <div className="flex justify-between items-center">
                        <button
                          type="button"
                          className="py-2 px-3 rounded-2xl flex items-center bg-[#36373E] hover:bg-white/20 disabled:hover:bg-[#36373E] text-white"
                          disabled={false}
                          onClick={this.onClickSelectToMint}
                        >
                          <div className="h-5 w-5">
                            <TokenIcon tokenInfo={toTokenInfo} width={20} height={20} />
                          </div>
                          <div className="ml-4 mr-2 font-semibold" translate="no">
                            {toTokenInfo?.symbol}
                          </div>
  
                          <span className="text-white/25 fill-current">
                            <ChevronDownIcon />
                          </span>
  
                        </button>
  
                        <div className="text-right">
                          <NumericFormat
                            disabled={true}
                            value={""}
                            decimalScale={toTokenInfo?.decimals}
                            thousandSeparator={"."}
                            allowNegative={false}
                            valueIsNumericString
                            onValueChange={({ value }) => this.onChangeToValue(value)}
                            placeholder={""}
                            className={"h-full w-full bg-transparent text-white text-right font-semibold dark:placeholder:text-white/25 placeholder:text-sm placeholder:font-normal text-lg"}
                            decimalSeparator={"."}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {routes ? (
                <div className="flex items-center mt-2 text-xs space-x-1">
                  <div
                    className="bg-black/20 rounded-xl px-2 py-1 cursor-pointer text-white/50 flex items-center space-x-1"
                    onClick={() => this.setShowRouteSelector(true)}
                  >
                    <span>{routes?.length}</span>
                    <RoutesSVG width={7} height={9} />
                  </div>
                  <span className="text-white/30">using</span>
                  <span className="text-white/50 overflow-hidden whitespace-nowrap text-ellipsis max-w-[70%]">{marketRoutes}</span>
                </div>
              ) : null}
            </div>
          </div>
  
          <div className="w-full px-2">
            {!walletPublicKey ? (
              <JupButton onClick={this.onConnectWallet}>
                Connect Wallet
              </JupButton>
            ) : (
              <JupButton onClick={this.onSubmit}>
                <SexyChameleonText>Swap</SexyChameleonText>
              </JupButton>
            )}
  
            {routes && selectedSwapRoute && fromTokenInfo && toTokenInfo ? (
              <PriceInfo
                routes={routes}
                selectedSwapRoute={selectedSwapRoute}
                fromTokenInfo={fromTokenInfo}
                toTokenInfo={toTokenInfo}
                showFullDetails={true}
              />
            ) : null}
          </div>
        </div>
      );
    }
  }

  export default From;