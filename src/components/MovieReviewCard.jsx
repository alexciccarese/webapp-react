export default function MovieReviewCard({ userReview }) {

  const { text, vote, name, created_at } = userReview

  return (

    <>
      <div className="card mb-3">

        <div className="card-header d-flex justify-content-between align-items-center">
          <h3>{text}</h3>
          <div className="vote">{vote}</div>
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