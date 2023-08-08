import { Reset } from 'styled-reset';
import './App.scss';
import Button from './components/Button';
import ButtonSelect from './components/ButtonSelect';
import Img from './assets/images/arrow-right.svg';
import Paging from './components/Paging';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <Button img={Img} content={'더보기'} type={'acting'} />
			<ButtonSelect>
				<option value="hi">jdddddddo</option>
				<option value="hi">jo</option>
				<option value="hi">jo</option>
			</ButtonSelect> */}
			<Paging />
		</div>
	);
}

export default App;
