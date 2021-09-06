import data0 from './data1.json'
import data1 from './data4.json'



const STR1 = JSON.stringify(data1);
const STR2 = JSON.stringify(data0);

export const DATA =  [JSON.parse(STR1),JSON.parse(STR2)]
