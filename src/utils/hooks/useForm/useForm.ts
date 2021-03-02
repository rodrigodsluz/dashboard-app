import { ChangeEvent, FormEvent, useState } from 'react';

type Values = {
  login?: string;
  password?: string;
  name?: string;
  email?: string;
  cellphone?: string;
  comunicationId?: string;
};
/**
 * @export
 * @hook
 * @name useForm
 *
 * @description
 * Responsável por realizar ações de interação na página de formulário.
 */
export const useForm = (
  callback: () => void,
  initialState: Values,
  validate: () => unknown
) => {
  const [values, setValues] = useState<Values>(initialState);
  const [errors, setErrors] = useState<Values>(initialState);

  /**
   * @function
   * @name onChange
   *
   * @description
   * Função responsável por estabelecer os valores dos estados
   * de cada campo no formulário
   */
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  /**
   * @function
   * @name handleFocus
   *
   * @description
   * Função responsável por limpar o estado de erro ao tentar
   * corrigir cada campo.
   */
  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setErrors({ ...errors, [event.target.name]: '' });
  };

  /**
   * @function
   * @name cleanInput
   *
   * @description
   * Função responsável por limpar todos os campos no clique do botão
   */
  const cleanInput = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setErrors({});
    setValues(initialState);
  };

  /**
   * @function
   * @name onSubmit
   *
   * @description
   * Função responsável por realizar a validação e enviar os dados caso não existam erros.
   *  Se a validação resultar em erros as respectivas mensagens aparecerão em cada campo.
   */
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (Object.keys(validate()).length === 0) {
      callback();
      setValues(initialState);
    } else {
      setErrors(validate());
    }
  };

  return { onChange, onSubmit, handleFocus, errors, values, cleanInput };
};
