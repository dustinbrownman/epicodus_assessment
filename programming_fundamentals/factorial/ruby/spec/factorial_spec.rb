require 'rspec'
require 'factorial'

describe Factorial do
  it 'returns 1 for the number 0' do
    factorial = Factorial.new
    factorial.solve(0).should eq 1
  end

  it 'returns 2 for the number 2' do
    factorial = Factorial.new
    factorial.solve(2).should eq 2
  end

  it 'returns 3628800 for the number 10' do
    factorial = Factorial.new
    factorial.solve(10).should eq 3628800
  end
end
