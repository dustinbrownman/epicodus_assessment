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
});
