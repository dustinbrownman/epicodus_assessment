require 'rspec'
require 'leap_year'

describe LeapYear do
  it 'returns false if the year is not divisible by 4' do
    LeapYear.new.leap_year?(3).should be_false
  end

  it 'returns true if the year is divisible by 4' do
    LeapYear.new.leap_year?(12).should be_true
  end

  it 'returns false if the year is divisible by 100' do
    LeapYear.new.leap_year?(200).should be_false
  end

  it 'returns true if the year is divisible by 400' do
    LeapYear.new.leap_year?(8000).should be_true
  end
end