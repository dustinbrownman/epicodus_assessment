describe('#leapYear', function() {
  it('returns true if the year is evenly divisible by 4', function() {
    leapYear(1996).should.equal(true);
  });

  it('returns false if the year is evenly divisible by 100', function() {
    leapYear(2100).should.equal(false);
  });

  it('returns true if the year is evenly divisible by 400', function() {
    leapYear(2000).should.equal(true);
  });

  it('returns false in all other cases', function() {
    leapYear(3).should.equal(false);
  });
});
