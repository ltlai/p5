get '/' do
  @events = Event.all
  erb :index
end

get '/events/:id/show' do |id|
  @event = Event.find(id)
  erb :event_show
end

get '/events/new' do
  erb :event_create
end

post '/events/create' do
  @event = Event.create(
    organizer_name: params[:name],
    organizer_email: params[:email],
    title: params[:title],
    date: params[:date]
  )

  if @event.errors.any?
    status 400
    erb :_errors, :layout => false
  else
    "/events/#{@event.id}/show"
  end
end
