import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import {
  withStyles,
  TextField,
  Theme,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  createStyles,
  makeStyles,
  Checkbox,
  Chip,
  CircularProgress,
  Popper,
  PopperProps,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import {
  AccessTimeOutlined as AccessTimeOutlinedIcon,
  EventOutlined as EventOutlinedIcon,
  CloseOutlined as CloseOutlinedIcon,
  CloudUploadOutlined as CloudUploadOutlinedIcon
} from '@material-ui/icons';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useField } from 'formik';
import RdsFieldProps, { RdsOptionProps } from './RdsField.props';
import RdsFieldStyles from './RdsField.styles';
import NumberFormat from 'react-number-format';

const OutlinedInputStyled = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '&:hover $notchedOutline, &$focused $notchedOutline, &$error $notchedOutline, &$disabled $notchedOutline': {
          borderColor: theme.palette.divider,
          borderWidth: 1
        }
      },
      notchedOutline: {
        borderColor: theme.palette.divider
      },
      error: {},
      focused: {},
      disabled: {}
    }),
  { name: 'OutlinedInputStyled' }
);

const ListboxStyled = makeStyles(
  () =>
    createStyles({
      listbox: {
        listStyle: 'none',
        margin: 0,
        padding: '8px 0',
        maxHeight: '40vh'
      }
    }),
  { name: 'ListboxStyled' }
);

const PopperStyled = (props: PopperProps) => <Popper {...props} style={{ ...props.style, zIndex: 1200 }} />;

const useSearchDebounce = (onSearch?: (value: string) => void, delay = 0) => {
  const timeoutRef = useRef<number | null | NodeJS.Timeout>(null);

  const debouncedChange = (value: string) => {
    clearTimeout(timeoutRef?.current as number);
    timeoutRef.current = setTimeout(() => onSearch && onSearch(value), delay);
  };

  return debouncedChange;
};

/**
 * [RdsField Examples](https://diegoavieira.github.io/rdsystem/components/rds-field)
 */
