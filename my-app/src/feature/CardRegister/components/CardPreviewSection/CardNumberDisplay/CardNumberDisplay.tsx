const CardNumberDisplay = ({cardNumbers}: {cardNumbers: string[]}) => {
  return (
    <div>
      {cardNumbers.map((chunk, index) => {
        if (index >= 2) {
          return <div>{'·'.repeat(chunk.length)}</div>;
        }
        return <div>{chunk}</div>;
      })}
    </div>
  );
};

export default CardNumberDisplay;
