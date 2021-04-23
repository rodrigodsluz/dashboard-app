import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Modal } from '@material-ui/core';

import { Input, OutlineButton, Select, Spacing } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import { ModalContainer, UploadFile, File, CenterModal } from './styled';

export const CreateUserModal = (): JSX.Element => {
  const { openModal, closeModal } = useContext(HomeDataContext);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [ocupation, setOcupation] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImagem] = useState(null);
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const switchOcupation = useCallback(() => {
    switch (ocupation) {
      case 'Visitante':
        return '1';
      case 'Suporte':
        return '2';
      case 'Processamento':
        return '3';
      case 'Implementação':
        return '4';
      default:
        return '0';
    }
  }, [ocupation]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <CenterModal>
        <ModalContainer>
          <UploadFile
            style={{
              backgroundImage: preview
                ? `url(${preview})`
                : `url(${`data:image/jpeg;base64,${image}`})`,
            }}
          >
            <File
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </UploadFile>

          <Input
            placeholder="Nome"
            handleChange={({ target }) => {
              setName(target.value);
            }}
            value={name}
          />
          <Input
            placeholder="Nome de usuário"
            handleChange={({ target }) => {
              setUsername(target.value);
            }}
            value={username}
          />
          <Input
            placeholder="Senha"
            handleChange={({ target }) => {
              setPassword(target.value);
            }}
            value={password}
          />
          <Select
            value={role}
            data={[
              { id: '0', name: 'Permissão' },
              { id: '1', name: 'admin' },
            ]}
            onChange={({ target }) => {
              setRole(target.value);
            }}
          />
          <Spacing vertical="5px" />
          <Select
            value={ocupation}
            data={[
              { id: '0', name: 'Área de atuação' },
              { id: '1', name: 'Visitante' },
              { id: '2', name: 'Suporte' },
              { id: '3', name: 'Processamento' },
              { id: '4', name: 'Implementação' },
            ]}
            onChange={({ target }) => {
              setOcupation(target.value);
            }}
          />
          <Spacing vertical="10px" />
          <OutlineButton
            secondary
            handleClick={() => {}}
            onClick={() => {
              openModal();
              setThumbnail(null);
            }}
          >
            Criar usuário
          </OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
