// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "material-icons/iconfont/material-icons.css";

// Components
import SearchBar from "./components/SearchBar/SearchBar";
import CardsSection from "./components/CardsSection/CardsSection";
import Redirect from "./components/Redirect/Redirect";

// Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

function App() {
	const reducer = (state,action) => {
		if(action.type === "SET_KEYWORD")
		return {keyword : action.payload.keyword };

		else
		return {
			keyword : ""
		}
	}

	const store = createStore(reducer,null);



	return (
		<div className="p-3">
			<Provider store={store}>
				<SearchBar />
				<Router>
					<Routes>
						<Route path="*" element={<Redirect />} />
						<Route path="page/:page_no" element={<CardsSection />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
