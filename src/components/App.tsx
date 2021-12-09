import React, { FC } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
// import { useDispatch } from 'react-redux';
// import { updateTextAC } from '../store/action-creators/example';
import Header from './Header';

const App: FC = () => {
    const {text} = useTypedSelector(state => state.example)
    const {updateTextAC} = useAction();
    // const dispatch = useDispatch();
    

    const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        // dispatch(updateTextAC(e.target.value))
        updateTextAC(e.target.value)
    }


    return (
        <div>
            <input value={text} onChange={updateText}/>

            <Header />

        </div>
    );
};

export default App;