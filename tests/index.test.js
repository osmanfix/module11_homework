const getPercents = require('./index.js');

describe('test', ()=> {
  it('30 percent of 200', () => {
    const result = getPercents(30 , 200)
    expect(result).toBe(60);
  }),
  it('20 percent of 300', () => {
    const result = getPercents(20 , 300)
    expect(result).toBe(80);
  })
  it('40 percent of 1000', () => {
    const result = getPercents(40 , 1000)
    expect(result).toBe(400);
  })
});