const RdsField: FC<RdsFieldProps> = ({
  classes,
  label,
  name,
  hideHelperText,
  helperText = ' ',
  margin = 0,
  width = 'initial',
  dense,
  disabled,
  required,
  type = 'text',
  datepicker,
  minDate,
  timepicker,
  multiline,
  minRows = 4,
  maxRows = 4,
  min = 0,
  select,
  selectedKey = 'key',
  selectedLabel = 'primary',
  options = [],
  multiple,
  placeholder,
  notFoundText = 'Not found results',
  hideSelectedLabel,
  onOptionSelected,
  onSearch,
  loading,
  searchDelay: delay = 520,
  currency,
  accept,
  onFileLoaded
}) => {
  const [field, meta, helpers] = useField(name);
  const error = meta.touched && meta.error ? meta.error : '';
  const [inputValue, setInputValue] = useState('');
  const isTypeFile = type === 'file';
  const [filename, setFilename] = useState('');
  const labelRef = useRef<HTMLLabelElement>(null);

  const onSearchDebounce = useSearchDebounce(onSearch, delay);

  const RdsOption: FC<RdsOptionProps> = ({ primary, secondary, avatar, icon, selected }) => (
    <>
      {multiple && (
        <ListItemIcon className={classes.optionCheckbox}>
          <Checkbox edge="start" checked={selected} />
        </ListItemIcon>
      )}
      {avatar && (
        <ListItemAvatar>
          <Avatar src={avatar}></Avatar>
        </ListItemAvatar>
      )}
      {icon && <ListItemIcon className={classes.optionIcon}>{icon}</ListItemIcon>}
      <ListItemText primary={primary} secondary={secondary} />
    </>
  );

  const currencyFormatter = (value: string) => {
    if (currency === 'BRL') {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency
      }).format(Number(value) / 100);
    } else {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency
      }).format(Number(value) / 100);
    }
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const target = event.target as HTMLInputElement;
    const file = target.files && target.files[0];

    if (file) {
      reader.onloadend = (event) => {
        setFilename(file.name);
        const value = { data: event.target?.result, type: file.type };
        helpers.setValue({ ...value });
        onFileLoaded && onFileLoaded({ ...value });
      };

      reader.readAsText(file);
    }
  };

  const onClearFile = () => {
    helpers.setValue(null);
  };

  useEffect(() => {
    if (isTypeFile && !field.value) {
      setFilename('');
    }
  }, [isTypeFile, field.value]);

  return (
    <>
      {!datepicker && !timepicker && !select && !currency && (
        <FormControl
          data-testid="rds-field"
          className={classes.root}
          variant="outlined"
          size={dense ? 'small' : 'medium'}
          style={{ margin, width }}
          error={!!error}
          disabled={disabled}
          required={required}
        >
          <InputLabel
            htmlFor={name}
            shrink={isTypeFile ? !!filename : undefined}
            focused={isTypeFile ? !!filename : undefined}
            ref={labelRef}
          >
            {label}
          </InputLabel>
          {isTypeFile && filename && (
            <InputLabel shrink={false} focused={false}>
              {filename}
            </InputLabel>
          )}
          <OutlinedInput
            type={type}
            id={name}
            classes={OutlinedInputStyled()}
            labelWidth={isTypeFile ? (!!filename ? labelRef.current?.offsetWidth : 0) : labelRef.current?.offsetWidth}
            endAdornment={
              isTypeFile && (
                <InputAdornment position="end">
                  {filename ? (
                    <IconButton edge="end" onClick={onClearFile}>
                      <CloseOutlinedIcon />
                    </IconButton>
                  ) : (
                    <IconButton edge="end" component="label" htmlFor={name}>
                      <CloudUploadOutlinedIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              )
            }
            inputProps={{
              className: 'rds-scrollbar',
              min,
              accept,
              title: '',
              style: { opacity: isTypeFile ? 0 : 'initial' },
              onChange: isTypeFile ? field.onBlur : undefined
            }}
            multiline={multiline}
            minRows={minRows}
            maxRows={maxRows}
            placeholder={placeholder}
            {...field}
            onBlur={isTypeFile ? undefined : field.onBlur}
            value={isTypeFile ? undefined : field.value}
            onChange={isTypeFile ? onChangeFile : field.onChange}
          />
          {!hideHelperText && (
            <FormHelperText style={{ maxWidth: 'fit-content' }}>{error || helperText}</FormHelperText>
          )}
        </FormControl>
      )}
      {currency && (
        <NumberFormat
          data-testid="rds-field"
          customInput={TextField}
          className={classes.root}
          variant="outlined"
          size={dense ? 'small' : 'medium'}
          label={label}
          type="tel"
          helperText={hideHelperText ? null : error || helperText}
          style={{ margin, width }}
          error={!!error}
          InputProps={{ classes: OutlinedInputStyled() }}
          FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
          disabled={disabled}
          required={required}
          placeholder={placeholder}
          format={currencyFormatter}
          name={field.name}
          value={field.value}
          onBlur={field.onBlur}
          onValueChange={({ floatValue }) => {
            field.onChange({
              target: { name, value: floatValue }
            });
          }}
        />
      )}
      {datepicker && (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardDatePicker
            className={classes.root}
            label={label}
            variant="inline"
            inputVariant="outlined"
            InputProps={{ classes: OutlinedInputStyled() }}
            disableToolbar
            autoOk
            format="DD/MM/YYYY"
            helperText={hideHelperText ? null : error || helperText}
            error={!!error}
            {...field}
            onChange={(date) => helpers.setValue(date)}
            KeyboardButtonProps={{ edge: 'end' }}
            size={dense ? 'small' : 'medium'}
            disabled={disabled}
            required={required}
            style={{ margin, width }}
            FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
            minDate={minDate}
            keyboardIcon={<EventOutlinedIcon />}
          />
        </MuiPickersUtilsProvider>
      )}
      {timepicker && (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardTimePicker
            className={classes.root}
            label={label}
            variant="inline"
            inputVariant="outlined"
            InputProps={{ classes: OutlinedInputStyled() }}
            disableToolbar
            autoOk
            ampm={false}
            format="HH:mm"
            helperText={hideHelperText ? null : error || helperText}
            error={!!error}
            {...field}
            onChange={(date) => helpers.setValue(date)}
            KeyboardButtonProps={{ edge: 'end' }}
            size={dense ? 'small' : 'medium'}
            disabled={disabled}
            required={required}
            style={{ margin, width }}
            FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
            keyboardIcon={<AccessTimeOutlinedIcon />}
          />
        </MuiPickersUtilsProvider>
      )}
      {select && (
        <Autocomplete
          data-testid="rds-field"
          className={classes.root}
          options={options.filter(({ hidden }) => !hidden)}
          limitTags={2}
          getOptionLabel={(option) => option[selectedLabel]}
          getOptionSelected={(option, value) => option[selectedKey] === value[selectedKey]}
          style={{ margin, width }}
          selectOnFocus={false}
          onChange={(event, value) => {
            helpers.setValue(value);
            onOptionSelected && onOptionSelected(value);
          }}
          value={field.value}
          onInputChange={(event, value, reason) => {
            if (hideSelectedLabel && reason !== 'reset') {
              setInputValue(value);
            }

            if (!hideSelectedLabel) {
              setInputValue(value);
            }

            if (reason !== 'reset') {
              onSearchDebounce(value);
            }
          }}
          inputValue={inputValue}
          onBlur={() => helpers.setTouched(true)}
          openText={''}
          clearText={''}
          closeText={''}
          disabled={disabled}
          multiple={multiple}
          disableCloseOnSelect={multiple}
          noOptionsText={notFoundText}
          loading={loading}
          loadingText={<CircularProgress size={16} color="inherit" style={{ position: 'relative', top: '2.5px' }} />}
          PopperComponent={PopperStyled}
          ListboxProps={{ className: `${ListboxStyled().listbox} rds-scrollbar-y` }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              name={name}
              label={label}
              size={dense ? 'small' : 'medium'}
              helperText={hideHelperText ? null : error || helperText}
              InputProps={{
                ...params.InputProps,
                classes: OutlinedInputStyled()
              }}
              error={!!error}
              FormHelperTextProps={{ style: { maxWidth: 'fit-content' } }}
              required={required}
              placeholder={placeholder || 'Search...'}
            />
          )}
          renderOption={(option, { selected }) => {
            return <RdsOption {...option} selected={selected} />;
          }}
          renderTags={(value, getTagProps) =>
            !hideSelectedLabel &&
            value.map((option, index) => (
              <Chip
                key={index}
                label={option[selectedLabel]}
                icon={option.icon}
                avatar={option.avatar}
                size={dense ? 'small' : 'medium'}
                style={{ margin: '0 3px 0 0' }}
                {...getTagProps({ index })}
              />
            ))
          }
        />
      )}
    </>
  );
};

export default withStyles(RdsFieldStyles, { name: 'RdsField' })(RdsField);
