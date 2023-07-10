import { ReactNode } from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import RdsFieldStyles from './RdsField.styles';

export interface RdsOptionProps {
  key: string;
  icon?: JSX.Element;
  primary?: ReactNode;
  secondary?: ReactNode;
  hidden?: boolean;
  subheader?: string;
  avatar?: string;
  selected?: boolean;
}

export default interface RdsFieldProps extends WithStyles<typeof RdsFieldStyles> {
  /**
   * Name.
   */
  name: string;
  /**
   * Label.
   */
  label?: string;
  /**
   * Helper text.
   */
  helperText?: string | ReactNode;
  /**
   * Hide helperText.
   */
  hideHelperText?: boolean;
  /**
   * Margin. Default is 0.
   */
  margin?: string | number;
  /**
   * Width. Default is initial.
   */
  width?: string;
  /**
   * Dense.
   */
  dense?: boolean;
  /**
   * Disabled.
   */
  disabled?: boolean;
  /**
   * Required.
   */
  required?: boolean;
  /**
   * Input type. Default is text.
   */
  type?: 'text' | 'number' | 'file' | 'password' | 'tel' | 'email';
  /**
   * If type file, choose the accept extensions.
   */
  accept?: string;
  /**
   * Datepicker.
   */
  datepicker?: boolean;
  /**
   * Min date.
   */
  minDate?: Date;
  /**
   * Timepicker.
   */
  timepicker?: boolean;
  /**
   * Multiline.
   */
  multiline?: boolean;
  /**
   * Max rows. Default is 4.
   */
  maxRows?: string | number;
  /**
   * Min rows. Default is 4.
   */
  minRows?: string | number;
  /**
   * Min when type is number. Default is 0;
   */
  min?: number;
  /**
   * Select;
   */
  select?: boolean;
  /**
   * Select options. Default is [].
   */
  options?: RdsOptionProps[];
  /**
   * Selected attribute. Default is key.
   */
  selectedKey?: string;
  /**
   * Selected label. Default is primary.
   */
  selectedLabel?: string;
  /**
   * Multiple items.
   */
  multiple?: boolean;
  /**
   * Placeholder. If select default is Search...
   */
  placeholder?: string;
  /**
   * Not found text. Default is Not found results.
   */
  notFoundText?: string;
  /**
   * Hide selected label.
   */
  hideSelectedLabel?: boolean;
  /**
   * On option selected.
   */
  onOptionSelected?: (option: RdsOptionProps) => void;
  /**
   * On search.
   */
  onSearch?: (query: string) => void;
  /**
   * On file loaded.
   */
  onFileLoaded?: (value?: { data: string | ArrayBuffer | null | undefined; type: string }) => void;
  /**
   * Search delay. Default is 520
   */
  searchDelay?: number;
  /**
   * Loading.
   */
  loading?: boolean;
  /**
   * Currency.;
   */
  currency?: 'BRL' | 'USD';
}
