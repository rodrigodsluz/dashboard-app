import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Modal } from '@material-ui/core';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Input, OutlineButton, Select, Spacing } from '@d1.cx/components';
import { HomeDataContext } from '@src/context/HomeDataContext';
import Services from '../../services';
import { ModalContainer, UploadFile, File, CenterModal } from './styled';

export const UserModal = (): JSX.Element => {
  const {
    name,
    open,
    openModal,
    configureUsername,
    configureOcupation,
    ocupation,
    closeModal,
  } = useContext(HomeDataContext);
  const [thumbnail, setThumbnail] = useState(null);

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

  const handleSubmit = useCallback(async () => {
    try {
      let user = {
        name,
        ocupation,
      };
      let response = await Services.user.uploadUser(user);
    } catch (e) {
      throw e;
    }
  }, [name, ocupation]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal
      open={open}
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
                : 'url(https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png)',
            }}
          >
            <File
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </UploadFile>

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
              configureOcupation(target.value);
            }}
          />
          <Spacing vertical="10px" />
          <OutlineButton
            secondary
            handleClick={() => {}}
            onClick={() => {
              handleSubmit();
              openModal();
              setThumbnail(null);
            }}
          >
            Atualizar
          </OutlineButton>
        </ModalContainer>
      </CenterModal>
    </Modal>
  );
};
