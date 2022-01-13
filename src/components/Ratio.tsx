import React from 'react';
export const Ratio =(props)=>{

  return(
    <div className="ratioWrapper bordered">
      <div className="today">{props.todaySales}</div>
      <div className="number">{props.todayMoney}</div>
      <div className="ratio">
        <div>{props.RatioText}</div>
        <div>{props.Ratio}%</div>
        <i className="iconfont icon-triangle"></i>
      </div>
    </div>
  )
}