import React, { useState, useEffect, useReducer } from 'react';
import TodoList from './TodoList';
import {Context} from './context';
import reducer from './reducer';
import Parallax from './Parallax';
import ThreeJs from './ThreeJS';
import Sign from './Sign';

const SocailNetworkProj = {
  description: `
    Technology used: React, Redux, React Router, Redux Thunk, Redux Form, HTML5, CSS3.
    If you do not want to register, you can use my
    test login: aleksandrov7296@gmail.com and password: grizzman`,
  sign: 'Social Network',
  img: 'assets/proj1.png',
  link: 'https://aleksandrovfe.github.io/socialnetwork/#/socialnetwork/profile',
  codeLink: 'https://github.com/aleksandrovfe/socialnetwork',
}

const PresentationPageProj = {
  description: `Technology used: JS, HTML5, CSS3.`,
  sign: 'Presentation Page',
  img: 'assets/proj2.png',
  link: 'https://aleksandrovfe.github.io/pattern/',
  codeLink: 'https://github.com/aleksandrovfe/pattern',
}

const PhoneCatalogProj = {
  description: `Technology used: React, React Router, HTML5, CSS3.`,
  sign: 'Phone Catalog',
  img: 'assets/proj3.png',
  link: 'https://aleksandrovfe.github.io/react_phone-catalog/#/',
  codeLink: 'https://github.com/mate-academy/react_phone-catalog/pull/12/files',
}

const TodoAppProject = {
  description: `Technology used: React, React Router, HTML5, CSS3.`,
  sign: 'Todo app',
  img: 'assets/proj4.png',
  link: 'https://aleksandrovfe.github.io/react_todo-app/#/',
  codeLink: 'https://github.com/aleksandrovfe/uber_eats/pull/7/files',
}

export default function App() {
  // const [state, dispatch] = useReducer(reducer, JSON.parse(
  //   localStorage.getItem('todos')));
  // const [todoTitle, setTodoTitle] = useState('');
  
  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(state));
  // }, [state]);
   
  // const addTodo = event => {
  //   if (event.key === 'Enter') {
  //     dispatch({
  //       type: 'add',
  //       payload: todoTitle,
  //     })
  //     setTodoTitle('');
  //   }
  // };

  return (
    <Context.Provider >
      {/* <div className="container"> */}
        {/* <h1>Todo app</h1>

          <div className="input-field">
            <input 
              type="text" 
              value={todoTitle}
              onChange={event => setTodoTitle(event.target.value)}
              onKeyPress={addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={state} /> */}
      {/* </div> */}
      {/* <Parallax /> */}
      <div className="app">
        <Sign />
        <div className="container">
          <ThreeJs codeLink={SocailNetworkProj.codeLink} sign={SocailNetworkProj.sign} link={SocailNetworkProj.link} description={SocailNetworkProj.description} img={SocailNetworkProj.img}/>
          <ThreeJs codeLink={PresentationPageProj.codeLink} sign={PresentationPageProj.sign} link={PresentationPageProj.link} description={PresentationPageProj.description} img={PresentationPageProj.img}/>
          <ThreeJs codeLink={PhoneCatalogProj.codeLink} sign={PhoneCatalogProj.sign} link={PhoneCatalogProj.link} description={PhoneCatalogProj.description} img={PhoneCatalogProj.img}/>
          <ThreeJs codeLink={TodoAppProject.codeLink} sign={TodoAppProject.sign} link={TodoAppProject.link} description={TodoAppProject.description} img={TodoAppProject.img}/>
        </div>
      </div>
      
    </Context.Provider>
  );
}