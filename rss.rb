require 'date'
require 'pry-byebug'


require 'json'
require 'open-uri'
require 'rss'
require 'sinatra'
require 'sinatra/activerecord'

require './models/favorite'

rss_url = "http://www.theonion.com/feeds/rss"

def fetch_rss(url)
  RSS::Parser.parse(url, false)
end

before %r{.+\.json$} do
    content_type :json
end

get '/' do
  db_time = database.connection.execute('SELECT CURRENT_TIMESTAMP').first['now']
  request.logger.info "DB time is #{db_time}"

  erb :root
end

get '/rss-feed.json' do
  fetch_rss(rss_url).channel.to_json
end

get '/favorites.json' do
  Favorite.all.to_json
end

post '/favorites/add.json' do
  fav = Favorite.new({pubdate: params[:pubdate], title: params[:title], url: params[:url], img: params[:img], description: params[:description], guid: params[:guid]})
  fav.save
  Favorite.all.to_json
end

post '/favorites/remove.json' do
  fav = Favorite.find_by(guid: params[:guid])
  Favorite.delete(fav.id)
  Favorite.all.to_json
end
