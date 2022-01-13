import React, {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {Ratio} from '../components/Ratio';
import {setChange} from '../shared/setChange';

export const Chart3 = () => {
  const divRef = useRef(null);
  const myEcharts = useRef(null)
  const [passenger, setPassenger] = useState(303602);
  const [person,setPerson] =useState(119858)
  const [vip,setVip]=useState(104)
  const [weekSalesRatio,setSalesWeekRatio] =useState(6268789250.00)
  const [weekProfitRatio,setWeekProfitRatio] =useState(94044463)



  setTimeout(()=>{
    setPassenger(passenger +35)
  },3000)
  setChange(person,setPerson,500)
  setChange(vip,setVip,6000)
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
          data: ['第8周', '第7周', '第6周', '第5周', '第5周', '第3周', '第2周', '这周']

        }
      ],
      yAxis: [

        {
          type: 'value',
          name: '近8周客流趋势',
          nameTextStyle: {
            fontSize: px(16),
            color:'#9ca6c7',
          },
          min: 0,
          max: 600000,
          interval: 200000,
          axisLabel: {
            formatter: '{value}',
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

          min: -120,
          max: 60,
          interval: 60,
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
          name: '客流数',
          type: 'bar',
          data: [224709, 72030.5, 292465, 445681, 74717, 15140, 303602.5, passenger],
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
          color: '#fdeadb'
        },

        {
          name: '周环比',
          type: 'line',
          yAxisIndex: 1,
          data: [-25, -5, 3, -20, -70, -80, -3,-30],
          color: '#f3c0b0',
          symbol: 'circle',
          symbolSize: px(16),
        }
      ]
    }));
  }, [passenger]);
  return (
    <div className="人流量">
      <div className="人流">
        <Ratio todaySales="今日客流量" todayMoney={person} RatioText="年同比" Ratio="6.25"/>

        <Ratio todaySales="今日新增会员" todayMoney={vip} RatioText="年同比" Ratio="3.25"/>
      </div>
      <div className=" chart bordered">
        <div ref={divRef} className="charts"/>
        <div className="round">
          <span className="客流数">客流数</span>
          <span className="周环比2">周环比</span>
        </div>
      </div>

    </div>
  );
};