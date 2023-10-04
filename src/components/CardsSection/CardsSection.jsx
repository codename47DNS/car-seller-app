import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cars from "../../JSON/Cars.json";
import CarCard from "../../UI/CarCard/CarCard";
import Paginate from "../Paginate/Paginate";
import { useSelector } from "react-redux";

function CardsSection() {
	const { page_no } = useParams();
	const [pNo, setPNo] = useState(1);
	const [startIndex, setStartIndex] = useState(0);
	const [endIndex, setEndIndex] = useState(5);
	const [data, setData] = useState([]);
	const keyword = useSelector((keyword) => keyword.keyword);

	function fetchData() {
		if (keyword === "") {
			let arr = [];
			for (let i = startIndex; i <= endIndex; i++) {
				if (!cars[i]) break;

				arr.push(cars[i]);
			}

			setData(arr);
		}
	}

	useEffect(() => {
		if (page_no) setPNo(page_no);
	}, [page_no]);

	useEffect(() => {
		setStartIndex(pNo * 6 - 6);
		setEndIndex(pNo * 6 - 1);
	}, [pNo]);

	useEffect(() => {
		fetchData();

		// eslint-disable-next-line
	}, [startIndex]);

	useEffect(() => {
		if (keyword !== "") {
			let arr = [];

			cars.forEach((item) => {
				let name = item.brand + " " + item.model;

				if (name.match(new RegExp(keyword, "ig"))) arr.push(item);
			});

			setData(arr);
		} else fetchData();

		//eslint-disable-next-line
	}, [keyword]);

	const gridCon = {
		display: "grid",
		gridTemplateRows: "repeat(2,1fr)",
		gridTemplateColumns: "repeat(3,1fr)",
		columnGap: "1.8em",
		rowGap: "1.9em",
	};

	return (
		<>
			<div style={gridCon} className="py-5">
				{data.map((item, i) => {
					return <CarCard key={i} car={item}></CarCard>;
				})}
			</div>

			{keyword === "" ? (
				<Paginate
					car={{
						showingCars: data.length,
						length: cars.length,
						page_no : Number(page_no)
					}}
				></Paginate>
			) : null}
		</>
	);
}

export default CardsSection;
