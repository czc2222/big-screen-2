import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {Ratio} from '../components/Ratio';
import {setChange} from '../shared/setChange';

export const Chart1 = () => {
  const divRef = useRef(null);
  const myEcharts = useRef(null)
  const [money, setMoney] = useState(7);
  const [sales,setSales] =useState(6269)
  const [profit,setProfit]=useState(470)
  const [weekSalesRatio,setSalesWeekRatio] =useState(6268789250.00)
  const [weekProfitRatio,setWeekProfitRatio] =useState(94044463)


  setChange(money,setMoney,2500000)
  setChange(sales,setSales,500)
  setChange(profit,setProfit,1000)
  setChange(weekSalesRatio,setSalesWeekRatio,3000)
  setChange(weekProfitRatio,setWeekProfitRatio,6000)




  useEffect(() => {
    myEcharts.current = echarts.init(divRef.current);
    myEcharts.current.setOption(createEchartsOptions({
      grid: {
        left: px(100),
        right: px(100),
        bottom: px(10),
        top: px(60),
      },
      tooltip: {

        trigger: 'item',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          },
          label: {
            backgroundColor: '#ea7d75'
          },
          axis: 'y'


        }
      },
      xAxis: [
        {
          show: false,
          type: 'category',
          data: ['第8周', '第7周', '第6周', '第5周', '第5周', '第3周', '第2周', '这周'],


        }
      ],
      yAxis: [

        {
          type: 'value',
          name: '近8周销售趋势',
          nameTextStyle: {
            fontSize: px(16),
            color:'#9ca6c7',
          },

          min: 0,
          max: 36,
          interval: 12,
          axisLabel: {
            formatter: '{value} 亿',
            color:'#9ca6c7',
          },
          axisPointer: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#9ca6c7'
            }
          },

        },
        {
          type: 'value',

          min: -200,
          max: 400,
          interval: 200,
          axisLabel: {
            formatter: '{value} %',
            color:'#9ca6c7',
          },
          splitLine: {
            lineStyle: {
              color: '#9ca6c7'
            }
          },

        }
      ],
      series: [
        {
          name: '销售额',
          type: 'bar',
          data: [33, 25, 33, 33, 22, 18, 23, money],
          itemStyle: {
            normal: {
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#9ca6c7',
                  fontSize: px(26)
                }
              }
            }
          },
          color: '#8d70f0'
        },

        {
          name: '周环比',
          type: 'line',
          yAxisIndex: 1,
          data: [0, 30, 35, 0, 210, -50, 10,],
          color: '#ecb2ff',
          symbol: 'circle',
          symbolSize: px(16),

        }
      ]
    }));
  }, [money]);
  return (
    <div className="销量">
      <div className="sales">
        <Ratio todaySales="今日销售额" todayMoney={sales +'万'} RatioText="周同比" Ratio={weekSalesRatio}/>

        <Ratio todaySales="今日毛利额" todayMoney={profit +'万'} RatioText="周同比" Ratio={weekProfitRatio}/>
      </div>
      <div className=" chart bordered">
        <div ref={divRef} className="charts"/>
        <div className="round">
          <span className="销售额">销售额</span>
          <span className="周环比">周环比</span>
        </div>
      </div>

    </div>
  );
};