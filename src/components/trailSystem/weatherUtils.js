const LocationsAndCode = [
  {
    locationName: '宜蘭縣',
    locationCode: 'F-D0047-003'
  },
  {
    locationName: '桃園市',
    locationCode: 'F-D0047-007'
  },
  {
    locationName: '新竹縣',
    locationCode: 'F-D0047-011'
  },
  {
    locationName: '苗栗縣',
    locationCode: 'F-D0047-015'
  },
  {
    locationName: '彰化縣',
    locationCode: 'F-D0047-019'
  },
  {
    locationName: '南投縣',
    locationCode: 'F-D0047-023'
  },
  {
    locationName: '雲林縣',
    locationCode: 'F-D0047-027'
  },
  {
    locationName: '嘉義縣',
    locationCode: 'F-D0047-031'
  },
  {
    locationName: '屏東縣',
    locationCode: 'F-D0047-035'
  },
  {
    locationName: '臺東縣',
    locationCode: 'F-D0047-039'
  },
  {
    locationName: '花蓮縣',
    locationCode: 'F-D0047-043'
  },
  {
    locationName: '澎湖縣',
    locationCode: 'F-D0047-047'
  },
  {
    locationName: '基隆市',
    locationCode: 'F-D0047-051'
  },
  {
    locationName: '新竹市',
    locationCode: 'F-D0047-055'
  },
  {
    locationName: '嘉義市',
    locationCode: 'F-D0047-059'
  },
  {
    locationName: '臺北市',
    locationCode: 'F-D0047-063'
  },
  {
    locationName: '高雄市',
    locationCode: 'F-D0047-067'
  },
  {
    locationName: '新北市',
    locationCode: 'F-D0047-071'
  },
  {
    locationName: '臺中市',
    locationCode: 'F-D0047-075'
  },
  {
    locationName: '臺南市',
    locationCode: 'F-D0047-079'
  },
  {
    locationName: '連江縣',
    locationCode: 'F-D0047-083'
  },
  {
    locationName: '金門縣',
    locationCode: 'F-D0047-087'
  }
]

export const locationNameToCode = (locationName) => {
  return LocationsAndCode.find((location) => location.locationName === locationName).locationCode
}
