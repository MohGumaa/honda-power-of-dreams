import Home from './pages/Home/Home';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

const App = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen">
				<Home />
			</main>
			<Footer />
		</>
	);
};

export default App;
