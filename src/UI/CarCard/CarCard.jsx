import { Card } from "react-bootstrap";
import "./CarCard.css";

function CarCard({ car }) {
	return (
		<Card className="custom-card p-2">
			<Card.Img variant="top" src={"/"+car.img} style={{ borderRadius: "1.3em" }} />

			<div className="px-3">
				<div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
					<Card.Title
						className="text-uppercase m-0 mb-4 w-75"
						style={{ fontSize: "1.5em", textOverflow: "ellipsis" }}
					>
						{car.brand} {car.model}
					</Card.Title>
					<div className="year mb-4">{car.year}</div>
				</div>

				<div className="d-flex flex-wrap">
					<div className="d-flex w-100 flex-wrap">
						<div className="d-flex w-50 me-auto pe-3">
							<span
								className="material-icons-outlined me-2"
								style={{ color: "#3b97e8" }}
							>
								group
							</span>
							<span className="text-capitalize" style={{ fontWeight: 500 }}>
								{car.features.seats} people
							</span>
						</div>

						<div className="w-50 d-flex mb-3 me-auto pe-3">
							<span
								className="material-icons-outlined me-2"
								style={{ color: "#3b97e8" }}
							>
								local_gas_station
							</span>
							<span className="text-capitalize" style={{ fontWeight: 500 }}>
								{car.features.fuel}
							</span>
						</div>
					</div>

					<div className="d-flex w-100 flex-wrap">
						<div className="d-flex w-50 mb-3 pe-3">
							<span
								className="material-icons-outlined me-2"
								style={{ color: "#3b97e8" }}
							>
								speed
							</span>
							<span className="text-capitalize" style={{ fontWeight: 500 }}>
								{car.features.average}km / 1-litre
							</span>
						</div>

						<div className="d-flex align-item-center w-50 mb-3 pe-3">
							{/* <span
								className="material-icons-outlined me-2"
								style={{ color: "#3b97e8" }}
							>
								timelapse
							</span> */}
							<img
								src="/icons/steering-wheel.svg"
								className="me-2"
								width={20}
								alt="Steering"
							/>
							<span className="text-capitalize" style={{ fontWeight: 500 }}>
								{car.features.handling}
							</span>
						</div>
					</div>
				</div>

				<div className="mt-auto d-flex flex-wrap align-items-center justify-content-between border-top mt-2 py-4">
					<div style={{ fontWeight: 500 }}>
						<span
							style={{
								fontSize: "1.9em",
								fontWeight: 500,
								color: "rgba(0,0,0,0.75)",
							}}
						>
							${car.rent}
						</span>{" "}
						/ month
					</div>

					<div className="d-flex">
						<button className="favorite-btn me-3">
							{/* <span className="material-icons-outlined">favorite</span> */}
							<img
								src="/icons/favorite.svg"
								style={{ color: "red" }}
								alt="Favorite"
							/>
						</button>

						<button className="btn rent-btn">Rent now</button>
					</div>
				</div>
			</div>
		</Card>
	);
}

export default CarCard;
