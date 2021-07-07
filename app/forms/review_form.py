from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField
from wtforms.validators import DataRequired



class ReviewForm(FlaskForm):
    rating = IntegerField('rating')
    course_api = StringField('course_api', validators=[DataRequired()])
    userId = IntegerField('userId', validators=[DataRequired()])
    review = TextAreaField('review', validators=[DataRequired()])
