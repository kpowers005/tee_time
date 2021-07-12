from app.models import db, TeeTime
import random


# Adds a demo user, you can add other users here if you want
def seed_tee_times():

  reviews = ['Wow I thought that this was a really great course. I would definitely come here again. The greens was so nice and just the views are stunning.',
  'This course was all right in my book, me and my friends had a great time golfing here. Definitely looking forward to coming back.',
  "I have definitely golfed at nicer courses but this one wasn't that bad. It did not help that I did not play too well today. Gotta hit the driving range!",
  "This course was not in good shape they definitely have to do a lot of work to improve the quality of play here. I don't think that I will be spending my money at this establishment again hopefully they can get it together.",
  "This was one of the best golfing experiences I have ever had, definitely looking forward to bringing the kids to show them how it's done. Just another great day of golf, I love golf.",
  "This was one of the worst golfing experiences."
  ]

  apis = ['ChIJ5SKZ0ERy44kRGyZFx9Zh73g', 'ChIJ93kyjzRt44kR14KJS_P9ilQ', 'ChIJwzZo2sty44kRwrfF2gP-SYg', 'ChIJo_cDr0Vy44kRHnoBUoi-S4Y',
    'ChIJGV9lsP9y44kRt7IPE4qJKrw', 'ChIJI7QzmasT44kR19plGIfL3p', 'ChIJD9rFERVs44kRhHw3clZeQWM', 'ChIJZzMWyo5044kRzful3ta-lQ',
    'ChIJkctTI8gN44kRKSGSAqZ4fNs', 'ChIJ4TXuOQEN44kRefrwT1mRhss', 'ChIJNVJDy5F044kRpsCbRegqVhM', 'ChIJ0_zSYz0N44kRw9xDXFAO2Ao', 'ChIJb_J4xkpu44kRRHpAVSgf3II',
    'ChIJURl2fFhz44kRKM7q5DA8AXA', 'ChIJU1DQNJh344kR13rU0FUaY9s', 'ChIJx5TH8GET44kRtadPXeAIKqA', 'ChIJc7qRHWZ444kRg2U5zLb_4BA', 'ChIJDWC0YeB744kRXqoeKEzznbk',
    'ChIJtfBkzq8W44kR4k8Xyt2NKGg', 'ChIJTVhUsBML44kR46FKrbY6PZI'
  ]

  i = 0
  while i < 100:
    tt = TeeTime(
      date='Sun, Jul 18 2021', userId=random.randint(1, 10), course_api=apis[random.randint(0, len(apis)-1)])

    db.session.add(tt)
    i+=1

  db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tee_times():
    db.session.execute('TRUNCATE tee_times RESTART IDENTITY CASCADE;')
    db.session.commit()
