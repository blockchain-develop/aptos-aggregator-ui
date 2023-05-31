import {Layout, Button, Col, Row, Spin, Input, List } from 'antd';
import * as React from 'react';
import { useState, useEffect, ReactNode } from 'react';
import { WalletSelector } from '@aptos-labs/wallet-adapter-ant-design';
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { Provider, Network } from 'aptos';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import Checkbox, { CheckboxChangeEvent } from 'antd/es/checkbox';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import JSBI from 'jsbi';
import Decimal from 'decimal.js';
import BN from 'bn.js';

var ZERO = /*#__PURE__*/JSBI.BigInt(0);


export function fromLamports(lamportsAmount?: JSBI | BN | number, decimals?: number, rate: number = 1.0): number {
  if (!lamportsAmount) {
    return 0;
  }

  const amount = BN.isBN(lamportsAmount) ? lamportsAmount : lamportsAmount;

  const base = 10;
  const precision = new Decimal(base).pow(decimals ?? 6);

  return new Decimal(amount.toString()).div(precision).mul(rate).toNumber();
}

export function toLamports(lamportsAmount: JSBI | BN | number, decimals: number): number {
  let amount = BN.isBN(lamportsAmount) ? lamportsAmount.toNumber() : Number(lamportsAmount);

  if (Number.isNaN(amount)) {
    amount = 0;
  }
  const precision = Math.pow(10, decimals);

  return Math.floor(amount * precision);
}

export interface TokenInfo {
  readonly name: string;
  readonly symbol: string;
  readonly logoURI: string;
  readonly decimals: number;
}

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

