# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# pseudo code
# input: a method that takes in a number
# output: determines if the number is even or odd
# used the modulo operator to determine is the nuber is even or odd. If the remainder divided by 2 is 0 then the number is even, if not then it is odd

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(num)
    if num % 2 == 0
      return "#{num} is even"
    else
      return "#{num} is odd"
    end
  end

  reposts1 = 7
puts even_or_odd(reposts1) 

    reposts2 = 42
puts even_or_odd(reposts2)

    reposts3 = 221
puts even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# pseudo code
# input: a method that takes in a string
# output: string with vowels removed
# used the gsub method that looks for all occurrences of a given pattern in a string and replaces them with a given replacement. the regex pattern and the /i modifier looked for the vowels in the string 

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    string.gsub(/[aeiou]/i, '')
  end
  
beatles_album1 = 'Rubber Soul'
  puts remove_vowels(beatles_album1) # Output: 'Rbbr Sl'
  
beatles_album2 = 'Sgt Pepper'
  puts remove_vowels(beatles_album2) # Output: 'Sgt Pppr'
  
beatles_album3 = 'Abbey Road'
  puts remove_vowels(beatles_album3) # Output: 'bby Rd'


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome(string)
    string.downcase == string.downcase.reverse ? "#{string} is a palindrome" : "#{string} is not a palindrome"
  end


  palindrome_test_case1 = 'Racecar'
puts is_palindrome(palindrome_test_case1)

    palindrome_test_case2 = 'LEARN'
puts is_palindrome(palindrome_test_case2)

    alindrome_test_case3 = 'Rotator'
puts is_palindrome(palindrome_test_case3)

# pseudo code
# input: a method that takes in a string
# output: checking if the string is a palindrome
# used the downcase method to convert the string to loswercase to compare the reverse version of it and the reverse method reversed the string. i used the == operator to check if the original and the reversed strings are the same