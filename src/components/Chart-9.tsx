import React from 'react';
import gold from '../images/gold.png';
import silver from '../images/silver.png'
import copper from '../images/copper.png'

export const Chart9=()=>{
  const data =[
    {id:1,name:'北京老铺黄金文化发展有限公司*Z',value:'1,123万'},
    {id:2,name:'欧莱雅(中国)有限公司*兰蔻J',value:'558万'},
    {id:3,name:'张家港保税区大德新福珠宝行有限公司*Z',value:'535万'},
    {id:4,name:'湖南滔博商贸有限公司*Z',value:'473万'},
    {id:5,name:'长沙勇玲贸易有限公司*Z',value:'432万'},
    {id:6,name:'雅诗兰黛(上海)商贸有限公司*J',value:'428万'},
    {id:7,name:'北京兴东鄂尔多斯商贸有限责任公司*Z',value:'426万'},
    {id:8,name:'北京庄子工贸有限责任公司*Z',value:'309万'},
    {id:9,name:'北京老铺黄金文化发展有限公司*Z ',value:'1,123万'},
    {id:10,name:'北京老铺黄金文化发展有限公司*Z ',value:'1,123万'},


  ]

  let list = data.map((item,index)=>{
    if(item.id === 1){
      return (<div key={index} className="list" >
        <div style={{backgroundImage: `URL(${gold})`}} className="gold"></div>
        <div>{item.name}</div>
        <div>{item.value}</div>
      </div>)
    }else if(item.id === 2) {
      return (<div key={index} className="list" >
        <div style={{backgroundImage: `URL(${silver})`}} className="gold"></div>
        <div>{item.name}</div>
        <div>{item.value}</div>
      </div>)
    }else if(item.id === 3){
      return (<div key={index} className="list" >
        <div style={{backgroundImage: `URL(${copper})`}} className="gold"></div>
        <div>{item.name}</div>
        <div>{item.value}</div>
      </div>)
    }else{
      return (
        <div key={index} className="list">
          <div className="id">{item.id}</div>
          <div>{item.name}</div>
          <div>{item.value}</div>
        </div>
      )
    }

  })
  return(
    <div className="suppliers bordered">
      <div className="title">当月集团Top 10供应商</div>
      <div className="wrapper">
        <div className="supplierName">
          <div></div>
          <div>供应商名称</div>
          <div>实销金额</div>
        </div>
        <div className="supplier">
          {list}
        </div>
      </div>

    </div>
  )
}