export const computePercentage = (value, total) => {
    if (value === 0 || total === 0) {
      return 0;
    }
    return Math.round((value / total) * 100);
  };
  