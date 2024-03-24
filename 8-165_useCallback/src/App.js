import {useState, useCallback, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';

const Slider = (props) => {

	const [slide, setSlider] = useState(0);
	const [autoPlay, setAutoplay] = useState(false);

	const getSomeImages = useCallback(() => {
		console.log('fetching')
		return [
			'https://w0.peakpx.com/wallpaper/46/252/HD-wallpaper-mooncat-beauty-moon-cat-abstract.jpg',
			'https://c4.wallpaperflare.com/wallpaper/24/156/945/full-moon-cat-wallpaper-preview.jpg'
		]
	}, [])

	function changeSlide(i) {
		setSlider(slide => slide + i);
	}

	function toggleAutoplay() {
		setAutoplay(autoPlay => !autoPlay);
	}

	return (
		<Container>
			<div className="slider w-50 m-auto">
				{/* {
					getSomeImages().map((url, i) => {
						return (
							<img key={i} className="d-block w-100" src={url} alt="slide" />
						)
					})
				} */}

				<Slide getSomeImages={getSomeImages}/>

				<div className="text-center mt-5">Active slide {slide} <br/>{autoPlay ? 'auto' : null}</div>
				<div className="buttons mt-3">
					<button 
						className="btn btn-primary me-2"
						onClick={() => changeSlide(-1)}>-1</button>
					<button 
						className="btn btn-primary me-2"
						onClick={() => changeSlide(1)}>+1</button>
					<button 
						className="btn btn-primary me-2"
						onClick={toggleAutoplay}>toggle autoplay</button>
				</div>
			</div>
		</Container>
	)
}

const Slide = ({getSomeImages}) => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		setImages(getSomeImages())
	}, [getSomeImages])

	return (
		<>
			{images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
		</>
	)
}

function App() {
	const [slider, setSlider] = useState(true);
	
	return (
		<>
			<button onClick={() => setSlider(false)}>Click</button>
			{slider ? <Slider/> : null}
		</>
	);
}

export default App;