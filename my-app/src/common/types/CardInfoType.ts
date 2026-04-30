export type CardInfoType = {
  cardNumbers: string[];
  expiryMonth: string;
  expiryYear: string;
};

export type CardInfoHandlersType = {
  setCardNumbers: (value: string[]) => void;
  setExpiryMonth: (value: string) => void;
  setExpiryYear: (value: string) => void;
};
