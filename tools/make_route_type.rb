fh = open("routetype.txt","w")

File.foreach("src/router.ts") do |line|
  if line =~ /name:/
    word = line.split(/'/)[1]
    constant = word.gsub(/\//,"_").upcase
    # puts "export const #{constant} = '#{word}';"
    # fh.puts "import {#{constant}} from '@/types/RouteTypes';"
    fh.puts "name: #{constant},"
  end
end

fh.close
