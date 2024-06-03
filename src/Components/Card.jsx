import React from 'react';

function Card() {
  const data=[
    {image:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww',name:"Amazon Basics",description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti consectetur labore et.",instock:true},
    { image:'https://images.unsplash.com/photo-1541562232579-512a21360020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1lfGVufDB8fDB8fHww', name:"Anime Hentai",description:"Lorem ipsum, dolor sit amet consectet",instock:true},
    {image:'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWl8ZW58MHx8MHx8fDA%3D',name:'Artificial Intelligence',description:"so that ai will be powerful but we need to sure to not get in control of it we need to workd upon ourselves so that these machince cannot overpower humans in terms of intelligence and power",instock:false
    }
  ]
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
    {data.map((value,index)=>( <div key= {index} className=" w-52 bg-green-200 rounded-md overflow-hidden">
      <div className="  w-full h-32">
        <img className="w-full h-full object-cover" src={value.image}/>
      </div>
      <div className=" w-full px-3 py-2"> 
      <h2 className='font-semibold'>{value.name}</h2>
      <p className='text-sm px-3 py-5'>{value.description}</p>
      <button className={`px-4 py-2 ${value.instock ? 'bg-blue-600':'bg-red-600'} text-xs rounded font-bold text-zinc-100`}>
        
        {value.instock?"In Stock":'Out of Stock'}</button>
      </div>
      
     </div>))}
     
      </div>
  )
}

export default Card;
