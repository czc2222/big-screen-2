import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart10=()=>{
  const divRef = useRef(null)
  useEffect(()=>{
    const myEcharts = echarts.init(divRef.current)
    myEcharts.setOption(createEchartsOptions({
      title: {
        text: '重点品牌销售增长情况',
        textStyle: {
          fontSize: px(25),
          color: '#9ca6c7'
        }
      },
      grid: {
        left: px(10),
        right: px(45),
        bottom: px(10),
        top: px(45),
        containLabel: true
      },
      xAxis: {
        type: 'value',
        min: -60,
        max: 140,
        interval: 30,
        axisLabel: {
          fontSize: px(20),
          color:'#9ca6c7',
          formatter: '{value}%',
        },
        splitLine: {
          lineStyle: {
            color: '#9ca6c7'
          }
        }
      },
      yAxis: {
        type: 'category',
        data: ['24HRS', 'AIGLE', 'AHAUS', 'AM', '100KM', '1436','ALA ','ANJOR','BADINA','AUM'],
        axisTick:{show:false},
        axisLabel: {
          fontSize: px(20),
          color:'#9ca6c7',

        },

      },
      series: [
        {
          type: 'bar',
          data: [-20, 50, 30, 40, 70, 10,135,70,30,-35],
          label: {
            show: true, color: '#9ca6c7', fontSize: px(20),
            position: 'right',

            formatter(options) {

              return  options.value+'%';
            }
          },
          itemStyle: {

            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
            color: function (params) {
              const colorList = ['#a9cbf9', '#85c8f4', '#8fddf4','#90e4f6','#93e3dc','#aae5d1','#abe4d4','#a5dbc5','#c5ebae','#e6f19c'];
              return colorList[params.dataIndex];
            }

          }
        },

      ]
    }))
  },[])
  return(
    <div className="brand">
          <div ref={divRef} className="echart bordered"></div>
    </div>
  )
}