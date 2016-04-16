require 'json'
require 'open-uri'
require 'rss'
require 'sinatra'
require 'sinatra/activerecord'

rss_url = "http://www.theonion.com/feeds/rss"

def fetch_rss(url)
  RSS::Parser.parse(url, false)
end
#
# def render_html(rss)
#   rss_html = ""
#
#   rss.items.each do |item|
#
#      rss_html <<
#         "<p><a href='#{item.link}'>#{item.title}
#      </a><br />"
#
#      rss_html <<
#         "Published on: #{item.date.strftime("%B %d, %Y")}
#      <br />"
#      rss_html << "#{item.description}</p>"
#
#   end
#
#   rss_html
# end

get '/' do
  db_time = database.connection.execute('SELECT CURRENT_TIMESTAMP').first['now']
  request.logger.info "DB time is #{db_time}"

  erb :root
end

get '/rss-feed.json' do
  content_type :json
  fetch_rss(rss_url).channel.to_json
end
