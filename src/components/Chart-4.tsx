import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';


export const Chart4 =()=>{
  const divRef =useRef(null)

  useEffect(()=>{
    var myChart = echarts.init(divRef.current);
    var option;

    let data = [];
    for (let i = 0; i < 3; ++i) {
      data.push(0);
    }
    option = {
     grid: {
      left: px(70),
      right: px(70),
      bottom: px(60),
      top: px(40),
     },
      title: {
        text: '各门店类型增长情况',
        textStyle: {
          fontSize: px(20),
          color: '#9ca6c7'
        }
      },

      xAxis: {
        type: 'value',
        min: -80,
        max: 60,
        interval: 20,
        axisLabel: {
          formatter: '{value}.00%',
          rotate: 30,
          fontSize: px(15),
          color:'#9ca6c7',
        },
        splitLine: {
          lineStyle: {
            color: '#9ca6c7'
          }
        },
      },
      yAxis: {
        type: 'category',
        data: ['成熟型', '培育型', '成长型'],
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: {
          fontSize: px(15),
          color:'#9ca6c7',
        },
        inverse: true,
        animationDuration: 300,
        animationDurationUpdate: 300,
        max: 2 // only the largest 3 bars will be displayed
      },
      series: [
        {
          realtimeSort: true,
          name: '类型',
          type: 'bar',
          data: data,
          itemStyle: {

              //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                const colorList = ['#8f6ef0', '#ba90fc', '#e9b2ff'];
                return colorList[params.dataIndex];
              }

          }
        }
      ],

      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear'
    };
    function run() {
      for (var i = 0; i < data.length; ++i) {
        if (data[i] < 60) {
          if (Math.random() > 0.9) {
            data[i] += Math.round(Math.random() * 200);
          } else {
            data[i] += Math.round(Math.random() * 100);
          }
        } else {
          data = [-60, -15, -40];
        }
      }
      myChart.setOption({
        series: [
          {
            type: 'bar',
            data
          }
        ]
      });
    }
    setTimeout(function () {
      run();
    }, 0);
    setInterval(function () {
      run();
    }, 3000);

    option && myChart.setOption(createEchartsOptions(option));

  },[])
  return(
    <div className="increase">
      <div ref={divRef} className="echart"></div>
    </div>
  )
}