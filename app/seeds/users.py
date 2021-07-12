from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@demo.com',play_level='Beginner', password='password')
    tiger = User(
        first_name='Tiger', last_name='Woods', email='tiger@woods.com',play_level='Advanced', password='password')
    johnny = User(
        first_name='johnny', last_name='Bravo', email='johnny@bravo.com',play_level='Beginner', password='password')
    bill = User(
        first_name='Bill', last_name='Nye', email='billnye@science.com',play_level='Intermediate', password='password')
    barack = User(
        first_name='Barack', last_name='Obama', email='barack@obama.com',play_level='Advanced', password='password')
    gary = User(
        first_name='Gary', last_name='Pitowski', email='gary@gary.com',play_level='Beginner', password='password')
    ricky = User(
        first_name='ricky', last_name='fowler', email='ricky@ricky.com',play_level='Advanced', password='password')
    nathan = User(
        first_name='nathan', last_name='ricks', email='nathan@ricks.com',play_level='Advanced', password='password')
    billie = User(
        first_name='billie', last_name='eillish', email='billie@eillish.com',play_level='Beginner', password='password')
    kamala = User(
        first_name='Kamala', last_name='Harris', email='kamala@harris.com',play_level='Intermediate', password='password')

    db.session.add(demo)
    db.session.add(tiger)
    db.session.add(johnny)
    db.session.add(bill)
    db.session.add(barack)
    db.session.add(gary)
    db.session.add(ricky)
    db.session.add(nathan)
    db.session.add(billie)
    db.session.add(kamala)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
