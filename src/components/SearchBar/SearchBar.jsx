import { Stack, InputGroup, Form } from "react-bootstrap";
import "./SearchBar.css";
import { useDispatch } from "react-redux";

function SearchBar() {
	const setKeyword = useDispatch();
	return (
		<>
			<Stack
				gap={3}
				direction="horizontal"
				className="align-items-center py-3 px-4 custom-shadow"
				style={{
					borderRadius: "1em",
				}}
			>
				<InputGroup className="custom-search-box border-none rounded-pill">
					<Form.Control
						placeholder="Search..."
						className="px-3 py-2 shadow-none"
						onInput={(e) =>
							setKeyword({
								type: "SET_KEYWORD",
								payload: { keyword: e.target.value },
							})
						}
					/>
					<InputGroup.Text
						className="border-0"
						style={{ color: "rgba(0, 0, 0, 0.5)" }}
					>
						<span className="material-icons">search</span>
					</InputGroup.Text>
				</InputGroup>

				<Form.Select className="custom-select shadow-none">
					<option>Relevance</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>

				<Form.Select className="custom-select shadow-none">
					<option>All Brands</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</Form.Select>
			</Stack>
		</>
	);
}

export default SearchBar;
