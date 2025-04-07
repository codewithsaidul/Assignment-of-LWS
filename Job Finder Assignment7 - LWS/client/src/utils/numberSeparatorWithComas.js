export default function formatIndianNumber(num) {
  if (isNaN(num)) return "Invalid number";

  const [integerPart, decimalPart] = num.toString().split(".");

  const lastThreeDigits = integerPart.slice(-3);
  const otherDigits = integerPart.slice(0, -3);

  const formattedOtherDigits = otherDigits.replace(
    /\B(?=(\d{2})+(?!\d))/g,
    ","
  );

  const formattedNumber = otherDigits
    ? formattedOtherDigits + "," + lastThreeDigits
    : lastThreeDigits;

  return decimalPart ? formattedNumber + "." + decimalPart : formattedNumber;
}



