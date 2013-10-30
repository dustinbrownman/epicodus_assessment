class LeapYear
  def leap_year?(year)
    if year % 400 == 0
      true
    elsif year % 100 != 0
      year % 4 == 0
    else
      false
    end
  end
end
