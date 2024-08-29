import fs from 'fs/promises';
import path from 'path';

async function getData() {
  const filePath = path.join(process.cwd(), 'src/data', 'post.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
return JSON.parse(jsonData)
}

export default async function Home() {
  const items = await getData();

  return (
    <div>
      <h1  className='text-center uppercase text-gray-200 font-extrabold text-3xl'>Items List</h1>
      <ul className='grid grid-cols-2 gap-2 px-4 mt-6 w-2/3 mx-auto'>
        {items.map((item) => (
          <li key={item.id} className=' bg-gray-black py-4 text-center rounded-md border-2 border-solid border-white'>
            <h2 className='text-white uppercase font-bold'>{item.name}</h2>
            <p className='text-slate-300'>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}