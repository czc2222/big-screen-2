import React from 'react';
export const Ratio =(props)=>{

  return(
    <div className="ratioWrapper bordered">
      <div className="today">{props.todaySales}</div>
      <div className="number">{props.todayMoney}万</div>
      <div className="ratio">
        <div>{props.weekRatioText}</div>
        <div>{props.weekRatio}%</div>
        <i className="iconfont icon-triangle"></i>
      </div>
    </div>
  )
}