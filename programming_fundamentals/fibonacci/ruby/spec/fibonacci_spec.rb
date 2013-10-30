require 'rspec'
require 'fibonacci'

describe Fibonacci do
  it 'returns 0 for 0' do
    Fibonacci.new.solve(0).should eq 0
  end

  it 'returns 1 for 1' do
    Fibonacci.new.solve(1).should eq 1
  end

  it 'returns 1 for 2' do
    Fibonacci.new.solve(2).should eq 1
  end

  it 'returns 38 for 10' do
    Fibonacci.new.solve(10).should eq 55
  end
end
