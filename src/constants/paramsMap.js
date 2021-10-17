export const parameterMap = {
  location: {
    北區: 'location=north',
    中區: 'location=middle',
    南區: 'location=south',
    東區: 'location=east',
  },
  altitude: {
    '1k 以下': 'altitude[lt]=1000',
    '1k-2k': 'altitude[gt]=1000&altitude[lt]=2000',
    '2k-3k': 'altitude[gt]=2000&altitude[lt]=3000',
    '3k 以上': 'altitude[gt]=3000',
  },
  length: {
    '2 以下': 'length[lt]=2',
    '2-5': 'length[gt]=2&length[lt]=5',
    '5-12': 'length[gt]=5&length[lt]=12',
    '12 以上': 'length[gt]=12',
  },
  difficult: {
    新手: 'difficult=新手',
    入門: 'difficult=入門',
    進階: 'difficult=進階',
    挑戰: 'difficult=挑戰',
    困難: 'difficult=困難',
  },
}
