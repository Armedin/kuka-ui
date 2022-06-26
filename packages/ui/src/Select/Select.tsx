import styled from '@emotion/styled';
import React, { useCallback, useRef, useState } from 'react';
import { useEffect } from 'react';
import IconButton from '../IconButton';
import Input from '../Input';
import { ChevronDownSolid } from '../lib/icons';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Popper from '../Popper';
import { scrollIntoView } from '../utils';

export interface Option {
  value: string;
  label: string;
  inputValue?: string;
}

export interface SelectProps {
  id?: string;
  options?: Option[];
  className?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  helperText?: string;
  required?: boolean;
  error?: boolean;
  onChange?: (event: any, value: string) => void;
  onCreateOption?: (value: string) => void;
  isCreatable?: boolean;
}

const SelectRoot = styled('div')({});

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
    onChange,
    onCreateOption,
    isCreatable = false,
  } = inProps;

  const inputRef = useRef<HTMLInputElement>(null);
  const anchorEl = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState<Option | null>(null);
  const [inputValue, setInputValue] = useState('');

  const filteredOptions = popupOpen
    ? filterOptions(options, { inputValue, isCreatable })
    : [];

  const getOptionLabel = (option: Option) => {
    if (typeof option === 'string') {
      return option;
    }
    // For creatable case
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  };
  const handleOpen = (event: any) => {
    if (popupOpen) {
      return;
    }

    setPopupOpen(true);
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
    handleClose(event);
  };

  const handleInputChange = (event: any) => {
    const newValue = event.target.value;
    if (inputValue !== newValue) {
      setInputValue(newValue);
    }
  };

  const handleOptionClick = (event: any, option: Option) => {
    setValue(option);
    setInputValue(getOptionLabel(option));
    if (onChange) {
      onChange(event, option.value);
    }
    if (option.inputValue && onCreateOption) {
      onCreateOption(option.value);
    }
    inputRef.current?.blur();
  };

  const renderOption = (option: Option, index: number) => {
    const optionProps = {
      tabIndex: -1,
      role: 'option',
      onClick: (event: any) => handleOptionClick(event, option),
      'aria-selected': option === value,
      'data-option-index': index,
    };

    return (
      <MenuItem key={index} {...optionProps}>
        {option.label}
      </MenuItem>
    );
  };

  const sync = useCallback(() => {
    if (!popupOpen || !menuRef.current || !value) {
      return;
    }

    const selectedOptionIndex = options.findIndex(option => option === value);

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
    sync();
  }, [sync]);

  return (
    <React.Fragment>
      <SelectRoot className="KukuiSelect">
        <Input
          ref={anchorEl}
          inputRef={inputRef}
          placeholder="Select category..."
          label={label}
          helperText={helperText}
          value={inputValue}
          onClick={handleClick}
          onChange={handleInputChange}
          suffix={
            <IconButton size="small">
              <SelectIcon className="KukuiSelectIcon" as={ChevronDownSolid} />
            </IconButton>
          }
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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
