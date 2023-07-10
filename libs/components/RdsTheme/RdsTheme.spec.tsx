import React from 'react';
import { render, screen } from '@testing-library/react';
import RdsTheme from './RdsTheme';
import { Typography } from '@material-ui/core';

describe('<RdsTheme />', () => {
  test('should prop seed be Rds', () => {
    render(
      <RdsTheme seed="Rds">
        <Typography data-testid="rds-theme" color="primary">
          Test
        </Typography>
      </RdsTheme>
    );

    expect(screen.getByTestId('rds-theme').className).toContain('Rds-');
  });

  test('should prop theme has primary color', () => {
    render(
      <RdsTheme theme={{ palette: { primary: { main: '#888' } } }}>
        <Typography data-testid="rds-theme" color="primary">
          Test
        </Typography>
      </RdsTheme>
    );

    expect(screen.getByTestId('rds-theme').className).toContain('MuiTypography-colorPrimary');
  });
});
