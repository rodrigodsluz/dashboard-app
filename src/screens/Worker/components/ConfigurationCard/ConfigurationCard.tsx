import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import { Theme, withStyles } from '@material-ui/core';
import { Typography } from '@d1.cx/components';
import { Tachometer, CcmCloud } from '@d1.cx/icons';
import { Container } from './style';
import { NONAME } from 'dns';
/**
 * @export
 * @component
 * @name LineHeader
 *
 * @description
 * Linha degrade exibida no começo de toda página
 */
const JOBS = 'Jobs Ativos';

const TooltipArrow = withStyles((theme: Theme) => ({
  arrow: {
    color: 'white',
  },
  tooltip: {
    backgroundColor: 'white',
    color: '#3E4157',
    fontWeight: 'bold',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(1),
    fontSize: '14px',
  },
}))(Tooltip);

type Type = {
  jobs?: Array<string>;
  status?: string;
  number?: number | string;
};
export const ConfigurationCard = ({
  jobs,
  status,
  number,
}: Type): JSX.Element => {
  return (
    <Container jobs={status === JOBS}>
      {status === JOBS ? (
        <TooltipArrow title={jobs} placement="left" arrow>
          <button
            style={{ background: '#fff', border: 'none', outline: 'none' }}
          >
            <Tachometer width="40px" color="#ea4335" />
          </button>
        </TooltipArrow>
      ) : (
        <CcmCloud width="40px" color="#34a853" />
      )}

      <Typography fontSize="16px">{status}</Typography>

      <Typography fontSize="25px" vertical="10px">
        {number}
      </Typography>
    </Container>
  );
};
