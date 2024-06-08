const App = () => {
  return (
    <div>
      <Person age={17} />
      <Person age={18} />
      <Person age={19} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
