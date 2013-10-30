class Factorial
  def initialize
    @factorials = [1]
  end

  def solve(number)
    @factorials[number] ||= number * solve(number - 1)
  end
end
