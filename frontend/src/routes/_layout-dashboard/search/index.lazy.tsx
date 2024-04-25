import { Link, createLazyFileRoute } from '@tanstack/react-router'
import { SearchPageCard } from './-components/search-page-card'
import { SearchVideoCard } from './-components/search-video-card'
import { SearchSuggestionItem } from './-components/search-suggestion-item'
import { BackButton } from '../-components/back-button'


export const Route = createLazyFileRoute('/_layout-dashboard/search/')({
  component: SearchPage
})

function SearchPage() {
  return (
    <main className='bg-white p-4 flex flex-col gap-4'>

      <div className='flex gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <div>
            <BackButton />
          </div>
          <div className='flex gap-2'>
            <Link className="cursor-pointer px-4 py-2 rounded-sm bg-basf-light-blue">
              <p className="text-white">All</p>
            </Link>
            <Link className="cursor-pointer px-4 py-2 border border-gray-200 rounded-sm ">
              <p className="text-gray-500">Accounts</p>
            </Link>
            <Link className="cursor-pointer px-4 py-2 border border-gray-200 rounded-sm ">
              <p className="text-gray-500">Videos</p>
            </Link>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <SearchPageCard />
            <SearchPageCard />
            <SearchPageCard />
          </div>
          <div className='grid grid-cols-3 gap-4 gap-y-8'>
            <SearchVideoCard />
            <SearchVideoCard />
            <SearchVideoCard />
            <SearchVideoCard />
            <SearchVideoCard />
            <SearchVideoCard />
          </div>
        </div>
        <div className='space-y-2 w-[22rem] border border-gray-300 p-4 rounded-sm'>
          <p className='text-lg text-gray-800'>Others Searched for</p>
          <hr />
          <div className='space-y-3'>
            <SearchSuggestionItem />
            <SearchSuggestionItem />
            <SearchSuggestionItem />
            <SearchSuggestionItem />
            <SearchSuggestionItem />
            <SearchSuggestionItem />
            <SearchSuggestionItem />
          </div>
        </div>
      </div>
    </main>
  )
}