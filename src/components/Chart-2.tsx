import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import china from '../geo/china.json'



export const Chart2 = () => {
    const divRef = useRef(null)

  useEffect(()=>{
    const myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap('CN', china);
    myChart.setOption(createEchartsOptions(({
      title: {
        text: '全国当月实销金额',
        textStyle:{
          fontSize:px(20),
          color:'#9ca6c7'
        }
      },
      visualMap: {
        min: 1.6,
        max: 2000,
        realtime: true,
        calculable: true,
        inRange: {
          color: ['#bca3f6',  '#8e74f5']
        },
        textStyle:{
          color:'#9ca6c7',
          fontSize: px(20)
        },
        handleStyle:{
          borderColor:'none'
        },
        itemWidth:px(10),
        itemHeight:px(100),
        orient:'horizontal',
        formatter: function (value) {
          return value +'k';
        }
      },

      xAxis: {show: false},
      yAxis: {show: false},
      series: [
        {
          type: 'map',
          map: 'CN', // 自定义扩展图表类型
          data: [
            {name: '四川省',value:1200},
            {name: '甘肃省',value:1200},
            {name: '陕西省',value:1200},
            {name: '云南省',value:1200},
            {name: '贵州省',value:1200},
            {name: '山东省',value:1300},
            {name: '广东省',value:1500},
            {name: '北京市',value:2000},
            {name: '辽宁省',value:1500},
            {name: '吉林省',value:900},
            {name: '黑龙江省',value:1000},
            {name: '河北省',value:800},
            {name: '山西省',value:700},
            {name: '陕西省',value:900},
            {name: '青海省',value:1000},
            {name: '安徽省',value:900},
            {name: '江苏省',value:1600},
            {name: '浙江省',value:1300},
            {name: '河南省',value:1000},
            {name: '湖北省',value:800},
            {name: '湖南省',value:900},
            {name: '江西省',value:900},
            {name: '福建省',value:1200},
            {name: '海南省',value:900},
          ],
          emphasis: {
            label: {color: '#617182'},
            areaColor: '#e7b3fd',
          },
          itemStyle: {
            areaColor: '#b7a8ed',
            color: 'none',
            borderColor: 'white',

          }
        }
      ]
    })))
  },[])

  return (
    <div className="map bordered">
       <div ref={divRef} className="chart"></div>
    </div>
  );
};