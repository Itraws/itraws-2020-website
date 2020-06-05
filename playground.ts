interface data {
  [key: string]: any | {}
}
const configuration = {
  min: 0,
  max: 3
}

const data: data = [
  { post: 'john' },
  { post: 2 },
  { post: 3 },
  { post: 'alex' },
  { post: 5 },
  { post: 6 }
]
// const filterData = (value: number): any | number => {
//   data.filter((p: data) => p.post === value)
// }
const filterDataByMinMax = (min: number, max: number) => {
  return data.splice(min, max)
}

const pageNext = () => {
  configuration.min += configuration.max
}
const pagePrevious = () => {
  configuration.min -= configuration.max
}

pageNext()
console.log(filterDataByMinMax(configuration.min, configuration.max))

pagePrevious()
console.log(filterDataByMinMax(configuration.min, configuration.max))