

describe('searchCandoes', () => {

  it('returns Mars and Maltesers as they start with Ma and less than price 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns Mars as it starts with Ma and less than price 2', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars'])
  });

  it('returns candies beginning with S and under price 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ])
  });

  it('returns candies beginning with S and under price 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ])
  });

});