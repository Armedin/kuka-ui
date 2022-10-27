import styled from '@emotion/styled';
import React, { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';
import { ControllerProps } from 'react-hook-form';
import Badge from '../Badge';
import IconButton from '../IconButton';
import Input from '../Input';
import ValidationInput from '../Input/ValidationInput';
import { ChevronDownSolid } from '../lib/icons';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import { scrollIntoView } from '../utils';

export interface Option {
  value: string;
  label: string;
  inputValue?: string;
}

export interface SelectProps {
  id?: string;
  options?: Option[];
  // value?: string | string[] | Option | null;
  value?: any;
  inputValue?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  validation?: ControllerProps['rules'];
  required?: boolean;
  isControlled?: boolean;
  error?: boolean;
  onChange?: (event: any, value: string | string[]) => void;
  onCreateOption?: (value: string) => void;
  isCreatable?: boolean;
  multiple?: boolean;
}

const SelectRoot = styled('div')({
  ['& .KukuiBadge']: {
    margin: 3,
    maxWidth: 'calc(100% - 6px)',
  },
  ['& .KukuiInputWrapper']: {
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  ['& .KukuiInputPrefixSuffix']: {
    flexWrap: 'wrap',
  },
  ['& .KukuiInput']: {
    flexGrow: 1,
    textOverflow: 'ellipsis',
    width: 0,
    minWidth: 30,
  },
});

const SelectIcon = styled('svg')({
  color: '#a5afbd',
  pointerEvents: 'none',
  fontSize: '12px',
});

const filterOptions = (
  options: Option[],
  { inputValue, isCreatable }: { inputValue: string; isCreatable: boolean }
) => {
  let value = inputValue.toLowerCase();
  const filteredOptions = options.filter(option => {
    let label = option.label.toLocaleLowerCase();
    return label.indexOf(value) > -1;
  });

  if (filteredOptions.length === 0 && value !== '' && isCreatable) {
    const title = `Add "${inputValue}"`;
    filteredOptions.push({ label: title, value: inputValue, inputValue });
  }

  return filteredOptions;
};

const Select = React.forwardRef<any, SelectProps>((inProps, ref) => {
  const {
    options = [],
    label,
    helperText,
    name,
    onChange,
    onCreateOption,
    placeholder = 'Select category...',
    isCreatable = false,
    value: valueProp,
    inputValue: inputValueProp,
    multiple = false,
    validation = {},
    isControlled = false,
    required = false,
  } = inProps;

  const inputRef = useRef<HTMLInputElement>(null);
  const anchorEl = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState<any>(valueProp || (multiple ? [] : null));
  const [inputValue, setInputValue] = useState(inputValueProp ?? '');
  const [inputPristine, setInputPristine] = useState(true);

  useEffect(() => {
    if (inputValueProp) {
      setInputValue(inputValueProp);
    }
  }, [inputValueProp]);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  const getOptionValue = (option: Option | string) => {
    if (typeof option === 'string') {
      return option;
    }

    return option.value;
  };

  const getOptionLabel = (option: Option | string) => {
    if (!option) {
      return '';
    }

    if (typeof option === 'string') {
      return option;
    }
    // For creatable case
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  };

  const isOptionEqualToValue = (
    option: Option | string,
    value: Option | string
  ) => {
    if (!value) {
      return false;
    }

    if (typeof value === 'string') {
      return getOptionValue(option) === value;
    }

    return getOptionValue(option) === value.value;
  };

  // Get the option from the value
  const getOptionFromValue = (value: string): Option => {
    const selectedOption = options.find(item => item.value === value);
    return selectedOption!;
  };

  const inputIsSelectedValue =
    !multiple &&
    value != null &&
    inputValue === getOptionLabel(getOptionFromValue(value));

  const filteredOptions = popupOpen
    ? filterOptions(
        options.filter(option => {
          // Exclude already selected options
          if (
            multiple &&
            value.some(
              (value2: any) => value2 !== null && option.value === value2
            )
          ) {
            return false;
          }
          return true;
        }),
        // options,
        {
          inputValue: inputIsSelectedValue && inputPristine ? '' : inputValue,
          isCreatable,
        }
      )
    : [];

  const resetInputValue = useCallback(
    newValue => {
      // const isOptionSelected = multiple
      //   ? value.length < newValue.length
      //   : newValue !== null && newValue !== undefined;
      // if (!isOptionSelected) {
      //   return;
      // }

      let newInputValue;
      if (multiple) {
        newInputValue = '';
      } else if (newValue == null) {
        newInputValue = '';
      } else {
        const optionLabel = getOptionLabel(newValue);
        newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
      }

      if (inputValue === newInputValue) {
        return;
      }

      setInputValue(newInputValue);
    },
    [inputValue, multiple, value]
  );

  // Either the value is a array (for multiple) or a value string (of option)
  useEffect(() => {
    if (multiple) {
      resetInputValue(value);
    } else {
      resetInputValue(getOptionFromValue(value));
    }
  }, [value, multiple]);

  const handleOpen = (event: any) => {
    if (popupOpen) {
      return;
    }

    setPopupOpen(true);
    setInputPristine(true);
  };

  const handleClose = (event: any) => {
    if (!popupOpen) {
      return;
    }

    setPopupOpen(false);
  };

  const handleClick = (event: any) => {
    inputRef.current!.focus();
  };

  const handleFocus = (event: any) => {
    setFocused(true);
    handleOpen(event);
  };

  const handleBlur = (event: any) => {
    setFocused(false);
    resetInputValue(getOptionFromValue(value));
    handleClose(event);
  };

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValue(newValue);
      setInputPristine(false);
    }
  };

  const handleOptionClick = (event: any, option: Option) => {
    let newValue: any = getOptionValue(option);

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = newValue.findIndex((valueItem: any) =>
        isOptionEqualToValue(option, valueItem)
      );

      if (itemIndex === -1) {
        newValue.push(getOptionValue(option));
      } else {
        newValue.splice(itemIndex, 1);
      }
    }

    resetInputValue(option);
    setValue(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    if (option.inputValue && onCreateOption) {
      onCreateOption(getOptionValue(option));
    }
    setTimeout(() => inputRef.current?.blur());
    // inputRef.current?.blur();
  };

  const renderOption = (option: Option, index: number) => {
    const optionProps = {
      tabIndex: -1,
      role: 'option',
      onClick: (event: any) => handleOptionClick(event, option),
      'aria-selected': isOptionEqualToValue(option, value),
      'data-option-index': index,
    };

    return (
      <MenuItem key={index} {...optionProps}>
        {option.label}
      </MenuItem>
    );
  };

  const syncHighlightedOption = useCallback(() => {
    if (!popupOpen || !menuRef.current || !value) {
      return;
    }

    const selectedOptionIndex = options.findIndex(option =>
      isOptionEqualToValue(option, value)
    );

    if (selectedOptionIndex !== -1) {
      const selectedOption: HTMLElement | null = menuRef.current.querySelector(
        `[data-option-index="${selectedOptionIndex}"]`
      );

      if (selectedOption) {
        scrollIntoView(menuRef.current, selectedOption);
      }
    }
  }, [value, popupOpen, inputValue]);

  useEffect(() => {
    syncHighlightedOption();
  }, [syncHighlightedOption]);

  const handleBadgeRemove = (index: number) => () => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    setValue(newValue);
    onChange?.(null, newValue);
  };

  const renderBadge = (option: any, index: number) => {
    const badgeOptions = {
      tabIndex: -1,
      onRemove: handleBadgeRemove(index),
      'data-badge-index': index,
    };
    return (
      <Badge key={index} content={getOptionLabel(option)} {...badgeOptions} />
    );
  };

  let prefix;

  if (multiple && value.length > 0) {
    prefix = value.map((option: any, index: number) =>
      renderBadge(option, index)
    );
  }

  if (required) {
    validation.required = 'This field is required';
  }

  const hasValidation =
    (Object.keys(validation).length > 0 || isControlled) && name !== undefined;

  return (
    <React.Fragment>
      <SelectRoot className="KukuiSelect">
        {hasValidation ? (
          <ValidationInput
            name={name}
            validation={validation}
            input={
              <Input
                {...{
                  ref: anchorEl,
                  inputRef,
                  placeholder,
                  label,
                  helperText,
                  prefix,
                  required,
                  onClick: handleClick,
                  onChange: handleInputChange,
                  onFocus: handleFocus,
                  onBlur: handleBlur,
                  value: inputValue,
                  actualValue: value,
                  suffix: (
                    <IconButton size="small">
                      <SelectIcon
                        className="KukuiSelectIcon"
                        as={ChevronDownSolid}
                      />
                    </IconButton>
                  ),
                }}
              />
            }
          />
        ) : (
          <Input
            ref={anchorEl}
            inputRef={inputRef}
            placeholder={placeholder}
            label={label}
            helperText={helperText}
            value={inputValue}
            onClick={handleClick}
            onChange={handleInputChange}
            prefix={prefix}
            name={name}
            suffix={
              <IconButton size="small">
                <SelectIcon className="KukuiSelectIcon" as={ChevronDownSolid} />
              </IconButton>
            }
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
      </SelectRoot>
      {popupOpen && anchorEl.current && (
        <Menu
          open
          anchorEl={anchorEl.current}
          closeOnClickAway={false}
          style={{
            maxHeight: '40vh',
            overflow: 'auto',
            boxShadow:
              'rgb(0 0 0 / 10%) 0px 8px 16px, rgb(0 0 0 / 10%) 0px 3px 8px',
            width: anchorEl.current.clientWidth,
            fontSize: 14,
          }}
          onMouseDown={(event: any) => {
            event.preventDefault();
          }}
          ref={menuRef}
        >
          {filteredOptions.map((option, index) => renderOption(option, index))}
        </Menu>
      )}
    </React.Fragment>
  );
});

export default Select;
