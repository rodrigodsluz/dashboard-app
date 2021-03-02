import { AxiosRequestConfig } from 'axios';

import { TOKEN } from '../token';

const URL = 'https://services.altu.com.br/outbound/prod/rcs/d1/1';

const createCardReady = (
  mobile: string,
  title: string,
  description: string,
  urlImage: string,
  action: string
) => {
  return {
    destination: mobile,
    hsmToBeSent: {
      contentMessage: {
        richCard: {
          standaloneCard: {
            thumbnailImageAlignment: 'LEFT',
            cardOrientation: 'VERTICAL',
            cardContent: {
              title,
              description,
              media: {
                height: 'TALL',
                contentInfo: {
                  fileUrl: urlImage,
                  forceRefresh: 'false',
                },
              },
              suggestions: [
                {
                  reply: {
                    text: action,
                    postbackData: 'suggestion_1',
                  },
                },
              ],
            },
          },
        },
      },
    },
    restartContact: false,
  };
};

const createCard = (
  mobile: string,
  title: string,
  description: string,
  urlImage: string,
  action: string,
  position: string,
  layout: string
) => {
  return {
    destination: mobile,
    hsmToBeSent: {
      contentMessage: {
        richCard: {
          standaloneCard: {
            thumbnailImageAlignment: position,
            cardOrientation: layout,
            cardContent: {
              title,
              description,
              media: {
                height: 'MEDIUM',
                contentInfo: {
                  fileUrl: urlImage,
                  forceRefresh: 'false',
                },
              },
              suggestions: [
                {
                  reply: {
                    text: action,
                    postbackData: 'suggestion_1',
                  },
                },
              ],
            },
          },
        },
      },
    },
    restartContact: false,
  };
};

/**
 * @export
 * @function
 * @name createPayload
 *
 * @description
 * Responsável por criar o payload do login.
 */
export const createPayload = (
  mobile: string,
  title: string,
  description: string,
  urlImage: string,
  action: string,
  type: string,
  position: string,
  layout: string
): AxiosRequestConfig => {
  const dataPayload =
    type === 'READY'
      ? createCardReady(mobile, title, description, urlImage, action)
      : createCard(
          mobile,
          title,
          description,
          urlImage,
          action,
          position,
          layout
        );

  return {
    method: 'POST',
    url: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    data: dataPayload,
  };
};
