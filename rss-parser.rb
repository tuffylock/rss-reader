require 'rss'
require 'open-uri'

rss_feed = "http://www.theonion.com/feeds/rss"

rss_content = ""

open(rss_feed) do |f|
  rss_content = f.read
end

rss = RSS::Parser.parse(rss_content, false)

p rss

puts "Title: #{rss.channel.title}"
puts "RSS URL: #{rss.channel.link}"
puts "Ttoal entries: #{rss.items.size}"

rss.items.each do |item|
  puts "<a href='#{item.link}'>#{item.title}</a>"
  puts "Published on: #{item.date}"
  puts "#{item.description}"
end



def parse_rss(url)
  rss_content = ""

  open(rss_feed) do |f|
    rss_content = f.read
  end

  rss = RSS::Parser.parse(rss_content, false)
  return rss
end


def render_html(raw_rss)
  rss_html = ""

  rss.items.each do |item|

     rss_html <<
        "<p><a href='#{item.link}'>#{item.title}
     </a><br />"

     rss_html <<
        "Published on: #{item.date.strftime("%B %d, %Y")}
     <br />"
     rss_html << "#{item.description}</p>"

  end
end

def store_rss(raw_rss)
  Postgres.RSSTable.insert(raw_ras)
end

def controller_action(url)
  # rss_feed = "http://www.theonion.com/feeds/rss"
  raw_rss = parse_rss(url)

  store_rss(raw_rss)

  html = render_html(raw_rss)
end
