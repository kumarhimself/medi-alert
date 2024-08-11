"use client";

export default function Button({ text }) {
	return (
		<button className="px-6 py-2 bg-primary text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
			{text}
		</button>
	);	
}
