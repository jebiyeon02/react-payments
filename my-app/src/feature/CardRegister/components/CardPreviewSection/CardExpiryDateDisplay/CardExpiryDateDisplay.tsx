const CardExpiryDateDisplay = ({expiryMonth, expiryYear}: {expiryMonth: string; expiryYear: string}) => {
  let delimiter = '';
  if (expiryMonth.length === 2 || expiryYear.length === 2) {
    delimiter = '/';
  }
  return (
    <div>
      {expiryMonth}
      {delimiter}
      {expiryYear}
    </div>
  );
};

export default CardExpiryDateDisplay;
