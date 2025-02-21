import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routers } from '@/routers'

function App() {
  return (
    <Suspense fallback={null}>
      <RouterProvider router={routers} />
    </Suspense>
  )
}

export default App
