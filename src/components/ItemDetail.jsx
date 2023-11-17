import { useParams } from "react-router-dom";

const Item = ({titulo,imagen,precio}) => {
	
	return (
		<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h5 className="text-xl ml-4 font-semibold tracking-tight text-gray-900 dark:text-white">{titulo}</h5>
			<img className="p-8 rounded" src={imagen} alt="product image" />
			{/* <div className="px-5 pb-5">
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">${precio}</span>
					<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
				</div>
			</div> */}
		</div>

	)
}


export default Item