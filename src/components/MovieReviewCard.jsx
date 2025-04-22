export default function MovieReviewCard({ userReview }) {

  const { text, vote, name, created_at } = userReview


  function rating(vote) {

    const stars = []
    const empty = []

    for (let i = 0; i < vote; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>)
    }

    for (let i = 0; i < 5 - vote; i++) {
      empty.push(<i key={i} className="bi bi-star"></i>)
    }

    return [...stars, ...empty]
  }

  return (

    <>
      <div className="card mb-3">

        <div className="card-header d-flex justify-content-between align-items-center">
          <h3>{text}</h3>
          <div className="vote">{rating(vote)}</div>
        </div>

        <div className="card-body">
          {text}
        </div>

        <div className="card-footer">
          {name}
          <div className="created-at">created at: {created_at}</div>
        </div>
      </div>
    </>
  )
}