import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Button, JobView, Spinner } from '@components/index'
import {Job} from '@types'

export default function Home() {

  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [fullTime, setFullTime] = useState(false)

  const [final, setFinal] = useState({
    finalDescription: '',
    finalLocation: '',
    finalFullTime: false,
  })
  const [page, setPage] = useState(1)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false)

  const [mutate, { isLoading, error, data }] = useMutation(() =>
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://jobs.github.com/positions.json?page=${page}&description=${final.finalDescription}&location=${final.finalLocation}&full_time=${final.finalFullTime}`
      )}`
    )
    .then((res) => res.json())
    .then((data) => JSON.parse(data.contents))
  )

  useEffect(() => {
    // setJobs([])
    mutate().then((data) => {
      setJobs(data)
      setDescription('')
      setLocation('')
      setFullTime(false)
    })
  }, [final])

  useEffect(() => {
    mutate().then((data) =>
      setJobs((prev: Job[]) => {
        // [...prev, ...data] and remove duplicates
        const allJobs = [...prev]
        data.forEach((_job) => {
          if (!allJobs.some((job) => job.id === _job.id)) {
            allJobs.push(_job)
          }
        })
        // if we do not get any more jobs even after increasing page
        // disable load more button
        if (page > 1 && prev.length === allJobs.length) {
          setLoadMoreDisabled(true)
        }
        return allJobs
      })
    )
  }, [page])

  if (error) return 'An error has occurred.'

  return (
    <>
      <div className='flex justify-between align-center px-6 mx-auto my-5 bg-indigo-600'>
        <div>
          <input
            placeholder='Filter by text...'
            className='pr-4 rounded-l-md rounded-r-md md:rounded-r-none'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value)
            }}
          />
        </div>
        <div>
        <input
          className='hidden border-l border-r border-dark-grey border-opacity-20 md:flex'
          placeholder='Filter by location...'
          value={location}
          onChange={(e) => {
            setLocation(e.target.value)
          }}
        />
        </div>

        <div>
          <label className='ml-4 text-base font-bold font-brand leading-button text-very-dark-blue dark:text-white'>
            Full Time Only
          </label>
          <input
            className='hidden cursor-auto md:flex rounded-r-md'
            type="checkbox"
            checked={fullTime}
            onChange={(e) => {
              setFullTime(e.target.checked)
            }}
          />
        </div>

        <button
          className="btn"
          onClick={() => {
            setLoadMoreDisabled(false)
            setPage(1)
            setFinal({
              finalDescription: description,
              finalLocation: location,
              finalFullTime: fullTime,
            })
          }}
        >
          Searchhez
        </button>
      </div>

      <div className='relative'>
        {jobs?.map((job: Job) => (
          <JobView key={job.id} job={job} />
        ))}
        {isLoading && (
          <>
            <Spinner />
          </>
        )}
      </div>
      
      <div className='mt-8 mb-20 text-center md:mb-10'>
        <Button
          disabled={isLoading || loadMoreDisabled}
          primary={true}
          onClick={() => setPage((page) => page + 1)}
        >
          Load More
        </Button>
      </div>
    </>
  )
}