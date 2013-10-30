require 'rspec'
require 'factorial'

describe Factorial do
  it 'returns 1 for the number 0' do
    factorial = Factorial.new
    factorial.solve(0).should eq 1
  end
end