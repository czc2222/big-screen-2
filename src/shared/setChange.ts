export const setChange=(value,setValue,time)=>{
  setTimeout(()=>{
    setValue(value + 1)
  },time)
}