import React from 'react';
import './App.css';

function Header() {
  const [search, setSearch] = React.useState('')
  function submit(e) {
    e.preventDefault()
    console.log(search)
    setSearch('')
  }
  return (
    <header>
      <h2>
        <a href="/">Mon site</a>
      </h2>
      <p>
        loremipsum {search}
      </p>
      <form onSubmitCapture={submit}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          />
      </form>
    </header>
  )
}

function Row(props) {
  return (
    <div>
      {props.text}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Row text="yeahhhhhhh" />
        <Row text="yeahhhhhhhh" />
        <Row text="yeahhhhhhhhh" />
      </main>
    </div>
  );
}

export default App;
