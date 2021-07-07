const GET_REVIEWS = 'reviews/GET_REVIEWS';

const getReviews =  () => ({
  type: GET_REVIEWS
});

export const submitReview = (newReview) => async dispatch => {
  const { course_api, rating, review, userId } = newReview

  console.log(rating)
  const form = new FormData()
  form.append('course_api', `${course_api}`);
  form.append('rating', rating);
  form.append('review', `${review}`);
  form.append('userId', userId);

  console.log(form)
  const res = await fetch('/api/reviews/', {
    method: 'POST',
    body: form
  })

  if(res.ok){

    // const {search} = await res.json()
    // dispatch(results(search))
  }
};


export default function reviewReducer(state = {}, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return { 'place_reviews': action.reviews }
    default:
      return state;
  }
}
