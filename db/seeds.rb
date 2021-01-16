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
15.times do
  groups.push(Group.create(title: Faker::University.suffix, description: Faker::TvShows::Friends.quote))
end
5.times do
  groups.each do |g|
    g.channels.create(subject: Faker::Games::SuperMario.location, public: true, description: Faker::TvShows::DumbAndDumber.quote)
  end
end
15.times do
  Comment.create(channel_id: rand(1..15), user_id: rand(1..3), body: Faker::TvShows::MichaelScott.quote, points: Faker::Number.within(range: 1..100), photo: "This is a photo")
end
puts "seeded"