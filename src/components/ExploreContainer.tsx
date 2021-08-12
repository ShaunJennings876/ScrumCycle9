import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>This is Shaun's Ionic App</strong>
      <p>I really didn't know what to put on the home page so here is a funny picture of a dog</p>
      <img className = "good-boy" src="assets/good-boy.jpeg" alt="Man i really hope this is showing right now" />
      <p>(See More tabs in the top right corner)</p>
    </div>
  );
};

export default ExploreContainer;
