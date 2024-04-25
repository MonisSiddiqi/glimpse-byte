import { createLazyFileRoute } from '@tanstack/react-router'
import { CategoryContainer } from './-components/category-container'
import { ResultCard } from './-components/result-card'


export const Route = createLazyFileRoute('/_layout-dashboard/explore/')({
  component: ExplorePage
})

function ExplorePage() {
  return (
    <div className='bg-white p-4 flex flex-col gap-4'>
      <CategoryContainer />
      <div className='grid grid-cols-5 gap-5 gap-y-10'>
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </div>
  )
}