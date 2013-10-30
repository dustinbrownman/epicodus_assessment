class Fibonacci

  def initialize
    @fibonacci_numbers = [0, 1]
  end

  def solve(number)
    @fibonacci_numbers[number] ||= solve(number - 1) + solve(number - 2)
  end
end
