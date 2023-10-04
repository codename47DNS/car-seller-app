import { Stack, Pagination } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Paginate.css";
import { useEffect, useState } from "react";

function Paginate({ car }) {
	const [totalCars,setTotalCars] = useState(0);
	const pages = [1,2,3,4,5,6,7,8,9,10];
	const [currentPage,setCurrentPage] = useState(car.page_no);
	const navigate = useNavigate();

	useEffect(() => {
		setTotalCars(car.length);
		setCurrentPage(car.page_no);
		// eslint-disable-next-line
	},[car.page_no]);

	const handlePrevPage = () => {
		if (currentPage > 1) {
		  navigate("/page/"+(currentPage - 1));
		}
	
	};

	const handleNextPage = () => {
		const totalPages = 10;
	
		if (currentPage < totalPages) {
			navigate("/page/"+(currentPage + 1));
		}
	};


	return (
		<>
			<Stack
				gap={3}
				direction="horizontal"
				className="align-items-center justify-content-between py-3 px-4 custom-shadow"
				style={{
					borderRadius: "1em",
				}}
			>
				<div>
					{ car.showingCars } from { totalCars }
				</div>

				<Pagination className="m-0" style={{ border : "1px solid #fff" }}>
					<button className="paginate-btn icon" onClick={() => handlePrevPage()} disabled={ currentPage === 1 ? true : false }>
						<span className="material-icons-outlined">arrow_back</span>
					</button>
					{
						pages.map((item) => {
							return <Link key={item} to={"/page/"+item} className={"paginate-btn"+(currentPage === item ? " active" : "")}>{item}</Link>
						})
					}
					<button className="paginate-btn icon" onClick={() => handleNextPage()} disabled={ currentPage === 10 ? true : false }>
						<span className="material-icons-outlined">arrow_forward</span>
					</button>
				</Pagination>
			</Stack>
		</>
	);
}

export default Paginate;
