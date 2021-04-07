import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  Input,
  Modal,
  OutlineButton,
  Select,
  Spacing,
} from '@d1.cx/components';
import { ModalContainer, Image, UploadFile, File } from './styled';
import { HomeDataContext } from '@src/context/HomeDataContext';

export const UserModal = (): JSX.Element => {
  const {
    name,
    open,
    openModal,
    urlImg,
    configureUsername,
    configureOcupation,
    ocupation,
  } = useContext(HomeDataContext);
  const [thumbnail, setThumbnail] = useState(null);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  console.log(ocupation);
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

  return (
    <Modal open={open} title="Atualizar informações">
      <ModalContainer>
        {urlImg ? (
          <Image src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        ) : (
          <UploadFile style={{ backgroundImage: `url(${preview})` }}>
            <File
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </UploadFile>
        )}

        <Input
          placeholder="Atualizar nome"
          handleChange={({ target }) => {
            configureUsername(target.value);
          }}
          value={name}
        />
        <Select
          value={switchOcupation()}
          data={[
            { id: '0', name: 'Área de atuação' },
            { id: '1', name: 'Visitante' },
            { id: '2', name: 'Suporte' },
            { id: '3', name: 'Processamento' },
            { id: '4', name: 'Implementação' },
          ]}
          onChange={({ target }) => {
            console.log(target.value);
            configureOcupation(target.value);
          }}
        />
        <Spacing vertical="10px" />
        <OutlineButton
          secondary
          handleClick={() => {}}
          onClick={() => {
            openModal();
          }}
        >
          Atualizar
        </OutlineButton>
      </ModalContainer>
    </Modal>
  );
};

export default UserModal;
