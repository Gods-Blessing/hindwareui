export const numberWithCommasCustom = (number:any) => {
    if(number){
      return number.toLocaleString('en-IN', { style: 'decimal' });
    }

    return '-';
  };

