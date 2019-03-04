require 'fileutils'
require 'logger'
require 'active_support'
require 'active_support/core_ext'

$log = Logger.new(STDOUT)

FILES = [
  'src/router/MasterPlayerRoute.ts',
  'src/views/MasterPlayers.vue',
  'src/views/MasterPlayer.vue',
  'src/views/MasterPlayerForm.vue',
  'src/views/MasterPlayerSheet.vue'
]
FROMS = [
  /MasterPlayer/,
  /player/
]

def copyWithReplace(to)
  pp to

  FILES.each do |file|
    template = File.open(file).read
    newfile = file

    FROMS.each_with_index do |from, i|
      newfile.gsub!(from, to[i])
      template.gsub!(from, to[i])
    end

    if File.exist?(newfile)
      $log.warn("already exist: #{newfile}")
    else
      open(newfile, "w") do |fh|
        fh.puts template
        $log.info("write: #{newfile}")
      end
    end
  end

  ARGV.pop
  basefile = "src/router/#{ARGV.map(&:titleize).join}Route.ts"
  buffer = []
  if File.exist?(basefile)
    $log.info("basefile: #{basefile}")
    File.foreach(basefile) do |line|
      buffer.push(line)
      if line =~ FROMS[0]
        newline = line.gsub(FROMS[0], to[0])
        buffer.push(newline)
        $log.info("addline: #{newline}")
      end
    end
    File.open(basefile, "w") do |fh|
      fh.puts buffer.join
    end
  end
end

raise "need some parameter: #{ARGV}" if ARGV.size == 0

to = []
copyWithReplace([
  ARGV.map(&:titleize).join,
  ARGV.last
])
