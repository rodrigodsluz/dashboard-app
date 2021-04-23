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
import Services from '../../services';
import { ModalContainer, UploadFile, File, CenterModal } from './styled';

export const UserModal = (): JSX.Element => {
  const { open, openModal, closeModal } = useContext(HomeDataContext);
  const [thumbnail, setThumbnail] = useState(null);
  const [image, setImagem] = useState(null);
  const [name, setName] = useState('');
  const [ocupation, setOcupation] = useState('');
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);
  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      let user = {
        name,
        ocupation,
        image: thumbnail,
      };
      let response = await Services.user.uploadUser(user);
      console.log(response);
    } catch (e) {
      throw e;
    }
    setLoading(false);
  }, [name, ocupation, thumbnail]);

  const handleClose = () => {
    closeModal();
  };

  useEffect(() => {
    getData();
  }, [loading]);

  useEffect(() => {
    getPhoto();
  }, [open]);

  const getData = useCallback(async () => {
    let { nome, ocupacao } = await Services.user.getUserData();
    setName(nome);
    setOcupation(ocupacao);
  }, [open]);

  console.log(thumbnail);
  const getPhoto = useCallback(async () => {
    let resPhoto = await Services.user.getUserPhoto();
    setImagem(resPhoto);
  }, [open]);

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
                : `url(${`data:image/jpeg;base64,${image}`})`,
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
              setName(target.value);
            }}
            value={name}
          />
          <Select
            value={ocupation}
            data={[
              { id: 'Área de atuação', name: 'Área de atuação' },
              { id: 'Visitante', name: 'Visitante' },
              { id: 'Suporte', name: 'Suporte' },
              { id: 'Processamento', name: 'Processamento' },
              { id: 'Implementação', name: 'Implementação' },
            ]}
            onChange={({ target }) => {
              setOcupation(target.value);
            }}
          />
          <Spacing vertical="10px" />
          <OutlineButton
            secondary
            handleClick={() => {}}
            loading={loading}
            onClick={async () => {
              await handleSubmit();
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
