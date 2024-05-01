import { expressions as exp } from '3xpr'

export const GET = () => {
  const context = {
    name: 'Spain',
    region: 'Europe',
    phoneCode: '34',
    timezones: [
      { name: 'Madrid', offset: 1, pos: { lat: 40.4165, log: -3.70256 } },
      { name: 'Ceuta', offset: 1, pos: { lat: 35.8883, log: -5.3162 } },
      { name: 'Canary', offset: 0, pos: { lat: 28.1248, log: -15.43 } }
    ]
  }

  const result = exp.eval('5*(7+9)==(5*7+5*9)')
  return Response.json(result);
}