import classNames from 'classnames'
import { Job } from '@types/index'
import { formatDate } from '@utils/index'
import Link from 'next/link'

export default function JobView({ job }: { job: Job }) {
  
  return (
    <>
      <div className='relative p-8 pt-0 w-full border-bottom'>
        <div className='pt-12 text-base font-normal leading-5 text-dark-grey font-brand'>
          <h2 className='text-lg font-bold leading-6 font-brand text-very-dark-blue dark:text-white'>
            {job.title}
          </h2>
          <div className="flex items-center">
            <p className='mt-3 text-base font-normal leading-5 font-brand text-dark-grey'>
              {job.company}
            </p> 
            <p>{formatDate(new Date(job.created_at))}</p>
            <p className='ml-3'>{job.type}</p>
            <p className='mt-10 text-sm font-bold font-brand'>
            {job.location}
          </p>
          </div>
        </div>
        <Link href={`/jobs/${job.id}`}>
          <span className='text-sm font-semibold tracking-wider uppercase'>
            View Details
          </span>
        </Link>
      </div>
    </>
  )
}
