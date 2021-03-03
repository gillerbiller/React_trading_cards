class TradingCard extneds React.Compnent{
  render() {
  return (
    <div className="card">
      <p>Name: {this.props.name}</p>)
  }
}

class TradingCardContainer extends React.Component {
  constructor (){
    super();

    this.state = { cards: [] };
    this.updateCards = this.updateCards.bind(this);
  }

  updateCards() {
    const floatCard = {
      name: 'Float',
      skill: 'Baking Pretzels',
      imgUrl: '/static/img/float.jpg'
    };

    this.setState({
      cards: [floatCard]
    });
  }

  componentDidMount() {
    this.upateCards();
  }

  render() {
    const tradingCards = [];

    for (const currentCard of this.state.cards) {
      tradingCards.push(
        <TradingCard
          key={currentCard.name}
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div{tradingCards}</div>
    );
  }
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
