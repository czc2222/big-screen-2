import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart6 =()=>{
  const divRef = useRef(null)
  useEffect(()=>{
    const myCharts = echarts.init(divRef.current)
    myCharts.setOption(createEchartsOptions({
      title: {
        text: '当月各大区计划完成情况',
        textStyle: {
          fontSize: px(20),
          color: '#9ca6c7'
        }
      },

        legend: {
          data: ['完成度'],
          icon:'circle',
          bottom:'0',
          itemWidth: px(10),  // 设置宽度
          itemHeight: px(10), // 设置高度
          textStyle: {
            fontSize: px(12),
            color: '#9ca6c7',
          }

        },
      xAxis: {show: false},
      yAxis: {show: false},
      label:{
        show:false,
        position:'outside',
        formatter(options) {

          return options.value +'%'
        },
        fontSize: px(15),
        color: '#9ca6c7',


      },
      radar: {
        startAngle:60,
        radius:'50%',
        indicator: [
          { name: '西北区', max: 100 },
          { name: '华中区', max: 100 },
          { name: '东北区', max: 100 },
          { name: '北京区', max: 100 },
          { name: '华南区', max: 100 },
          { name: '西南区', max: 100 },
        ],
        name: {
          textStyle: {
            fontSize:px(15) ,
            color:'#9ca6c7',

          }
        }
      },
      series: [
        {
          type: 'radar',
          symbolSize:px(5),
          itemStyle:{color:'#3cb5aa'},
          areaStyle:{
            color:'#3cb5aa',
            opacity:0.3
          },
          data: [

            {
              value: [87, 90, 85, 70, 92, 85],
              name: '完成度'
            }
          ]
        }
      ]
    }))
  },[])
  return (
    <div className="area">
        <div ref={divRef} className="echart bordered"></div>
    </div>
  )
}