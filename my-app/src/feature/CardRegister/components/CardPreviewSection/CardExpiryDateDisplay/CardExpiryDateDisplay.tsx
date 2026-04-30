const CardExpiryDateDisplay = ({expiryMonth, expiryYear}: {expiryMonth: string; expiryYear: string}) => {
  return (
    <div>
      {expiryMonth}/{expiryYear}
    </div>
  );
};

export default CardExpiryDateDisplay;
