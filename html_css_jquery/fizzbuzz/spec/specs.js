describe('FizzBuzz', function() {
  it('returns an array of all non-negative numbers up to the number given', function() {
    fizzbuzz(4).should.eql([0, 1, 2, 3, 4]);
  });

  it('returns an empty array if the number is less than zero', function() {
    fizzbuzz(-2).should.eql([]);
  });

  it('returns \'fizz\' if the number is evenly divisible by 3', function() {
    fizzbuzz(6).should.equal('fizz');
  });

  it('returns \'buzz\' if the number is evenly divisible by 5', function() {
    fizzbuzz(10).should.equal('buzz');
  });

  it('returns \'fizzbuzz\' if the number is evenly divisible by 15', function() {
    fizzbuzz(15).should.equal('fizzbuzz');
  });
});
