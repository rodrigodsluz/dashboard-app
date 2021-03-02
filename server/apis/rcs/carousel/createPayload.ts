import { AxiosRequestConfig } from 'axios';

import { TOKEN } from '../token';

const URL = 'https://services.altu.com.br/outbound/prod/rcs/d1/1';
type ModeType = {
  urlImg: string;
  title: string;
  description: string;
  action: string;
};

const createCarousel = (mobile: string, cards: Array<ModeType>) => {
  const newCards = cards.map((item) => {
    return {
      title: item.title,
      description: item.description,
      media: {
        height: 'SHORT',
        contentInfo: {
          fileUrl: item.urlImg,
          forceRefresh: false,
        },
      },
      suggestions: [
        {
          action: {
            text: 'Download',
            postbackData: 'postback_data_1234',
            openUrlAction: {
              url: 'http:/d1.click/l3dXic',
            },
          },
        },
      ],
    };
  });

  return {
    destination: mobile,
    hsmToBeSent: {
      contentMessage: {
        richCard: {
          carouselCard: {
            cardWidth: 'MEDIUM',
            cardContents: newCards,
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
  cards: Array<ModeType>
): AxiosRequestConfig => {
  return {
    method: 'POST',
    url: URL,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: TOKEN,
    },
    data: createCarousel(mobile, cards),
  };
};