const SexyChameleonText = ({ children, className }: { children: ReactNode; className?: string }) => {
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

export interface JupButtonProps {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

class JupButton extends React.Component<JupButtonProps, object> {
  onClick() {

  }

  render() {
    return (
      <button
        className={'opacity-50 cursor-not-allowed'}
        type='button'
        disabled={false}
        onClick={this.onClick}
      >
      <div className={`p-5 text-md font-semibold h-full w-full leading-none`}>{"children"}</div>
      </button>
    );    
  }
}

export interface MarketInfo {
  feeToken: string;
  feeAmount: number;
  feePct: number;
  label: string;
}

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

export interface TooltipProps {
  content: string | React.ReactNode;
  children: ReactNode;
  onClick?: () => void;
}

class Tooltip extends React.Component<TooltipProps, object> {
  render(){
    let content = this.props.content;
    let onClick = this.props.onClick;
    let children = this.props.children;
    return (
      <div className="group cursor-pointer" onClick={onClick}>
        <div
          className={'invisible absolute rounded shadow-lg py-1 px-2 right-0 w-full -mt-8 flex justify-center items-center text-center'}
        >
          {content}
        </div>
        {children}
      </div>
    );    
  }
}


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

export interface PrecisionTickSizeProps {
  value: number;
  maxSuffix: number;
}

class PrecisionTickSize extends React.Component<PrecisionTickSizeProps, object> {
  render() {
    let value = this.props.value
    let maxSuffix = this.props.maxSuffix
    const [firstSD, _, suffix] = precisionTick(value);

    return (
      <span className='flex items-center h-4'>
        0.0
        <span className='mb-3 text-xl mx-0.5'>{generateSubscriptNumbers(firstSD - 1)}</span>
        {suffix.slice(0, maxSuffix)}
      </span>
    );    
  }
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

export interface ExchangeRateProps {
  fromTokenInfo: TokenInfo;
  rateParams: IRateParams;
  toTokenInfo: TokenInfo;
  reversible: boolean;
}

export interface IRateParams {
  inAmount: JSBI;
  inputDecimal: number;
  outAmount: JSBI;
  outputDecimal: number;
}

const userLocale =
  typeof window !== 'undefined'
    ? navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language
    : 'en-US';

export const numberFormatter = new Intl.NumberFormat(userLocale, {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 9,
});

export const formatNumber = {
  format: (val?: number, precision?: number) => {
    if (!val && val !== 0) {
      return '--';
    }

    if (precision !== undefined) {
      return val.toFixed(precision);
    } else {
      return numberFormatter.format(val);
    }
  },
};

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

export const calculateRate = (
  { inAmount, inputDecimal, outAmount, outputDecimal }: IRateParams,
  reverse: boolean,
): Decimal => {
  const input = fromLamports(inAmount, inputDecimal);
  const output = fromLamports(outAmount, outputDecimal);

  const rate = !reverse ? new Decimal(input).div(output) : new Decimal(output).div(input);

  if (Number.isNaN(rate.toNumber())) {
    return new Decimal(0);
  }

  return rate;
};

class ExchangeRate extends React.Component<ExchangeRateProps, object> {
  onReverse() {

  }

  render() {
    let reverse = this.props.reversible
    let fromTokenInfo = this.props.fromTokenInfo
    let toTokenInfo = this.props.toTokenInfo
    let rateParams = this.props.rateParams
    let reversible = this.props.reversible

    let rate = calculateRate(rateParams, true)

    return (
      <div
        className={'flex cursor-pointer text-white/30 text-xs align-center'}
        onClick={this.onReverse}
      >
        <span className={'max-w-full flex whitespace-nowrap'}>
          {reverse ? (
            <>
              1 {fromTokenInfo.symbol} ≈
              <div className='flex ml-0.5'>
                {rate.gt(0.000_01) ?
                  (
                    `${formatNumber.format(rate.toNumber())} ${toTokenInfo.symbol}`
                  )
                  : (
                    <>
                      <PrecisionTickSize value={rate.toNumber()} maxSuffix={6} /> {toTokenInfo.symbol}
                    </>
                  )}
              </div>
            </>
          ) : (
            <>
              1 {toTokenInfo.symbol} ≈
              <div className='flex ml-0.5'>
  
                {rate.gt(0.000_01) ?
                  (
                    `${formatNumber.format(rate.toNumber())} ${fromTokenInfo.symbol}`
                  )
                  : (
                    <>
                      <PrecisionTickSize value={rate.toNumber()} maxSuffix={6} /> {fromTokenInfo.symbol}
                    </>
                  )}
              </div>
            </>
          )}
        </span>
        {reversible ? (
          <div className={'ml-2'}>
            <ApproxSVG />
          </div>
        ) : null}
      </div>
    );    
  }
}

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

type Task = {
  address: string;
  completed: boolean;
  content: string;
  task_id: string;
};

export const provider = new Provider(Network.TESTNET)
export const moduleAddress = "0x2f88a12a17f01228f4ba72ec6214127abb930512dcb3d6205909ca510aca7b29";

function App() {
  const [accountHasList, setAccountHasList] = useState<boolean>(false);
  const [transactionInProgress, setTransactionInProgress] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const { account, signAndSubmitTransaction } = useWallet();

  const onWriteTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNewTask(value);
  };

  const fetchList = async() => {
    if (!account) return [];
    try {
      const ToolListResource = await provider.getAccountResource(account?.address, `${moduleAddress}::todolist::TodoList`);
      setAccountHasList(true);
      //
      const tableHandle = (ToolListResource as any).data.tasks.handle;
      const taskCounter = (ToolListResource as any).data.task_counter;
      let tasks = [];
      let counter = 1;
      while (counter <= taskCounter) {
        const tableItem = {
          key_type: "u64",
          value_type: `${moduleAddress}::todolist::Task`,
          key: `${counter}`,
        };
        const task = await provider.getTableItem(tableHandle, tableItem);
        tasks.push(task);
        counter++;
      }
      setTasks(tasks);
    } catch(e: any) {
      setAccountHasList(false);
    }
  }

  const addNewList = async() => {
    if (!account) return [];
    setTransactionInProgress(true);
    //
    const  payload = {
      type:"entry_function_payload",
      function:`${moduleAddress}::todolist::create_list`,
      type_arguments:[],
      arguments:[],
    };
    //
    try {
      const response = await signAndSubmitTransaction(payload);
      await provider.waitForTransaction(response.hash);
      //
      setAccountHasList(true);
    } catch(e: any) {
      setAccountHasList(false);
    } finally {
      setTransactionInProgress(false);
    }
  }

  const onTaskAdded = async() => {
    if (!account) return;
    setTransactionInProgress(true);
    //
    const payload = {
      type: "entry_function_payload",
      function:`${moduleAddress}::todolist::create_task`,
      type_arguments:[],
      arguments: [newTask],
    };
    //
    const latestId = tasks.length > 0 ? parseInt(tasks[tasks.length - 1].task_id) + 1 : 1;
    const newTaskToPush = {
      address: account.address,
      completed: false,
      content: newTask,
      task_id: latestId + "",
    };
    //
    try {
      const response = await signAndSubmitTransaction(payload);
      await provider.waitForTransaction(response.hash);
      //
      let newTasks = [...tasks];
      newTasks.push(newTaskToPush);
      setTasks(newTasks);
      //
      setNewTask("");
    } catch(e: any) {
      console.log("error", e);
    } finally {
      setTransactionInProgress(false);
    }
  };

  const onCheckboxChange = async(event: CheckboxChangeEvent, taskId: string) => {
    if (!account) return;
    if (!event.target.checked) return;
    setTransactionInProgress(true);
    //
    const payload = {
      type: "entry_function_payload",
      function:`${moduleAddress}::todolist::complate_task`,
      type_arguments: [],
      arguments: [taskId],
    };
    //
    try {
      const response = await signAndSubmitTransaction(payload);
      await provider.waitForTransaction(response.hash);
      //
      setTasks((prevState) => {
        const newState = prevState.map((obj) => {
          if (obj.task_id === taskId) {
            return {...obj, completed: true};
          }
          return obj;
        });
        return newState;
      });
    } catch(e: any) {
      console.log("error", e);
    } finally {
      setTransactionInProgress(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [account?.address]);

  return (
    <>
      <Layout>
        <Row align="middle">
          <Col span={10} offset={2}>
            <h1> Our todolist</h1>
          </Col>
          <Col span={12} style={{textAlign: "right", paddingRight: "200px"}}>
            <WalletSelector />
          </Col>
        </Row>
      </Layout>
      <Spin spinning = {transactionInProgress}>
        {!accountHasList ? (
          <Row gutter={[0, 32]} style={{marginTop: "2rem"}}>
            <Col span={8} offset={8}>
              <Button disabled = {!account} onClick={addNewList} block type="primary" style={{height:"40px", backgroundColor:"#3f67ff"}}>
                Add new list
              </Button>
            </Col>
          </Row>
        ):(
          <Row gutter={[0,32]} style={{marginTop:"2rem"}}>
            <Col span={8} offset = {8}>
              <Input.Group compact>
                <Input onChange={(event) => onWriteTask(event)} style={{width: "calc(100% - 60px)"}} placeholder = "Add a Task" size="large" value={newTask} />
                <Button onClick={onTaskAdded} type="primary" style={{height:"40px", backgroundColor:"#3f67ff"}}>
                  Add
                </Button>
              </Input.Group>
            </Col>
            <Col span= {8} offset = {8}>
              { tasks && (
                <List size = "small" bordered dataSource={tasks} renderItem={(task:Task) => (
                  <List.Item actions = {[
                    <div>
                      {task.completed? (
                        <Checkbox defaultChecked={true} disabled />
                      ):(
                        <Checkbox onChange={(event) => onCheckboxChange(event, task.task_id)} />
                      )}
                    </div>,
                  ]}
                  >
                    <List.Item.Meta title = {task.content} description = {
                      <a href = {`https://explorer.aptoslabs.com/account/${task.address}/`} target="_blank">
                        {`${task.address.slice(0,6)}...${task.address.slice(-5)}`}
                      </a>
                    } />
                  </List.Item>
                )}
                />
              )}
            </Col>
          </Row>
        )}
      </Spin>
      <Layout>
        <form>
          <From />
        </form>
      </Layout>
    </>
  );
}

export default App;
