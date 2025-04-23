import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MovieReviewForm({ movieId }) {


  const api_url = 'http://localhost:3004/api/movies/' + movieId + '/reviews'
  const navigate = useNavigate()

  const initialFormData = {
    name: 'anonymous',
    vote: 1,
    review: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState({})
  const [success, setSuccess] = useState(false)

  function isFormValid(data) {
    const errors = {}
    if (!data.name) errors.name = 'Name is required'
    if (!data.vote) errors.vote = 'Vote is required'
    if (!data.review) errors.review = 'Review is required'

    if (data.vote < 1 || data.vote > 5) errors.vote = 'Vote must be between 1 and 5'

    if (data.review.length < 10) errors.review = 'Review must be at least 10 characters long'
    if (data.review.length > 500) errors.review = 'Review must be less than 500 characters long'

    if (data.name.length < 3) errors.name = 'Name must be at least 3 characters long'
    if (data.name.length > 50) errors.name = 'Name must be less than 50 characters long'

    setFormErrors(errors)
    return Object.keys(errors).length === 0

  }

  function handleFormSubmit(e) {
    e.preventDefault();

    // Validazione del modulo
    if (!isFormValid(formData)) {
      return;
    }

    fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData(initialFormData);
        if (data?.message) {
          setSuccess(data.message)

          setTimeout(() => {
            setSuccess(false)
            navigate(0)

          }, 2000);
        }
      })
      .catch((err) => console.error('Error submitting form:', err));
  }







  return (

    <>
      <div className="add-review mb-5">
        <h3 className="mb-3">Add your review</h3>

        {Object.keys(formErrors).length > 0 && (
          <div className="alert alert-danger" role="alert">
            <ul className='mb-0'>
              {Object.keys(formErrors).map((key) => (
                <li key={key}>{formErrors[key]}</li>
              ))}
            </ul>
          </div>
        )}

        {success && (
          <div className="alert alert-success" role="alert">
            {success}
          </div>
        )}

        <form action="POST" className="mb-3" onSubmit={handleFormSubmit}>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder="anonymous"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="vote" className="form-label">Vote</label>
            <input
              type="number"
              className="form-control"
              name="vote"
              id="vote"
              min={1}
              max={5}
              aria-describedby="helpId"
              placeholder="1"
              value={formData.vote}
              onChange={(e) => setFormData({ ...formData, vote: e.target.value })}
            />
          </div>


          <div className="mb-3">
            <label htmlFor="review" className="form-label">Review</label>
            <textarea
              name="review"
              className="form-control"
              rows="3"
              placeholder="Write your review here"
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
            ></textarea>
          </div>

          <div className="bm-3">
            <button type="submit" className="btn btn-primary mt-2">Submit review</button>
          </div>

        </form>
      </div>
    </>
  )
}