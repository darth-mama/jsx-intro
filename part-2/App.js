const App = (props) => {
  return (
    <div>
      <Tweet
        username="KB"
        name="Kobe"
        date="06/07/24"
        message="Mamba Mentality"
      />
      <Tweet
        username="LD"
        name="Luka"
        date="06/07/24"
        message="You can't guard me!"
      />
      <Tweet
        username="Kai"
        name="Kyrie"
        date="06/07/24"
        message="Youngbloods"
      />
    </div>
  );
};
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
