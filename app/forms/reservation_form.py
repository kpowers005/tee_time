from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired


class ReservationForm(FlaskForm):
    time = StringField('time')
    course_api = StringField('course_api', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    date = StringField('date', validators=[DataRequired()])
