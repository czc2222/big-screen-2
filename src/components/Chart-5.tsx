import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart5 =()=>{
  const divRef = useRef(null)
  useEffect(()=>{
    const myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      title: {
        text: '各门店类型增长情况',
        textStyle: {
          fontSize: px(20),
          color: '#9ca6c7'
        }
      },

      color: ['#e9b2ff', '#8f6ef0','#ba90fc'],
      xAxis: {show: false},
      yAxis: {show: false},
      legend: {show: false},
      series: [
        {
          name: '销售额',
          type: 'pie',
          radius: ['22%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'outside', color: '#9ca6c7', fontSize: px(15),
            formatter(options) {

              return options.name+':'+(2.17/100*options.value).toFixed(2)+'亿:'  + options.value+'%';
            }
          },
          labelLine: {show: true},
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            {value: 3.05, name: '成长型'},
            {value: 95.74, name: '成熟型'},
            {value: 1.21, name: '培育型'},
          ]
        }
      ]
    }))
  },[])
  return(
    <div className="saleRatio">

      <div ref={divRef} className="echart bordered"></div>
    </div>
  )
}