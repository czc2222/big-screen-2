import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart8 =()=>{
  const divRef = useRef(null)
  const myChart =useRef(null)
  const data =[]

  const x =(data)=>{
         myChart.current.setOption(createEchartsOptions({
           title: {
             text: '重点类别增长排名情况',
             textStyle: {
               fontSize: px(25),
               color: '#9ca6c7'
             }
           },
           xAxis: {show: false},
           yAxis: {show: false},
           series: [
             {
               name: '排名情况',
               type: 'pie',
               radius: '60%',
               labelLine: {show: false},
               data:data,
               itemStyle: {

                 //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                 color: function (params) {
                   const colorList = ['#b4e5cb', '#e7b3fd','#8e6ff0','#ffead9'];
                   return colorList[params.dataIndex];
                 }

               },
               label: {
                 show: true, color: '#9ca6c7', fontSize: px(20),
                 position: 'right',

                 formatter(options) {

                   return  options.name+'\n'+options.value+'%';
                 }
               },
             }
           ]
         }))
  }
  useEffect(()=>{
    setInterval(()=>{
      const newData = [
        { value: 121.53, name: '化妆' },
        { value: 40.42, name: '男装' },
        { value: 32.60, name: '女鞋' },
        { value: 30.27, name: '女装' }
      ]
      x(newData)
    },2000)
    setInterval(()=>{
      const newData = [
        { value: 27.93, name: '饰品' },
        { value: 22.71, name: '珠宝' },
        { value: 5, name: '家用电器' },
        { value: 50, name: '男鞋' }
      ]
      x(newData)
    },4000)
  })
  useEffect(()=>{
    myChart.current = echarts.init(divRef.current)
     x(data)
  },[])
  return(
    <div className="ranking">
      <div ref={divRef} className="echart bordered"></div>
    </div>
  )
}