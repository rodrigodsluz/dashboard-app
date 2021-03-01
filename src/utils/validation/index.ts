export function checkEmailValid(value: string): boolean {
  if (value.length > 0) {
    const exclude = /[^@\-\\.\w]|^[_@\\.\\-]|[\\._\\-]{2}|[@\\.]{2}|(@)[^@]*\1/;
    const check = /@[\w\\-]+\./;
    const checkend = /\.[a-zA-Z]{2,3}$/;
    if (
      value.search(exclude) !== -1 ||
      value.search(check) === -1 ||
      value.search(checkend) === -1
    ) {
      return false;
    }
    return true;
  }
  return false;
}

export function checkEmpty(value: string): boolean {
  const valeuInput = value.trim();
  if (valeuInput.length === 0) {
    return true;
  }
  return false;
}

export function checkRangeMin(value: string, min: number): boolean {
  return !(value.length > 1 && value.length >= min);
}

export const clear = (value: string) => {
  const emptyMask = value.replace(/[\\[\].!'@,><|://\\;&*()_+=-]/g, '');
  return emptyMask.replace(/\.|\\-|\/|[()]|\W+/g, '');
};

export const setMaskMobile = (value: string): string => {
  const array = value.split('');
  if (array.length > 2) {
    array.splice(0, 0, '(');
    array.splice(3, 0, ')');
    array.splice(4, 0, ' ');
  }
  if (array.length > 10) {
    array.splice(10, 0, '-');
  }
  return array.join('');
};
