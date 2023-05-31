import * as React from 'react';

export interface TooltipProps {
    content: string | React.ReactNode;
    children: React.ReactNode;
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

  export default Tooltip;