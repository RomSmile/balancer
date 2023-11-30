import dayjs from 'dayjs';

export const getCurrencyValue = async (): Promise<{ usd: number; eur: number }> => {
  const today = dayjs().format('YYYYMMDD');

  const usdResponse = await fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&date=${today}&json`,
  );
  const usd = await usdResponse.json();

  const eurResponse = await fetch(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=EUR&date=${today}&json`,
  );

  const eur = await eurResponse.json();

  return {
    eur: eur[0].rate,
    usd: usd[0].rate,
  };
};
