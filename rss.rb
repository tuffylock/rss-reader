require 'sinatra'

get '/' do
  "#{['Hello', 'ayyy'][rand(2)]} world"
end
