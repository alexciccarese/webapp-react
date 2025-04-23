import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

export default function LoaderComponent() {
  const { isLoading } = useContext(GlobalContext)

  return (

    <>
      {
        isLoading && (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
      }
    </>
  )
}