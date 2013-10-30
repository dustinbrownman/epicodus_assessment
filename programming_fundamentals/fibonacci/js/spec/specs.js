describe('fibonacci', function() {
  it('returns 0 for 0', function() {
    fibonacci(0).should.equal(0);
  });

  it('returns 1 for 1', function() {
    fibonacci(1).should.equal(1);
  });

  it('returns 1 for 2', function() {
    fibonacci(2).should.equal(1);
  });

  it('returns 2 for 3', function() {
    fibonacci(3).should.equal(2);
  });

  it('returns 3 for 4', function() {
    fibonacci(4).should.equal(3);
  });

  it('returns 55 for 11', function() {
    fibonacci(10).should.equal(55);
  });
});
