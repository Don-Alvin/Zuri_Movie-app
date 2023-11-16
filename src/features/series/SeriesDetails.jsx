import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetSeries } from '../../hooks/useSeries'

const SeriesDetails = () => {
  const { id } = useParams()
  const {loading, isError, error, series} = useGetSeries(id)

  console.log(series);
  return (
    <div>SeriesDetails</div>
  )
}

export default SeriesDetails