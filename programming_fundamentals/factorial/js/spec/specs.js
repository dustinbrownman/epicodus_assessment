describe('factorial', function() {
  it('returns 1 for factorial 0', function() {
    factorial(0).should.equal(1);
  });

  it('returns 1 for factorial 1', function() {
    factorial(1).should.equal(1);
  });

  it('returns 2 for factorial 2', function() {
    factorial(2).should.equal(2);
  });

  it('returns 3628800 for factorial 10', function() {
    factorial(10).should.equal(3628800);
  });
});
