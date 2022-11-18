import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { add_TODO, delete_TODO, fetchData } from './redux/action';
import './App.css';

function App() {
	const [text, setText] = useState('');
	const listState = useSelector((state) => state.toDoList);
	const resData = useSelector((state) => state.res);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<input
				type="text"
				onChange={(e) => {
					setText(e.target.value);
				}}
			/>
			<button type="button" onClick={() => dispatch(add_TODO(text))}>
				Add Note
			</button>
			{listState.map((item) => (
				<>
					{' '}
					<p>{item}</p>
					<button type="button" onClick={() => dispatch(delete_TODO(item))}>
						Delete
					</button>
					<button type="button" onClick={() => dispatch(fetchData())}>
						Fetch
					</button>
					<p>
						Products:{' '}
						{resData.map((res) => (
							<>{resData.title}</>
						))}
					</p>
				</>
			))}
		</div>
	);
}

export default App;
