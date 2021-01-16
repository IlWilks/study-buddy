# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
groups = []

u1 = User.create(email: "test@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                
u2 = User.create(email: "test2@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                 
u3 = User.create(email: "test3@test.com", password: "123456", name: Faker::FunnyName.four_word_name)
                 

20.times do
  groups.push(u1.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote))
                                   
  groups.push(u2.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote))

  groups.push(u3.groups.create(title:Faker::University.suffix, description:Faker::TvShows::Friends.quote)) 
end


5.times do 
  groups.each do |c|
    c.channels.create(subject:Faker::Games::SuperMario.location  public:true description:Faker::TvShows::DumbAndDumber.quote)

  end

3.times do
  channels.each do |i|
    i.comments.create(body:Faker::TvShows::MichaelScott.quote points:Faker::Number.within(range: 1..100) photo:"this is a photo" )
  end
end

puts "seeded"