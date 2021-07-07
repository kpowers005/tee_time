const GET_REVIEWS = 'reviews/GET_REVIEWS';

const reviewDispatch =  (reviews) => ({
  type: GET_REVIEWS,
  reviews
});


export const getReviews = (id) => async dispatch => {
  const res = await fetch(`/api/reviews/${id}`);

  if (res.ok){
    const {reviews} = await res.json()

    dispatch(reviewDispatch(reviews))
  }
};


export const submitReview = (newReview) => async dispatch => {
  const { course_api, rating, review, userId } = newReview

  console.log(course_api, 'APIIIIIII')
  const form = new FormData()
  form.append('course_api', `${course_api}`);
  form.append('rating', rating);
  form.append('review', `${review}`);
  form.append('userId', userId);


  const res = await fetch('/api/reviews/', {
    method: 'POST',
    body: form
  });

  if (res.ok){
    const {reviews} = await res.json()

    dispatch(reviewDispatch(reviews))
  }
};


export default function reviewReducer(state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case GET_REVIEWS:
      return { ...action.reviews }
    default:
      return state;
  }
}
