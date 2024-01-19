import React from 'react'

function Page() {
  return (
    <>

      <div className='flex justify-center items-center  flex-col h-screen'>
        <p className='text-9xl'>Tio Noviar</p>
        <p>Web Programmer</p>
      </div>
      <div className='h-full bg-slate-700 flex flex-col pb-20'>
        <h1 className='my-10 text-3xl text-center'>Portofolio</h1>
        <div className='flex justify-evenly'>
          <div className='w-52 h-52 bg-slate-950'>

          </div>
          <div className='w-52 h-52 bg-slate-950'>

          </div>
          <div className='w-52 h-52 bg-slate-950'>

          </div>
        </div>
      </div>
      <div className=' h-screen'>
        <p className='text-center py-10 text-3xl'>Skill</p>
        <div className='flex justify-center'>
          <p>Gaada euy</p>


        </div>
      </div>
    </>
  )
}

export default Page