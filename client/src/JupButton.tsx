import * as React from 'react';

export interface JupButtonProps {
    children: React.ReactNode;
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

  export default JupButton;

