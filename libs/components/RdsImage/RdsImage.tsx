import React, { FC } from 'react';
import { withStyles } from '@material-ui/core';
import RdsImageProps from './RdsImage.props';
import RdsImageStyles from './RdsImage.styles';

/**
 * [RdsImage Examples](https://diegoavieira.github.io/rdsystem/components/rds-image)
 */
const RdsImage: FC<RdsImageProps> = ({ classes, src, width, height, fit }) => {
  return (
    <img
      data-testid="rds-image"
      className={classes.root}
      src={src}
      alt=""
      style={{ width: width || 'auto', height: height || 'auto', objectFit: fit || 'contain' }}
    />
  );
};

export default withStyles(RdsImageStyles, { name: 'RdsImage' })(RdsImage);
