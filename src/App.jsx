import "./App.css";
import { useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
// we can also import Home component like:
// import Home from "./pages/Home/index"
// JavaScript will automatically import it from index file if we do not provide a file name in import statement
import Products from "./pages/Products";

function App() {
	useEffect(() => {
		fetch("http://localhost:3000/")
			.then((res) => res.text())
			.then((data) => console.log(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/products">Products</Link>
					</li>
				</ul>
			</nav>
			{/* Defining routes below */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products" element={<Products />} />
			</Routes>
		</>
	);
}

export default App;
