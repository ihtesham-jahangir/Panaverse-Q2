##Flex-Demo

    < div className='h-screen w-screen bg-gray-300 flex justify-center items-center  '>
      <div className='p-6 flex   flex-col   h-[350px] w-[350px] bg-blue-300 shadow-sm rounded-md gap-4'>
      <div className='font-extrabold text-black  text-2xl' >Some Text</div>
      <div className='font-light '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, id veritatis reprehenderit quibusdam necessitatibus dicta modi, facilis nulla accusamus impedit, similique sit eum numquam!
        </div>
        <div className=' flex justify-between '>
        <button className='p-2 m-4  bg-white rounded-md hover:bg-black' >Next</button>
        <button className='p-2 m-4 bg-white rounded-md hover:bg-black hover:rounded-xl hover:text-red-400'>Previous</button>

         </div>

      </div>
    </div>

    ##Flex Wrap

    <div>
    <div className="flex gap-6 flex-wrap ">
      <div className="bg-red-400 w-[200px] h-[200px]  ">
        <div className="bg-blue-400 w-[100px] h-[100px]">
          <Image src="/src/images/1.png" width={200} height={200}  alt="" />

        </div>
      </div>
      <div className="bg-red-400 w-[200px] h-[200px]">
        <div className="bg-blue-400 w-[100px] h-[100px]">
        <Image src="/src/images/1.png" width={200} height={200} alt="" />

        </div>
      </div>
      <div className="bg-red-400 w-[200px] h-[200px]">
      <div className="bg-blue-400 w-[100px] h-[100px]">
        <Image src="/src/images/1.png" width={200} height={200} alt="" />
      </div>

      </div>
    </div>

    </div>
