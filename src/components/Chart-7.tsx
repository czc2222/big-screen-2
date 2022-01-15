
import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';



export const Chart7 =()=>{
  const divRef = useRef(null)
  const myChart = useRef(null)
  const data = [

  ]
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {name:'东北区', value:30},
        {name:'其他', value:70}
      ];
      x(newData);

    }, 1000);
    setInterval(() => {
      const newData = [
        {name:'华中区', value:10},
        {name:'其他', value:90}
      ];
      x(newData);

    }, 2000);
    setInterval(() => {
      const newData = [
        {name:'西北区', value:5},
        {name:'其他', value:95}
      ];
      x(newData);

    }, 3000);
    setInterval(() => {
      const newData = [
        {name:'西南区', value:20},
        {name:'其他', value:80}
      ];
      x(newData);

    }, 4000);
    setInterval(() => {
      const newData = [
        {name:'华南区', value:15},
        {name:'其他', value:85}
      ];
      x(newData);

    }, 5000);
    setInterval(() => {
      const newData = [
        {name:'北京区', value:20},
        {name:'其他', value:80}
      ];
      x(newData);

    }, 6000);

  }, []);
  const x =(data)=>{
      myChart.current.setOption(createEchartsOptions({
        title: {
          text: '大区增长情况排名',
          textStyle: {
            fontSize: px(20),
            color: '#9ca6c7'
          }
        },
        grid: {
          left: px(10),
          right: px(60),
          bottom: px(0),
          top: px(40),
          containLabel: true
        },
        xAxis: {
          show:false
        },
        yAxis: {
          type: 'category',
          data: data.map(i=>i.name),
          axisTick:{show:false},
          axisLine:{show:false},
          axisLabel: {
            fontSize: px(15),
            color:'#9ca6c7',
          },
        },
        series: [
          {
            name: '区增长',
            type: 'bar',
            barWidth: px(30),
            data: data.map(i=>i.value),
            itemStyle: {

              //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
              color: function (params) {
                const colorList = ['#7ec9cf', '#cff0f5'];
                return colorList[params.dataIndex];
              }

            },
            label: {
              show: true, color: '#9ca6c7', fontSize: px(20),
              position: 'right',

              formatter(options) {

                return  options.value+'%';
              }
            },

          }
        ],

        animationEasing: 'linear',
        animationEasingUpdate: 'linear'
      }))
  }
  useEffect(()=>{
    myChart.current = echarts.init(divRef.current)
    x(data)
  },[])

  return(
    <div className="areaIncrease">
      <div ref={divRef} className="echart bordered"></div>
    </div>
  )
}