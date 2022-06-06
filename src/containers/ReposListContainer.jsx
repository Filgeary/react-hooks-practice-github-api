import React from 'react'
import { useGetReposByUser } from '../hooks/useGetReposByUser'
import { Spinner } from 'react-bootstrap'
import AlertComponent from '../components/AlertComponent'
import ReposList from '../components/ReposList'

const ReposListContainer = ({ queryId }) => {
  const {
    isLoading,
    isError,
    error,
    data: responseData,
  } = useGetReposByUser(queryId)
  const data = responseData?.data

  if (isLoading) {
    return (
      <>
        <Spinner
          as='span'
          animation='border'
          variant='primary'
        />
        <span>Loading...</span>
      </>
    )
  }

  if (isError) {
    return (
      <AlertComponent
        variant='danger'
        heading='Error'
        text={error.message}
      />
    )
  }

  return data && <ReposList repos={data} />
}

export default ReposListContainer
