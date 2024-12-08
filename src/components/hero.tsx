import Image from "next/image"

export default function Hero(){
    return(
        <div>

    <div className="min-h-screen bg-black text-white">
      {/* About Us Section */}
      <section className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-10">
        <div className="lg:w-1/2">
         <Image src={'/images/787.png'} alt=';;;' width={88} height={40}/>
          <h1 className="text-6xl font-bold mb-4 ">
            We Create the best <span className="text-yellow-400">foody product</span>
          </h1>
          <p className="text-gray-300 mb-16 mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui 
            volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium.
          </p>
          <ul className="list-none space-y-2 text-gray-300">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span> Lacus nisi, et ac dapibus sit eu velit in consequat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span> Quisque diam pellentesque bibendum non dui volutpat.
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">✔</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ul>
          <button className="mt-14 px-6 py-3 bg-amber-500   hover:bg-yellow-500 rounded-full text-white h-16 w-40 ">
            Read More
          </button>
        </div>
        {/* Images */}
        <div className="grid grid-cols-2 gap-4 mt-10 ">
          <img
            src="/images/oo.png"
            alt="Food 1"
            className="rounded-lg w-[675px] h-[300px] absolute right-14 -mt-72 "
          />
          <img
            src="/images/222.png"
            alt="Food 2"
            className="rounded-lg absolute right-[410px] mt-5"/>
          <img
            src="/images/112.png"
            alt="Food 3"
            className="rounded-lg absolute right-16 mt-5 "
          />
      
         
        </div>
      </section>

     
    </div>

 <div className="bg-black p-4 font-sans py-36 -ml-80">
      <div className="max-w-5xl max-lg:max-w-3xl max-md:max-w-md mx-auto">
        <Image src={'/images/Food Category.png'} alt={'..'} width={177} height={40} className='ml-[580px]'/>
        <h2 className="text-5xl font-bold text-white flex justify-center ml-72">Choose Food Iteam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="/images/0909 (2).png" alt="Blog Post 3" className="w-full  object-cover group-hover:scale-125 transition-all duration-300" />
            </div>
          </div>
          <div className=" cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="/images/0909 (1).png" alt="Blog Post 3" className="w-full  object-cover group-hover:scale-125 transition-all duration-300" />

            </div>
           
          </div>
          <div className=" cursor-pointer rounded-md overflow-hidden group">
            <div className="relative overflow-hidden">
              <img src="/images/0909 (4).png" alt="Blog Post 3" className="w-full object-cover group-hover:scale-125 transition-all duration-300" />

            </div>
         
          </div>
          <div className="absolute left-[1140px]" >
          <div className=" cursor-pointer rounded-md overflow-hidden group ">
            <div className="relative overflow-hidden">
              <img src="/images/0909 (3).png" alt="Blog Post 1" className="w-full h-[350px]  object-cover group-hover:scale-125 transition-all duration-300" />
            
            </div>
           
          </div>
          </div>
           <div>
                   

          </div>
        </div>
      </div>
      </div>
     </div>

    //     </div>
    )
}