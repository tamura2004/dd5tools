arr = [[25, 50, 75, 100],
[50, 100, 150, 200],
[75, 150, 225, 400],
[125, 250, 375, 500],
[250, 500, 750, 1100],
[300, 600, 900, 1400],
[350, 750, 1100, 1700],
[450, 900, 1400, 2100],
[550, 1100, 1600, 2400],
[600, 1200, 1900, 2800]]

mode = %w(EASY NORMAL HARD HELL)

puts "export const BASE_EXP = new Map<MODE, Map<level, exp>>(["
arr.transpose.each.with_index do |a, i|
  puts "  ["
  puts "    MODE.#{mode[i]},"
  puts "    new Map<level, exp>(["
  a.each_with_index do |b,j|
    puts "      [#{j+1}, #{b}],"
  end
  puts "    ]),"
  puts "  ],"
end
puts "]);"
