import { useState } from 'react'
import './App.css'
import axios from "axios";
import './index.css';
import { Heart } from "lucide-react";

function App() {
	const [ advices, setAdvices ] = useState({});

	const handleAdviceFetching = async () => {
		const response = await axios.get("https://api.adviceslip.com/advice");
		setAdvices(response.data.slip);
	}

	console.log(advices);

	return (
		<section className="flex flex-col items-center justify-center w-full h-screen">
			<div className="flex flex-col items-center gap-4 justify-center mt-10">
				<h1 className="text-4xl font-semibold text-slate-700">Random Advice Generator</h1>
				<p className='text-xl font-medium text-green-700'>Press on the button to see the new advice...</p>
			</div>
			<div className="bg-gray-800 flex flex-col items-center justify-center w-[60%] md:w-[50%] lg:w-[40%] gap-10 p-14 rounded-2xl m-32">
				<h1 className='text-green-400 text-xl font-bold'>Advice #{advices.id || "1"}</h1>
				<div className='flex items-center justify-center w-[100%] md:w-[80%]'>
					<h1 className='font-semibold text-center text-2xl text-white'>"{advices.advice || `It is easy to sit up and take notice, what's difficult is getting up and taking action.`}"</h1>
				</div>
				<svg width="295" height="16" className='realtive top-10' xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path className='fill-white stroke-2' fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>				
				<button onClick={handleAdviceFetching} className='relative top-20 rounded-full bg-green-400 border-transparent p-5'>
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
				</button>
			</div>
			<div className='flex items-center justify-center relative bottom-14'>
				<h1 className='flex gap-3 text-xl items-center justify-center'>Made with <Heart className='fill-red-900' /> by <a href="https://www.linkedin.com/in/nirajjha31/" className="text-sky-800 underline hover:scale-110 transition-all duration-500">Niraj Kumar Jha</a></h1>
			</div>
		</section>
	)
}

export default App
